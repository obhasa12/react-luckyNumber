import { useState } from "react";
import Box from "./Box";

function BoxGrid({numBoxes}) {
    const [boxes, setBoxes] = useState([false, true, false, true, false, false,false, false, false])

    const reset = () => {
        setBoxes([false, false, false, false, false, false,false, false, false])
    }

    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => { 
                if(i === idx){
                    return !value
                }else{
                    return value
                }
            })
        })
    }

    return (  
        <div className="box-grid">
            {boxes.map((b, i) => <Box active={b} toggleBox={() => toggleBox(i)} key={i}/>)}
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default BoxGrid;