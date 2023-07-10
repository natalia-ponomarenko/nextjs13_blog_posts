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
      alert('Please, fill in the search');
      return;
    }

    updateSearchParams();
  };

  const updateSearchParams = () => {
    const queryParam = query ? `query=${query.toLowerCase()}` : '';
    const languageParam = language ? `language=${language}` : '';

    const queryParams = [queryParam, languageParam].filter(Boolean).join('&');

    router.push(`/news?${queryParams}`);
  };

  const handleReturn = () => {
    setQuery('');
    setLanguage('en');
    router.push('/news');
  };

  return (
    <div
      className="is-flex-desktop is-flex-widescreen
    is-flex-direction-row-desktop is-justify-content-space-between"
    >
      <form
        onSubmit={handleSearch}
        className="is-flex-desktop is-flex-tablet is-flex-wrap-wrap-mobile is-fullwidth-mobile"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="input is-info m-1"
        />
        <div className="select is-info m-1">
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
        </div>

        <button className="button is-link is-light m-1 is-align-self-flex-end-mobile">
          Search
        </button>
      </form>
      <button
        onClick={handleReturn}
        className="button is-link is-light m-1"
        title="Return to the top US news"
      >
        Top US headlines
      </button>
    </div>
  );
};

export default SearchBar;

