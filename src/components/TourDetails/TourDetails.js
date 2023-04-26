
import { useParams } from "react-router-dom";
import datajson from '../..//data/db.json';
function TourDetails(){
    const id=useParams();
    const theId=id.id;
    function Filter(value){
        return value===theId;
    }
    
    let thisTour= datajson.filter(Filter);
    return(
        <>
        <p>{thisTour[0].info}</p>
        <p>{thisTour[0].price}</p>
        </>
    )
}
export default TourDetails;