// node_modules
import * as React from 'react'
// styles
import './Title.css'

export const Title = ({children, className = ''}) => {
  return <h2 className={`title ${className}`}>
    {children}
  </h2>
}
