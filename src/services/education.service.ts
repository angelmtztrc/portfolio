import { IGetArticlesResponse } from '@interfaces/article';

import { HttpService } from './http.service';

class EducationService extends HttpService {
  async find() {
    this.configRequest('/educations');
    return this.execute<IGetArticlesResponse>();
  }
}

export default new EducationService();
