import { type FC, FormEvent, useRef } from 'react'
import Button from '../../UI/Button'

interface GuessInputProps {
  onGuess: (guess: string) => void
}

const GuessInput:FC<GuessInputProps> = (props)=>{
  const guess = useRef<HTMLInputElement>(null)
  const {onGuess} = props


  function handleUserGuess(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const enteredGuess = guess.current!.value

    onGuess(enteredGuess)

  }

  return (
    <form onSubmit={handleUserGuess}>
      <input type="text"  className='text-black' ref={guess}/>
      <Button classname=''>Check!</Button>
    </form>
  )
}

export default GuessInput;