import { IGetProfileResponse } from '@interfaces/profile';

import { HttpService } from './http.service';

class ProfileService extends HttpService {
  async findOne() {
    this.configRequest('/profile');

    return this.execute<IGetProfileResponse>();
  }
}

export default new ProfileService();
