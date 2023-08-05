export interface IEducation {
  id: string;
  attributes: {
    degree: string;
    school: string;
    from: Date;
    to: Date;
  };
}

export interface IGetEducationsResponse {
  data: IEducation[];
}
