import axios from 'axios';

import { catchError } from '@utils/error.util';

const BASE_URL = process.env.CMS_BASE_URL;
const AUTHORIZATION = process.env.CMS_AUTHORIZATION ?? '';

export class HttpService {
  constructor(
    private endpoint = '/',
    private headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AUTHORIZATION}`
    }
  ) {}

  protected configRequest(endpoint = '/') {
    this.endpoint = endpoint;
  }

  protected getPath() {
    return `${BASE_URL}${this.endpoint}?populate=*`;
  }

  protected async execute<R>(): Promise<R> {
    return axios
      .get(this.getPath(), { headers: this.headers })
      .then(res => res.data)
      .catch(catchError);
  }
}
