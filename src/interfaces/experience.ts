export interface IExperience {
  id: string;
  attributes: {
    title: string;
    description: string;
    company: string;
    from: Date;
    to: Date;
  };
}

export interface IGetExperiencesResponse {
  data: IExperience[];
}
