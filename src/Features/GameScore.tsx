// import { useState } from "react";
import Scores from "../UI/Scores/Scores";

type GameScoreProps = {
    score: number
}


export default function GameScore({score}:GameScoreProps) {
    
  return (
    <Scores label="Score : ">{score}</Scores>
  )
}
