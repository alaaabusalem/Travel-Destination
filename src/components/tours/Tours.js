
import './Tours.css';
function Tours(props){
    
return(
    <>
    
    {props.data.map((ele)=>{
        return(
            <div className="tours-div" key={ele.id}>
                <h2>{ele.name}</h2>
            <img src={ele.image} alt={ele.image}></img>
            </div>
        )
    })}
    </>
)
}
export default Tours;