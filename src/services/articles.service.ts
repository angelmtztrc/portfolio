import { IGetArticlesResponse } from '@interfaces/article';

import { HttpService } from './http.service';

class ArticlesService extends HttpService {
  async find() {
    this.configRequest('/articles');
    return this.execute<IGetArticlesResponse>();
  }
}

export default new ArticlesService();
