import { Profile } from './profile.interface';
import { Repository } from './repository.interface';
import { Article } from './article.interface';
import { Experience } from './experience.interface';
import { Education } from './education.interface';
import { Certificate } from './certificate.interface';

export interface HomeQueryResponse {
  profile: Profile;
  allRepositories: Repository[];
  allArticles: Article[];
  allExperiences: Experience[];
  allEducations: Education[];
  allCertificates: Certificate[];
}
