import Footer from "../footer/Footer";
import Header from "../header/Header";
import datajson from '../..//data/db.json';
import Tours from '../tours/Tours.js';
import './Home.css';
function Home(){
    return (

        <div className="home-div">
       
   <Header/>
   <Tours data={datajson}/>
   <Footer/>
 
        </div>
    );
}
export default Home;