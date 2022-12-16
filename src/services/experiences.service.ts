import { GET_EXPERIENCES } from '@graphql/queries';
import { IGetExperiencesResponse } from '@interfaces/experience';

import { GraphQLService } from './graphql.service';

class ExperiencesService extends GraphQLService {
  async findExperiences() {
    return this.execute<IGetExperiencesResponse>({ query: GET_EXPERIENCES });
  }
}

export default new ExperiencesService();
