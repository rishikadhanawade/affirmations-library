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
          <div key={category}>
            <h2>{category.replace(/-/g, ' ')}</h2>
            <ul>
              {affirmations[category].map((affirmation, index) => (
                <li key={index}>{affirmation}</li>
              ))}
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
