import './App.css'
import BoxGrid from './BoxGrid'
import LuckyDice from './LuckyDice'
import { lessthan4, sameValue } from './utils/diceUtils'

function App() {
  return (
    <div>
      <LuckyDice winCheck={lessthan4} title='Roll less than 4'/>
      <LuckyDice winCheck={sameValue} title='Roll the same number'/> 
      <BoxGrid />
   </div>
  )
}

export default App
