import { useState } from 'react'
import Button from '../../UI/Button'

interface GuessInputProps {
  onGuess: (guess: string) => void
  score: ()=>void
  onReveal: ()=>void
}


    const GuessInput = ({onGuess,score,onReveal}:GuessInputProps)=>{
    const [guess,setGuess] = useState<string>('')
    function handleUserGuess (e:Event) {
      e.preventDefault()
      onGuess(guess)
      score()
      onReveal()
    }
  return (
    <div>
      <input type="text"  className='text-black' value={guess} onChange={(e) =>{setGuess(e.target.value)}}/>
      <Button classname='' onclick={handleUserGuess}>Check!</Button>
    </div>
  )
}

export default GuessInput;