export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export const formatTitle = (title: string) => {
  if (title.length > 100) {
    return title.slice(0, 100) + '...';
  }
  return title;
};

