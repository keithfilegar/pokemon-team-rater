import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Analyze your</p>
      </header>
      <body>
      <label
       htmlFor='generation-selector'>Choose a Generation:</label>
       <select
       name='generation-selector'>
         <option value='1'>Generation 1</option>
         <option value='2'>Generation 2</option>
         <option value='3'>Generation 3</option>
         <option value='4'>Generation 4</option>
         <option value='5'>Generation 5</option>
         <option value='6'>Generation 6</option>
         <option value='7'>Generation 7</option>
         <option value='8'>Generation 8</option>
       </select>
      </body>
    </div>
  );
}

export default App;
