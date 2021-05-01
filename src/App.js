
import Counter from './Counter';
import './App.css';
import { useSelector } from 'react-redux';


function App() {

  let count = useSelector( ( state ) => state.counter.count )
  let voters =['Anthony Sistilli', 'Bob Smith', 'Juji Best']

  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2>Total count: { count }</h2>
      {voters.map((voter) => (
        <Counter name={ voter } />
      ))}
    </div>
  );
}

export default App;
