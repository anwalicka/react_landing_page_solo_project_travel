import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TravelCard from './components/TravelCard';
import travelData from './travel-data';
function App() {
  const travelCard = travelData.map(element => {
    return <TravelCard key={element.id} {...element} />
  })
  return (
    <div>
      <Navbar/>
      <div className='travel-cards-container'>

          {travelCard}

      </div>
    </div>
   
  );
}

export default App;
