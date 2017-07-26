import request from './request';

test('Not possible to get user info when not authenticated', async () => {
  expect.assertions(1);
  const response = await request('/user');
  expect(response).toMatchSnapshot();
})

test('Get user info when sending credentials', async () => {
  expect.assertions(1);
  const response = await request('/user', {auth:'user:password'});
  expect(response).toMatchSnapshot();
})