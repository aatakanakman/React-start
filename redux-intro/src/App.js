import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseCounter from './components/IncreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';

function App() {
  return (
    <div className = "App ">
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseByTwoCounter></IncreaseByTwoCounter>
    </div>
  );
}

export default App;
 