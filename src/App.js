import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import datajson from './data/db.json';
import Tours from './components/tours/Tours.js';
import './App.css';

function App() {
  return (
   <main>
   <Header/>
   <Tours data={datajson}/>
   <Footer/>
   </main>
  );
}

export default App;
