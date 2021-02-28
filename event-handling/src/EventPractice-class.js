import React, { Component } from 'react';

class EventPractice extends Component {

    //여러개의 input타입 다루기
    state = {
        message: '',
        username: ''
    }

    //Property Initializer Syntax를 사용
    handleChange = (e) => {
        this.setState({
            //[]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용된다.
            [e.target.name] : e.target.value
        });
        console.log(e.target.value)
    }

    handleClick = (e) => {
        alert(this.state.username + ':' +this.state.message);
        this.setState({
            message : '',
            username : ''
        });
    }
    //onKetPress 이벤트 핸들링
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    // state = {
    //     message: ''
    // }

    // //Property Initializer Syntax를 사용
    // handleChange = (e) => {
    //     this.setState({
    //         message : e.target.value
    //     });
    //     console.log(e.target.value)
    // }

    // handleClick = (e) => {
    //     alert(this.state.message);
    //     this.setState({
    //         message : ''
    //     });
    // }

    // //이벤트를 따로 뺴내서 컴포넌트 임의 메서드 작성
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e){
    //     this.setState({
    //         message : e.target.value
    //     });
    // }

    // handleClick(){
    //     alert(this.state.message);
    //     this.setState({
    //         message : ''
    //     });
    // }

    //여러개의 input 타입 다루기
    render(){
        return(
            <div>
                <h1>EventPractice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }


    // render(){
    //     return(
    //         <div>
    //             <h1>EventPractice</h1>
    //             <input
    //                 type="text"
    //                 name="message"
    //                 placeholder="아무거나 입력해 보세요"
    //                 value={this.state.message}
    //                 onChange={this.handleChange}
    //             />
    //             <button onClick={this.handleClick}>확인</button>
    //         </div>
    //     );
    // }

    //이벤트를 바로전달
    // render() {
    //     return (
    //         <div>
    //             <h1>EventPractice</h1>
    //             <input
    //                 type="text"
    //                 name="message"
    //                 placeholder="somthing input"
    //                 value={this.state.message}
    //                 onChange={
    //                     (e) => {
    //                         this.setState({
    //                             message: e.target.value
    //                         })
    //                         console.log(e.target.value);
    //                     }
    //                 }
    //             />
    //             <button onClick={
    //                 () => {
    //                     alert(this.state.message);
    //                     this.setState({
    //                         message:''
    //                     });
    //                 }
    //             }>Confirm</button>
    //         </div>
    //     );
    // }
}

export default EventPractice;