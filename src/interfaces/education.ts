export interface IEducation {
  id: string;
  attributes: {
    title: string;
    description: string;
    company: string;
    from: Date;
    to: Date;
  };
}

export interface IGetEducationsResponse {
  data: IEducation[];
}
