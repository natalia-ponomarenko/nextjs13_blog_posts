import { Filter } from "@/types/Filter";
import { API_KEY, BASE_API, TOP_US_HEADLINES } from "@/utils/constants";

export const getNewsData = async (filters: Filter) => {
  let url = BASE_API;
  let { query, language } = filters;

  query
    ? (url += `everything?q=${query}&language=${language}&apiKey=${API_KEY}`)
    : (url += TOP_US_HEADLINES);

  const res = await fetch(url);
  return res.json();
};

