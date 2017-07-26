import request from './request';

test('Not possible to get user info when not authenticated', async () => {
  expect.assertions(1);
  const response = await request('/user');
  expect(response).toMatchSnapshot();
})