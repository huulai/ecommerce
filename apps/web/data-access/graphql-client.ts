import { getGraphqlClient } from '@api/web/data-access-graphql';

export const gql = getGraphqlClient('http://localhost:3000/graphql', undefined);
