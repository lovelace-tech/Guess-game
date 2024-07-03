// import React from 'react'

import GuessInput from "./Features/GuessInput/GuessInput";
import Hint from "./Features/Hint/Hint";
import Reveal from "./Features/Reveal/Reveal";
import TipMessage from "./Features/TipMessage/TipMessage";
import Button from "./UI/Button";
import Container from "./UI/Container";
import Flex from "./UI/Flex/Flex";
import Scores from "./UI/Scores/Scores";

const App:React.FC = function() {
  return (
    // <Flex></Flex>
    <Container classname={`mx-auto bg-green-500 p-10`}>
      <Flex classname='justify-between'>
        <Hint/>
        <Button classname=''>Again</Button>
      </Flex>
      <Reveal/>
      <GuessInput/>
      <Button classname=''>check</Button>
      <TipMessage/>
      <Scores>
        <span>Score:</span>
        <span>
          <strong>20</strong>
        </span>
      </Scores>
      <Scores>
        <span>Highscore:</span>
        <span>
          <strong>0</strong>
        </span>
      </Scores>
    </Container>
  )
}

export default App;