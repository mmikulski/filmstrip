import {useQuery} from 'react-query';

const baseUrl = (process.env.REACT_APP_PROTOCOL || 'http') + '://www.omdbapi.com/?';
const apiKey = (process.env.REACT_APP_OMDB_API_KEY || 'apiKey');

function yearFromString(keyword: string): string {
  const yearInParenthesesRegExp = /[(]\d{4}[)]/;
  const yearInParentheses = keyword.match(yearInParenthesesRegExp);

  if (null === yearInParentheses) {
    return '';
  }

  const year = yearInParentheses[0].match(/\d{4}/);
  return '&y=' + year;
}

export function buildSearchParams(keyword: string) {
  const keywordParam = 's=' + keyword;
  const yearParam = yearFromString(keyword);

  return keywordParam + yearParam;
}

export const useMovieSearch = (keyword: string) => {
  const apiKeyParam = 'apiKey=' + apiKey;
  const searchParams = keyword && buildSearchParams(keyword);

  return useQuery(
    ['movies', keyword],
    async () => {
      return fetch(
        baseUrl + apiKeyParam + "&" + searchParams,
        {
          method: "GET",
          redirect: 'follow',
          headers: {
            Accept: 'application/json',
          }
        }
      ).then(
        async (res) => {
          let data =  await res.json();
          if (data && data.Search) {
             data = data.Search
          }

          return data;
        }
      );
    }
  );
}
