import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/types';

/**
 * Send request to a GraphQL API
 * @param {{query: string, variables?: Variables, preview?: boolean}} RequestProps - Object to construct the request
 * @returns Promise<unknown>
 */
export const request = <R extends unknown>({
  query,
  variables,
  preview
}: RequestProps): Promise<R> => {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`
    }
  });

  return client.request(query, variables);
};

type RequestProps = {
  query: string;
  variables?: Variables;
  preview?: boolean;
};
