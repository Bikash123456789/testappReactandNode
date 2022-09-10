import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React : Hello from React</h1>
        <h1>Express : {data}</h1>
      </header>
    </div>
  );
}

export default App;
