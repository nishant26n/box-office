import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOption] = useState('shows');
  const isShowsSeach = searchOptions === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
      setResults(result);
      // console.log(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows{' '}
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowsSeach}
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor="actors-search">
          Actors{' '}
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowsSeach}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
