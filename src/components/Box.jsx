import React from 'react'

export const Box = (props) => {
  return (
    <input type="number" min={0} max={9} className='tile' placeholder={props.num} onChange={(e)=>{props.handleUpdate(props.col,props.row,e.target.value)}}/>
  )
}
