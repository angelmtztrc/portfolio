import { IImage } from './image';

export interface IProject {
  id: string;
  name: string;
  description: string;
  picture: IImage;
  url: string;
}

export interface IGetProjectsResponse {
  allProjects: IProject[];
}
