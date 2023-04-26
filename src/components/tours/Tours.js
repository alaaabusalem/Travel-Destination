import Tour from './Tour/Tour.js';
import './Tours.css';
import datajson from '../..//data/db.json';
function Tours(){
    
    
    
return(
    <>
   <Tour data={datajson}>
   
   </Tour>
    
    </>
)
}
export default Tours;