import React, {useState} from 'react';

const EventPractice = () => {

    //useState를 통해 상요하는 상태에 문자열이 아닌 객체를 넣어보자
    const [form, setForm] = useState({
        username:'',
        message: ''
    })

    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form, //기존의 form 내용을 이자리에 복사한 뒤
            [e.target.name] : e.target.value //원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ':' + message);
        setForm({
            username : '',
            message : ''
        })
    };

    const onKeyPress = e =>{
        if(e.key === 'Enter'){
            onClick();
        }
    };

    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    // const onClick = () => {
    //     alert(username + ': ' + message);
    //     setUsername('');
    //     setMessage('');
    // };

    // const onKeyPress = e => {
    //     if (e.key ==='Enter'){
    //         onClick();
    //     }
    // };
    return(
        <div>
        <h1>EventPractice</h1>
        <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChange}
        />
        <input
            type="text"
            name="message"
            placeholder="아무거나 입력해 보세요"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div>
    )
}

export default EventPractice;