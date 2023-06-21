import "./Box.css"

const Box = ({active, toggleBox}) => {

    return (  
        <div
        onClick={toggleBox} 
        className="box" 
        style={{backgroundColor: active? "red": "black"}}>
        </div>
    );
}
 
export default Box;