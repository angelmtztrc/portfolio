export interface IArticle {
  id: number;
  attributes: {
    degree: string;
    school: string;
    from: Date;
    to: Date;
  };
}

export interface IGetArticlesResponse {
  data: IArticle[];
}
