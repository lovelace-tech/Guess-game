import React, {type ReactNode} from 'react'

type ScoresProps = {
  children: ReactNode
}

const Scores:React.FC<ScoresProps> = (props)=>{
  const {children} = props
  return (
    <div>{children}</div>
  )
}

export default Scores;