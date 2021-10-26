export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  category: {
    name: string;
  };
  picture: {
    url: string;
    alt: string;
  };
}
