import React, {useState} from 'react';

const Say =() =>{
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('Good Bye');

    const [color, setColor] = useState('black');

    return(
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{color:'red'}} onClick={()=>setColor('red')}>
               RED 
            </button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>
                GREEN
            </button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>
                BLUE
            </button>
        </div>
    );
};

export default Say; 