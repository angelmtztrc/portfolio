import { IImage } from './image';

export interface IProject {
  id: number;
  attributes: {
    name: string;
    description: string;
    picture: IImage;
    url: string;
  };
}

export interface IGetProjectsResponse {
  data: IProject[];
}
