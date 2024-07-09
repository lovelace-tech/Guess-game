import { type ComponentPropsWithoutRef, forwardRef } from "react"

type InputProps = ComponentPropsWithoutRef<'input'> & {
    label: string
    id: string
}

const Input = forwardRef<HTMLInputElement,InputProps>(({id,label,...props},ref)=>{
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref}/>
    </div>
  )
})

export default Input;
