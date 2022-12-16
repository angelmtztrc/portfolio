export interface IExperience {
  id: string;
  title: string;
  description: string;
  company: string;
  from: Date;
  to: Date;
}

export interface IGetExperiencesResponse {
  allExperiences: IExperience[];
}
