import { Article } from './article.interface';
import { Profile } from './profile.interface';
import { Repository } from './repository.interface';

export interface HomePageQueryResponse {
  profile: Profile;
  allRepositories: Repository[];
  allArticles: Article[];
}
