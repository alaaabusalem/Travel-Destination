

import {Link} from 'react-router-dom';
import Tour from './Tour/Tour'

function Tours(props){
       
return(
  <>
   {props.data.map((ele)=>{
        return(
            
            <Link to={`/city/${ele.id}`}>
                <div Key={ele.id} style={{width:'200px',
                height:'300px',
                border: '1px solid black',
                margin:'20px',
                }}>
               <Tour name={ele.name} img={ele.image}/>
               </div>
    </Link>
    )})}
   </>   
)
}
export default Tours;