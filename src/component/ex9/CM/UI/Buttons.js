import React from 'react';
import './Buttons.css';

export default function Buttoms(props) {
  return (
   <button className='buttonsStyle' onClick={props.onClick}>{props.contant}</button>
  )
}
