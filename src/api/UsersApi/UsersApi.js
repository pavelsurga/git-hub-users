import {get, post} from '../BaseApi';

const getUsers = async (baseUrl, data) => {
  const url = `${baseUrl}/users`;
  const result = await get(url, data);
  return await result;
}

const UsersApi = baseUrl => ({
  getUsers: (data) => getUsers(baseUrl, data),
});

export default UsersApi;