import { IImage } from './image';

export interface IArticle {
  slug: string;
  title: string;
  tags: string;
  description: string;
  content: string;
  picture: IImage;
  createdAt: Date;
}

export interface IGetArticlesResponse {
  allArticles: IArticle[];
}

export interface IGetArticleResponse {
  article: IArticle;
}
