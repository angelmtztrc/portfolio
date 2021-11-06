export interface Repository {
  id: string;
  title: string;
  category: {
    name: string;
  };
  picture: {
    url: string;
    alt: string;
  };
  description: string;
  github: string;
  preview: string;
}
