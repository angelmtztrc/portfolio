export interface Certificate {
  id: string;
  url: string;
  title: string;
  credentialId: string;
  issued: Date;
  picture: {
    url: string;
    alt: string;
  };
  company: {
    name: string;
  };
}
