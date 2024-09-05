import React from 'react'

export const Box = (props) => {
    let class1= 'row'+props.row
    let class2= 'col'+props.col
  return (

    <input type="number" min={0} max={9} className={`tile ${class1} ${class2} `} value={props.num} onChange={(e)=>{props.handleUpdate(props.row,props.col,e.target.value)}}/>
  )
}
