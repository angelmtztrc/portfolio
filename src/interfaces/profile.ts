import { IImage } from './image';

export interface IProfile {
  id: number;
  attributes: {
    name: string;
    role: string;
    location: string;
    biography: string;
    abilities: string;
    social: Record<string, string>;
    picture: IImage;
  };
}

export interface IGetProfileResponse {
  data: IProfile;
}
