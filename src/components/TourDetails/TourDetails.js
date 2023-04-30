import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { useState } from "react";
function TourDetails(props){
   const tourId=useParams();
    const [view,setview]=useState(false);
    return(
        <>
       {
       props.data.map(function (tour) {
               if (tour.id === tourId.id) {
                   return (
                       <div Key={tour.id} style={{
                           width: '300px',
                           height: '100%',
                           border: '1px solid black',
                           margin: '20px',
                       }}>
                           <image src={tour.img} alt='image' />
                           <h1>{tour.name}</h1>
                           <div>
                               {view?
                                   <><p>{tour.info}</p> <button onClick={() => setview(false)}>Show less</button></>
                                   :
                                   <><p>{(tour.info).substring(0, 100)}</p> <button onClick={() => setview(true)}>Show more</button></>}
                           </div>
                           <h3> Price:{tour.price}</h3>
                       </div>
                   );
               }


           })

       }
        </>
    )
}
export default TourDetails;