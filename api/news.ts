import { Filter } from '@/types/Filter';
import { newsClient } from '../utils/fetchNews';
import { News } from '@/types/News';

export const getNewsData = (filters: Filter) => {
  return newsClient.get<News>(filters);
};