
import './App.css';
import TourDetails from './components/TourDetails/TourDetails';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route} from 'react-router-dom'; 
import datajson from './data/db.json';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
function App() {
  
  return (
   <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/city/:id' element={<TourDetails data={datajson}/>}/>
  
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
