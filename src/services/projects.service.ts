import { GET_PROJECTS } from '@graphql/queries';
import { IGetProjectsResponse } from '@interfaces/project';

import { GraphQLService } from './graphql.service';

class ProjectsService extends GraphQLService {
  async find() {
    return this.execute<IGetProjectsResponse>({ query: GET_PROJECTS });
  }
}

export default new ProjectsService();
