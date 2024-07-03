import React,{JSX} from 'react'

interface ContainerProps {
    children: JSX.Element | JSX.Element[];
    classname : string | string[]
}

const Container:React.FC<ContainerProps> = function(props) {
    const {children,classname} = props;
  return (
    <div className={`container ${classname}`}>{children}</div>
  )
}

export default Container;