'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LANGUAGES } from '@/utils/constants';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query === '') {
      return alert('Please fill in the search bar');
    }

    updateSearchParams();
  };

  const updateSearchParams = () => {
    const queryParam = query
      ? `query=${query.toLowerCase()}`
      : '';
    const languageParam = language
      ? `language=${language}`
      : '';

    const queryParams = [queryParam, languageParam].filter(Boolean).join('&');

    router.push(`/news?${queryParams}`);
  };

  const handleReturn = () => {
    setQuery('');
    setLanguage('en');
    router.push('/news');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {Object.entries(LANGUAGES).map(([code, name]) => (
            <option
              key={code}
              value={code}
            >
              {name}
            </option>
          ))}
        </select>

        <button type="submit">Search</button>
      </form>

      <button onClick={handleReturn}>Return to the top US news</button>
    </div>
  );
};

export default SearchBar;

