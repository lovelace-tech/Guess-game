import {type FC } from 'react'
import generateRandomNum from '../../Utils/RandomNum'

type RevealProps = {
  userNum: string
}

const Reveal:FC<RevealProps>= (props)=>{
  const {userNum} = props
  console.log(userNum)
  const secretNum = generateRandomNum()
  console.log(secretNum)
  return (
    <div>{userNum}</div>
  )
}

export default Reveal;