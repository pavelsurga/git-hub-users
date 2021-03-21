import ProfileApi from './ProfileApi/ProfileApi';
import UsersApi from './UsersApi/UsersApi';

const createApi = baseUrl => ({
  ProfileApi: new ProfileApi(baseUrl),
  UsersApi: new UsersApi(baseUrl),
});

export default createApi;