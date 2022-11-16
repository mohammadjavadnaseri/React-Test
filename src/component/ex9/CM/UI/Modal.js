import React , { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';
import './Modal.css';

const SendModal = document.getElementById('UsModal'); 

export default function Modal(props) {

    const ShowModal = () =>{
        return(
        <div className='conp'>
            <div className='modalContant'> {props.headerTitle} </div>
            <div className='butModalPlace'>
            <Buttons contant="close" onClick={props.modalClose} />
            </div>
        </div>
        );
    }

  return (
    <Fragment>
        {ReactDOM.createPortal(
            <ShowModal />,
            SendModal
        )}
    </Fragment>
  )
}


// {ReactDOM.createPortal(
//     <div className='modalContant'> Us </div>,
//     document.getElementById('UsModal')
// )}
