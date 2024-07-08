import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [affirmations, setAffirmations] = useState({});

  useEffect(() => {
    fetch('/affirmations.json')
      .then(response => response.json())
      .then(data => setAffirmations(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Affirmations</h1>
        {Object.keys(affirmations).map(category => (
          <div key={category} className="category">
            <h2 className="category-title">{category.replace(/-/g, ' ')}</h2>
            <ul className="affirmation-list">
              {affirmations[category].map((affirmation, index) => (
                <li key={index} className="affirmation-item">{affirmation}</li>
              ))}
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
