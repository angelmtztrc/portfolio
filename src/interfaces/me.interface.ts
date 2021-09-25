import { ResponsiveImage } from './responsive-image.interface';
import { Education } from './education.interface';
import { Certificate } from './certificate.interface';
import { Experience } from './experience.interface';

export interface Me {
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
  picture: {
    responsiveImage: ResponsiveImage;
  };
}
