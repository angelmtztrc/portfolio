import { IImage } from './image';

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  content: string;
  picture: IImage;
  createdAt: Date;
}

export interface IGetArticlesResponse {
  allArticles: IArticle[];
}
