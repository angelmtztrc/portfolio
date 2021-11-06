import { Education } from './education.interface';
import { Certificate } from './certificate.interface';
import { Experience } from './experience.interface';

export interface Profile {
  name: string;
  username: string;
  biography: string;
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  cover: {
    url: string;
  };
  picture: {
    url: string;
  };
}
