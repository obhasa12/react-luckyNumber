import { useState } from "react";
import { getRolls } from "./utils/diceUtils";
import Dice from "./Dice";
import Button from "./Button";

const LuckyDice = ({title="Dice Game", numDice=2, winCheck}) => {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = winCheck(dice)

    const roll = () => {
        setDice(getRolls(numDice))
    }

    return (  
        <main className="lucky-dice">
            <h1>{title} { isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            {/* <button onClick={roll} >Re-Roll Dice</button> */}
            <Button event={roll} label="Re-Roll"/>
        </main>
    );
}
 
export default LuckyDice;