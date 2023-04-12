import { IImage } from './image';

export interface IArticle {
  url: string;
  title: string;
  description: string;
  picture: IImage;
}

export interface IGetArticlesResponse {
  allArticles: IArticle[];
}

export interface IGetArticleResponse {
  article: IArticle;
}
