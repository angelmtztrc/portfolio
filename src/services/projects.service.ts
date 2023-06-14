import { IGetProjectsResponse } from '@interfaces/project';

import { HttpService } from './http.service';

class ProjectsService extends HttpService {
  async find() {
    this.configRequest('/projects');
    return this.execute<IGetProjectsResponse>();
  }
}

export default new ProjectsService();
