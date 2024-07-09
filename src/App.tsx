// import React from 'react'

import { useState } from "react";
import GuessInput from "./Features/GuessInput/GuessInput";
import Hint from "./Features/Hint/Hint";
import Reveal from "./Features/Reveal/Reveal";
import TipMessage from "./Features/TipMessage/TipMessage";
import Button from "./UI/Button";
import Container from "./UI/Container";
import Flex from "./UI/Flex/Flex";
import GameScore from "./Features/GameScore";
import generateRandomNum from "./Utils/RandomNum";

const App:React.FC = function() {
  const [userNum,setUserNum] = useState<string>('')
  const [score,setScore] = useState<number>(20)
  const [reveal,setReveal] = useState<string>('?')
  const randomNum = generateRandomNum()
  console.log(randomNum)

  function handleUserNum (num:string) {
    setUserNum(num)
  }
  function handleScore() {
    const guess = Number(userNum)
    if (guess < randomNum) {
      setScore(s=>s-1)
    }
    else if (guess > randomNum) {
      setScore(s=>s-1)
    }

  }
  function handleReveal () {
    const guess = Number(userNum)
    if (guess === randomNum) {
      setReveal(userNum)
    }
  }
  return (
    <Container classname={`mx-auto bg-green-500 p-10 h-screen`}>
      <Flex classname='justify-between'>
        <Hint/>
        <Button onclick={()=>{}} classname=''>Again</Button>
      </Flex>
      <Reveal userNum = {userNum} reveal = {reveal}/>
      <GuessInput onGuess = {handleUserNum} score={handleScore} onReveal={handleReveal}/>
      <TipMessage userNum = {userNum}/>
      <GameScore score={score}/>
  
    </Container>
  )
}

export default App;