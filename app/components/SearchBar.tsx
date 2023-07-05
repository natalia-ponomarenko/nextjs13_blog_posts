"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [hasQueryParam, setHasQueryParam] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query === "") {
      return alert("Please fill in the search bar");
    }

    updateSeachParams(query.toLowerCase());
  };

  const updateSeachParams = (query: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    setHasQueryParam(true);

    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  const handleReturn = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("query");

    setHasQueryParam(false);

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);

    setQuery("");
  };

  return (
    <>
      <form action="GET" onSubmit={handleSearch}>
        <input
          type="text"
          name="product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-2"
        />
        <button type="submit">Search</button>
      </form>
      {hasQueryParam && (
        <button onClick={handleReturn}>Get back to list</button>
      )}
    </>
  );
};

export default SearchBar;