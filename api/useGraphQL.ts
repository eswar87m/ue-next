import { useState, useEffect } from 'react';
import { getAuthorHost } from '../utils/fetchData';

import { AEMHeadless } from '@adobe/aem-headless-client-js';

const { GRAPHQL_ENDPOINT } = process.env;

/**
 * Custom React Hook to perform a GraphQL query
 * @param path - Persistent query path
 */
function useGraphQL(path: string) {
  const [data, setData] = useState<any>(null);
  const [errorMessage, setErrors] = useState<string | null>(null);

  useEffect(() => {
    function makeRequest() {
      const sdk = new AEMHeadless({
        serviceURL: getAuthorHost(),
        endpoint: GRAPHQL_ENDPOINT,
      });
      const request = sdk.runPersistedQuery.bind(sdk);

      request(path, {}, { credentials: 'include' })
        .then(({ data, errors }) => {
          // If there are errors in the response, set the error message
          if (errors) {
            setErrors(mapErrors(errors));
          }
          // If there is data in the response, set the data as the result
          if (data) {
            setData(data);
          }
        })
        .catch((error) => {
          setErrors(error.toString());
          sessionStorage.removeItem('accessToken');
        });
    }

    makeRequest();
  }, [path]);

  return { data, errorMessage };
}

/**
 * Concatenate error messages into a single string.
 * @param errors
 */
function mapErrors(errors: any[]): string {
  return errors.map((error) => error.message).join(',');
}

export default useGraphQL;
