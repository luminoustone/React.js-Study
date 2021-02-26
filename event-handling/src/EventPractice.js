import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }

    //Property Initializer Syntax를 사용
    handleChange = (e) => {
        this.setState({
            message : e.target.value
        });
        console.log(e.target.value)
    }

    handleClick = (e) => {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }

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

    render(){
        return(
            <div>
                <h1>EventPractice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }

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