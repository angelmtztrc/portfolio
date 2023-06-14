import { IImage } from './image';

export interface IArticle {
  id: number;
  attributes: {
    title: string;
    url: string;
    description: string;
    picture: IImage;
  };
}

export interface IGetArticlesResponse {
  data: IArticle[];
}
