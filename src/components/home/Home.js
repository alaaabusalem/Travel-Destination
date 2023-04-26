import Footer from "../footer/Footer";
import Header from "../header/Header";

import Tours from '../tours/Tours.js';
import './Home.css';
function Home(){
   
    return (

        <div className="home-div">
       
   <Header/>
   <Tours/>
   <Footer/>
 
        </div>
    );
}
export default Home;