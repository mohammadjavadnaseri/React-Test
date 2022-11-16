import React,{ Fragment, useState,useEffect } from 'react';
import Buttons from '../CM/UI/Buttons';
import Modal from '../CM/UI/Modal';


export default function UsButtons() {
    

    const [shoeCon,rulToShow] = useState();

    useEffect(()=>{
        const log = localStorage.getItem('login');
        if(log !== '1'){
            alert("Welcome");
            localStorage.setItem('login','1')
        }
    },[]);

    const AbotUs = () =>{
        rulToShow({
            title:'About Us'
        });
    }
    const ContUs = () =>{
        rulToShow({
            title:'Contact Us'
        });
    }
    const closeModal = () =>{
        rulToShow(false);
    }

  return (
    <Fragment>
        {shoeCon && <Modal headerTitle={shoeCon.title} modalClose={closeModal} />}

        <Buttons contant="About Us" onClick={AbotUs} /><br/>
        <Buttons contant="Contact Us" onClick={ContUs}  />
    </Fragment>
  )
}
