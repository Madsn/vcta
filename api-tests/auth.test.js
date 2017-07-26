import request from './request';

test('Not possible to get user info when not authenticated', async () => {
  console.log('starting');
  expect.assertions(1);
  const response = await request('/user');
  console.log(response);
  expect(response).toMatchSnapshot();
})