import { type ReactNode } from "react"


type ScoresProps = {
  label:string
  children:ReactNode
}

const Scores = ({label,children}:ScoresProps)=>{
  return (
    <div>
      <label>{label}</label>
      {children}
    </div>
  )
}

export default Scores;