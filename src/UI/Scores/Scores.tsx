import React, {JSX} from 'react'

type ScoresProps = {
  children: JSX.Element | JSX.Element[]
}

const Scores:React.FC<ScoresProps> = function(props) {
  const {children} = props
  return (
    <div>{children}</div>
  )
}

export default Scores;