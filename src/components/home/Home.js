
import datajson from '../..//data/db.json';
import Tours from '../tours/Tours.js';
import './Home.css';
function Home(){
   
    return (

        <div className="home-div">
       
   
   <Tours data={datajson}/>
   
 
        </div>
    );
}
export default Home;