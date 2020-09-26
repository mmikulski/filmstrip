import {useQuery} from 'react-query';

export const initialState = [];
const baseUrl = 'http://www.omdbapi.com/?';
const apiKey = "157f34ed";

export const useMovieSearch = (keyword: string) => {
  const apiKeyParam = 'apiKey=' + apiKey;
  const searchParam = 's=' + keyword;

  return useQuery(
    ['movies', keyword],
    async () => {
      return fetch(
        baseUrl + apiKeyParam + "&" + searchParam,
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
