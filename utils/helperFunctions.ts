import { Article } from "@/types/News";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export const formatTitle = (title: string) => {
  if(title.length > 50) {
    return title.slice(0, 50) + '...';
  }

    return title;
};

export function removeDuplicateArticles(array: Article[]) {
  const uniqueSet = new Set();
  const resultArray = [];

  for (const article of array) {
    const uniqueValue = article['url'];
    if (!uniqueSet.has(uniqueValue)) {
      uniqueSet.add(uniqueValue);
      resultArray.push(article);
    }
  }

  return resultArray;
}
