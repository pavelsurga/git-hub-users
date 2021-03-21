import BaseApi from '../BaseApi';

class ProfileApi extends BaseApi {
  constructor(baseUrl) {
    super(baseUrl)
  }
  async getUserProfile (username)  {
    const url = `users/${username}`;
    const result = await this.get(url);
    return await result;
  }
  
}

export default ProfileApi;