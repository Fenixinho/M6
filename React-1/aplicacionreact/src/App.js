import './App.css';
import Card from './components/Card.js';

function App() {
  return (
    <div>
      <Card 
        ciutat="Barcelona"
        area="101km"/>

      <Card 
        ciutat="Paris"
        area="10222km"/>
        
    </div>
  );
}

export default App;
