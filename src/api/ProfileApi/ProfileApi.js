import {get, post} from '../BaseApi';

const getUserProfile = async (baseUrl, username) => {
  const url = `${baseUrl}/users/${username}`;
  const result = await get(url, {username});
  return await result;
}

const UsersApi = baseUrl => ({
  getUserProfile: username => getUserProfile(baseUrl, username),
});

export default UsersApi;