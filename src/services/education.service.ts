import { IGetEducationsResponse } from '@interfaces/education';

import { HttpService } from './http.service';

class EducationService extends HttpService {
  async find() {
    this.configRequest('/educations');
    return this.execute<IGetEducationsResponse>();
  }
}

export default new EducationService();
