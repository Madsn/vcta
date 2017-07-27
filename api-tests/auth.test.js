import request from './request';
const CREDENTIALS_USER = 'user:password';

function login(credentials) {
  return request('/user', {auth:credentials});
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
  const logoutResponse = await request(`/logout`);
  expect(logoutResponse.snapshot).toMatchSnapshot();
})