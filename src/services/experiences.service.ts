import { IGetExperiencesResponse } from '@interfaces/experience';

import { HttpService } from './http.service';

class ExperiencesService extends HttpService {
  async find() {
    this.configRequest('/experiences');
    return this.execute<IGetExperiencesResponse>();
  }
}

export default new ExperiencesService();
