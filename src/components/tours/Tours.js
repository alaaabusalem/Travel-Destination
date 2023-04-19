
import './Tours.css';
function Tours(props){
    
return(
    <>
    
    {props.data.map((ele)=>{
        return(
            <div class="tours-div">
                <h2>{ele.name}</h2>
            <img src={ele.image} alt={ele.image}></img>
            </div>
        )
    })}
    </>
)
}
export default Tours;