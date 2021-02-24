import React, { Component } from 'react';

class Counter extends Component{
    // constructor(props){
    //     super(props);
    //     // state의 초깃값 설정하기
    //     this.state = {
    //         number : 0,
    //         fixedNumber: 0
    //     };
    // }

    state = {
        number: 0,
        fixedNumber: 0
    }

    render(){
        const {number,fixedNumber} =this.state; //state를 조회할 때는 this.state로 조회합니다.
        return(
            <div>
                <h1>{number}</h1>
                <h2>immutable value : {fixedNumber}</h2>
                <button
                    //3.4.1.4 콜백함수를 먹여서 끝난후 실행
                    onClick = {()=>{
                        this.setState(
                            {
                                number: number + 1
                            },
                            ()=>{
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        )
                    }}

                    // onClick = { () => {
                    //     this.setState(prevState => {
                    //         return {
                    //             number: prevState.number + 1
                    //         };
                    //     });
                    //     this.setState(prevState => ({
                    //         number: prevState.number + 1
                    //     }));
                    // }}

                    // onClick = { () => {
                    //     this.setState({number: number + 1});
                    //     this.setState({number: this.state.number + 1})
                    // }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;