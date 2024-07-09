
import generateRandomNum from '../../Utils/RandomNum';
import GuessTips from '../../Utils/GuessTips';




type TipMessageProps = {
  userNum: string
}
const TipMessage= function({userNum}:TipMessageProps) {

  const hint:number = generateRandomNum()
  const guessHint:string[] = GuessTips;
  const guess = Number(userNum)
  if (!guess) {
    return (
      <h2>{guessHint[3]}</h2>
    )
  }
    else if (guess < hint) {
    return (
      <h2>{guessHint[0]}</h2>
    )
  }
  else if (guess > hint) {
    return (
      <h2>{guessHint[1]}</h2>
    )
  }
  else if (guess === hint) {
    return (
      <h2>{guessHint[2]}</h2>
    )
  }
  
}

export default TipMessage;