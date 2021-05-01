
import Counter from './Counter';
import './App.css';
import { useSelector } from 'react-redux';


function App() {

  let count = useSelector( ( state ) => state.counter.count )

  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2>The count: { count }</h2>
      <Counter name='Anthony Sistilli'/>
      <Counter name='Bob Smith'/>
      <Counter name='Juji Z'/>
    </div>
  );
}

export default App;
