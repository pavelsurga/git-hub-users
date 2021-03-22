import BaseApi from '../BaseApi';

class UsersApi extends BaseApi {
  constructor (baseUrl) {
    super(baseUrl);
  }

  async getUsersCount () {
    const newData = { per_page:1, q: `type:user`}
    const url = `search/users`;
    const result = await this.get(url, newData);
    return result.success ? {
      success: true,
      data: result.data.total_count
    } : result;
  }
  async getUsers (data) {
    const url = `users`;
    const result = await this.get(url, data);
    return result;
  }
}


export default UsersApi;