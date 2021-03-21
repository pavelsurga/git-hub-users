import BaseApi from '../BaseApi';

class UsersApi extends BaseApi {
  constructor (baseUrl) {
    super(baseUrl);
  }

  async getUsers (data) {
    const url = `users`;
    const result = await this.get(url, data);
    return await result;
  }
}


export default UsersApi;