import { Article } from './article.interface';
import { Me } from './me.interface';
import { Repository } from './repository.interface';

export interface HomePageQueryResponse {
  me: Me;
  allRepositories: Repository[];
  allArticles: Article[];
}
