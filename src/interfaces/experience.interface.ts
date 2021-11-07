export interface Experience {
  id: string;
  title: string;
  description: string;
  from: Date;
  to?: Date;
  company: {
    name: string;
  };
}
