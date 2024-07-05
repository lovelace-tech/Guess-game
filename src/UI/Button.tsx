import{type ReactNode, type FC} from 'react'
interface ButtonProps {
  children: ReactNode
  classname: string | string[]
}

const Button:FC<ButtonProps> = (props)=>{
    const {children,classname} = props
  return (
    <button  className=
    {
      `bg-stone-200 border-none px-8 py-4 ${classname} uppercase text-gray-600 font-semibold`
      }>
      {children}
    </button>
  )
}

export default Button;