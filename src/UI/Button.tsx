import React from 'react'
interface ButtonProps {
  children: string | string[]
  classname: string | string[]
}

const Button:React.FC<ButtonProps> = function (props) {
    const {children,classname} = props
  return (
    <button className=
    {
      `bg-sky-600 border-none px-8 py-4 ${classname} uppercase text-gray-600 font-semibold`
      }>
      {children}
    </button>
  )
}

export default Button;