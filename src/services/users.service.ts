import { GET_USER } from '@graphql/queries';
import { IGetUserResponse } from '@interfaces/user';

import { GraphQLService } from './graphql.service';

class UsersService extends GraphQLService {
  async findUser() {
    return this.execute<IGetUserResponse>({ query: GET_USER });
  }
}

export default new UsersService();
