import { Filter } from '@/types/Filter';
import { API_KEY, BASE_NEWS_API, TOP_US_HEADLINES } from '@/utils/constants';

function requestNews<T>(filters: Filter): Promise<T> {
  let url = BASE_NEWS_API;
  let { query, language } = filters;

  query
    ? (url += `everything?q=${query}&language=${language}&searchIn=title&sortBy=popularity&apiKey=${API_KEY}`)
    : (url += TOP_US_HEADLINES);

  return fetch(url, { cache: 'no-store' }).then((response) => response.json());
}

export const newsClient = {
  get: <T>(filters: Filter) => requestNews<T>(filters),
};
