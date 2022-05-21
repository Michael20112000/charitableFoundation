// node_modules
import React from 'react'
// styles
import './BoringGrid.css'

export const BoringGrid = ({className = '', items}) => {
  return <div className={`boringGrid ${className}`}>
    {
      items.map(i => i)
    }
  </div>
}
