const API_KEY = '12891bf384c1432dbe12ed0b30fa5caf';
const BASE_API = 'https://newsapi.org/v2/';
const TOP_US_HEADLINES = `top-headlines?country=us&apiKey=${API_KEY}`;

export const getNewsData = async (filters) => {
  let url = BASE_API;
  let { query } = filters;

  query
    ? (url += `everything?q=${query}&apiKey=${API_KEY}`)
    : (url += TOP_US_HEADLINES);

  const res = await fetch(url);
  return res.json();
};

