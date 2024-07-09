import {type ReactNode} from 'react'

interface ContainerProps {
    children: ReactNode
    classname : string | string[]
}

const Container = (props:ContainerProps)=>{
    const {children,classname} = props;
  return (
    <div className={`container ${classname}`}>{children}</div>
  )
}

export default Container;