import React from 'react'

export default function parent(props) {
  return (
    <div style={{background:'aqua',width:'100%',padding:'5px 0px 5px 0px'}}>
        {props.children}
    </div>
  )
}
