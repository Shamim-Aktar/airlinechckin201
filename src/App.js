
import './App.css';
import Header from './Header/Header';
// import Seatmap from './common/Seatmap';
//import Seat from './Seat/Seat';

import FlightDetails from './flight/FlightDetails';

function App() {
  return (
    <div className="App">
      <Header />
     <FlightDetails/>
    </div>
  );
}

export default App;
