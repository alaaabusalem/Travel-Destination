
import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route} from 'react-router-dom'; 
import TourDetails from './components/TourDetails/TourDetails';
import Tours from './components/tours/Tours';
function App() {
  
  return (
   <>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='city' element={<Tours/>}>
      <Route path=':id' element={<TourDetails/>}/>

      </Route>
      
     </Routes>
   </>
  );
}

export default App;
