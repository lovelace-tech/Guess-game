import{type ReactNode, type FC, ComponentPropsWithoutRef} from 'react'
type ButtonProps = {
  onclick: (e:Event)=> void
  children: ReactNode
  classname: string | string[]
} & ComponentPropsWithoutRef<'button'>

const Button:FC<ButtonProps> = (props)=>{
    const {children,classname,onclick} = props
 
  return (
    <button onClick={onclick}  className=
    {
      `bg-stone-200 border-none px-8 py-4 ${classname} uppercase text-gray-600 font-semibold`
      }>
      {children}
    </button>
  )
}

export default Button;