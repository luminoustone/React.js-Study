import React from 'react';
import useInputs from './useInputs';
//import React, { useEffect, useState} from 'react';

// //custom Hook으로 뻄
// function reducer(state, action) {
//     return{
//         ...state,
//         [action.name] : action.value
//     };
// }

const Info = () => {
    // const [state, dispatch] = useReducer(reducer,{
    //     name : '',
    //     nickname : ''
    // });
    // const {name, nickname} = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // };

    const [state, onChange] = useInputs({
        name : '',
        nickname : ''
    });
    const {name, nickName} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>name:</b>{name}
                </div>
                <div>
                    <b>nickname:</b>{nickname}
                </div>
            </div>
        </div>
    );
}

// const Info = () => {

//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     //뒷정리하기
//     useEffect(() => {
//         console.log('effect');
//         console.log(name);
//         return () => {
//             console.log('cleanup');
//             console.log(name);
//         };
//     }, [name]);

//     // //특정 값이 업데이트될 때만 실행
//     // useEffect(()=>{
//     //     console.log(name);
//     // }, [name]);

//     // //only componentDidMount
//     // useEffect(() => {
//     //     console.log('마운트될 때만 실행됩니다.');
//     // }, []);


//     // //componentDidMount + componentDidUpdate
//     // useEffect(() =>{
//     //     console.log('렌더링이 완료되엇습니다.');
//     //     console.log({
//     //         name,
//     //         nickname
//     //     });
//     // });

//     const onChangeName = e => {
//         setName(e.target.value);
//     }

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName}/>
//                 <input value={nickname} onChange={onChangeNickname}/>
//             </div>
//             <div>
//                 <div>
//                     <b>name:</b>{name}
//                 </div>
//                 <div>
//                     <b>nickname:</b>{nickname}
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Info;