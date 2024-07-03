import React,{JSX} from 'react'

interface FlexProps {
    children: JSX.Element | JSX.Element[];
    classname: string | string[];
}

const Flex:React.FC<FlexProps> = function(props) {
    const {children,classname} = props
  return (
    <div className={`flex ${classname}`}>{children}</div>
  )
}

export default Flex;