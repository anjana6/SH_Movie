import React from 'react'
import './input_component.scss'

const InputComponent = (props) => {
  const {type,placeholder,value,onChange} = props
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange? (e) => onChange(e): null}
    />
  )
}

export default InputComponent