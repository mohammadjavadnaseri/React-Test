import React, { useState } from 'react';

export default function Ex7part1() {

    const [ptagValue, changePtagValue] = useState('');

    const changeInputValue = (event) => {
        changePtagValue(event.target.value);
    }

    return(
        <div>
            <form>
                <input type="text" onChange={changeInputValue} value={ptagValue} ></input>
            </form>
            <p>{ptagValue}</p>
        </div>
        
    )
};
