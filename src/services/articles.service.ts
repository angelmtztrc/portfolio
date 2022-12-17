import { GET_ARTICLES, GET_ARTICLES_SLUGS, GET_ARTICLE_BY_SLUG } from '@graphql/queries';
import { IGetArticleResponse, IGetArticlesResponse } from '@interfaces/article';

import { GraphQLService } from './graphql.service';

class ArticlesService extends GraphQLService {
  async find() {
    return this.execute<IGetArticlesResponse>({ query: GET_ARTICLES });
  }

  async findSlugs() {
    return this.execute<IGetArticlesResponse>({ query: GET_ARTICLES_SLUGS });
  }

  async findOneBySlug(slug: string) {
    return this.execute<IGetArticleResponse>({ query: GET_ARTICLE_BY_SLUG, variables: { slug } });
  }
}

export default new ArticlesService();
