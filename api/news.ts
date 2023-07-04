const API_KEY = '12891bf384c1432dbe12ed0b30fa5caf';
const US_HEADLINES_URL = 'https://newsapi.org/v2/top-headlines?country=us';

export const getNewsData = async () => {
  const res = await fetch(
    `${US_HEADLINES_URL}&apiKey=${API_KEY}`
  );
  return res.json();
};
