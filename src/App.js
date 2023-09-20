
import './App.css';
import Header from './Header/Header';
import Seatmap from './common/Seatmap';
//import Seat from './Seat/Seat';
import Flight from './flight/Flight';

function App() {
  return (
    <div className="App">
      <Header />
       <Seatmap/> 
      <Flight />
    </div>
  );
}

export default App;
