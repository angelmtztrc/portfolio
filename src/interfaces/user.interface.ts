import { IImage } from './image.interface';

export interface IUser {
  name: string;
  role: string;
  location: string;
  biography: string;
  abilities: string; // transform?
  picture: IImage;
}
