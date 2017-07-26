import request from './request';
const CREDENTIALS_USER = 'user:password';

function login(credentials) {
  return request('/user', {auth:credentials});
}

function getXSRFCookie(cookieArray) {
  const xsrfCookie = cookieArray.find(str => str.indexOf('XSRF-TOKEN') > -1);
  //const xsrfToken = xsrfCookie.substring(xsrfCookie.indexOf('=')+1, xsrfCookie.indexOf(";"));
  return xsrfCookie;
}


function getCookiesAsParamString(cookieArray) {
  var paramString = '';
  for (var i in cookieArray) {
    paramString += cookieArray[i].substring(0, cookieArray[i].indexOf(";"));
    if (i < cookieArray.length-1) {
      paramString += '&'
    }
  }
  return paramString;
}

test('Not possible to get user info when not authenticated', async () => {
  expect.assertions(1);
  const response = await request('/user');
  expect(response.snapshot).toMatchSnapshot();
})

test('Get user info when sending credentials', async () => {
  expect.assertions(1);
  const response = await login(CREDENTIALS_USER);
  expect(response.snapshot).toMatchSnapshot();
})

test('Login / Logout', async () => {
  expect.assertions(2);
  const loginResponse = await login(CREDENTIALS_USER);
  expect(loginResponse.snapshot).toMatchSnapshot();
  const cookies = loginResponse.full.headers['set-cookie'];
  const cookieParamString = getCookiesAsParamString(cookies);
  console.log(cookieParamString);
  const logoutResponse = await request(`/logout`);
  expect(logoutResponse.snapshot).toMatchSnapshot();
})