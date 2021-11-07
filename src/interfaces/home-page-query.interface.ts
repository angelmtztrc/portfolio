import { Profile } from './profile.interface';
import { Article } from './article.interface';
import { Experience } from './experience.interface';
import { Repository } from './repository.interface';

export interface HomePageQueryResponse {
  profile: Profile;
  allRepositories: Repository[];
  allArticles: Article[];
  allExperiences: Experience[];
}
