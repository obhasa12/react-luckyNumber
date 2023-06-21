import Die from "./Die";
import "./Dice.css";

const Dice = ({dice, color}) => {

    return (  
        <section className="dice">
            {dice.map((v, i) => (
                <Die key={i} val={v} color={color}/>
            ))}
        </section>
    );
}
 
export default Dice;