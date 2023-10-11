import React from 'react'
import './button.scss'

const Button = (props) => {
    const {className, children, onClick} = props;
  return (
    <button className={`btn ${className}`} onClick={onClick? () => props.onClick() : null}>
        {children}
    </button>
  )
}

export default Button