import React from 'react'


export default function header(props) {

    const titleKind = props.title;
    if(titleKind==='ptag'){
        return(<p>{props.textShow}</p>);
    }else{
        return(<h2>{props.textShow}</h2>);
    }

};

