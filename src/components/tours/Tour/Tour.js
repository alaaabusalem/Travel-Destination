

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link,useNavigate } from 'react-router-dom';
import TourDetails from '../../TourDetails/TourDetails';
function Tour(props){


    return(
      <>
      {props.data.map((ele)=>{
        return(
            <Link to=''>
            <Card style={{ width: '18rem' }} key={ele.id} className='flex-column justify-content-center'>
      <Card.Img variant="top" src={ele.image} alt={ele.image}/>
      <Card.Body>
        <Card.Title>{ele.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Button variant="primary" >Details</Button>
       
      </Card.Body>
    </Card>
    </Link>
        )
    })}
      </>
    )
}
export default Tour;