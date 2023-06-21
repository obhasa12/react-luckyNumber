import './Die.css'

const Die = ({val, color="slateblue"}) => {
    return (  
        <div style={{backgroundColor: color}} className="die">
            {val}
        </div>
    );
}
 
export default Die;