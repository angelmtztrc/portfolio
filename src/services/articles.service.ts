import { GET_ARTICLES } from '@graphql/queries';
import { IGetArticlesResponse } from '@interfaces/article';

import { GraphQLService } from './graphql.service';

class ArticlesService extends GraphQLService {
  async findArticles() {
    return this.execute<IGetArticlesResponse>({ query: GET_ARTICLES });
  }
}

export default new ArticlesService();
