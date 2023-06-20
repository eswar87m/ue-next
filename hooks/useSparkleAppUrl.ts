import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { ParsedUrlQuery } from 'querystring';

const useSparkleAppUrl = (): string => {
  const router = useRouter();
  const { query } = router;
  const queryParamsString = useMemo(() => {
    const queryKeys = Object.keys(query);
    if (queryKeys.length === 0) return '';
    
    return queryKeys
      .map((key) => {
        const value = query[key];
        if (Array.isArray(value)) {
          return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join('&');
        } else {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
      })
      .join('&');
  }, [query]);

  const sparkleUrl = useMemo(() => {
    const sparkleBaseUrl = 'https://ue-sparkle-app.adobe.net/';
    if (queryParamsString) {
      return `${sparkleBaseUrl}?${queryParamsString}`;
    } else {
      return sparkleBaseUrl;
    }
  }, [queryParamsString]);

  return sparkleUrl;
};

export { useSparkleAppUrl };
