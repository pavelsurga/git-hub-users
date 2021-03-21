import BaseApi from '../BaseApi';

class UsersApi extends BaseApi {
  constructor (baseUrl) {
    super(baseUrl);
  }

  async getUsers (data) {
    const newData = {...data, q: `type:user`}
    const url = `search/users`;
    const result = await this.get(url, newData);
    return await result;
  }
}


export default UsersApi;