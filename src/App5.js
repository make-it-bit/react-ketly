import React, { useState } from 'react';
import './styles/app5.css';

const App5 = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
    setIsDisplayed(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`).then((res) => res.json());
      setResults(response.items);
      if (response.items.length > 0) {
        setIsDisplayed(true);
      }
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <>
      <h1 id="h1-github">Project 5 - GitHub User Search!</h1>
      <div className="search-container">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Enter Username or Email" required></input>
          <button type="submit">SEARCH</button>
        </form>
        {isDisplayed && (
          <div className="results">
            <h2>Search Results</h2>
            {results.map((user, index) => (
              <div key={`user-${index}`} className="user">
                <img className="img-github" src={user.avatar_url} alt={`${user.login}-avatar`}></img>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  {user.login}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App5;
