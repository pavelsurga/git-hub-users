import ProfileApi from './ProfileApi/ProfileApi';
import UsersApi from './UsersApi/UsersApi';

const createApi = baseUrl => ({
  ProfileApi: ProfileApi(baseUrl),
  UsersApi: UsersApi(baseUrl),
});

export default createApi;