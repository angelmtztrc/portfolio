import { GraphQLClient } from 'graphql-request';

type ExecuteProps = {
  query: string;
  variables?: Record<string, unknown>;
};

export class GraphQLService {
  private readonly client: GraphQLClient;

  constructor(private endpoint = 'https://graphql.datocms.com/') {
    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        Authorization: process.env.CMS_KEY ?? ''
      }
    });
  }

  protected execute<R>({ query, variables }: ExecuteProps): Promise<R> {
    return this.client.request<R>(query, variables);
  }
}
