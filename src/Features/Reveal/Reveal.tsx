import {type FC } from 'react'

type RevealProps = {
  userNum: string
  reveal: string
}

const Reveal:FC<RevealProps>= (props)=>{
  const {userNum,reveal} = props;
  const guess = Number(userNum)
  return (
    <div>{reveal}</div>
  )
}

export default Reveal;