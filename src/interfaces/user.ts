import { IImage } from './image';

export interface IUser {
  name: string;
  role: string;
  location: string;
  biography: string;
  abilities: string; // transform?
  picture: IImage;
}
