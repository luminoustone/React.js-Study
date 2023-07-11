import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

const App =() => {
  return <Say/>;
  // return <Counter/>;
};

// const App = () =>{
//   return <MyComponent name="React" favoriteNumber={1} >Child React</MyComponent>;
//     // return <MyComponent/>;
//     // return <MyComponent name="React"/>;
// };

// //클래스형 컴포넌트
// import React, { Component } from "react";

// class App extends Component{
//   render(){
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// //함수형 컴포넌트
// import React from 'react';
// import './App.css';

// function App(){
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// //2.4.5
// function App() {

//   const name = undefined;

//   // //내부에서 직접 렌더링은 가능
//   // return <div>{name}</div>;

//   //return name || '값이 undefinded입니다.'

//   // //undefined를 return하면 오류발생
//   // return name;
// }

// //2.4.4
// function App(){
//   const name = '뤼액트';
//   return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
// }

// function App(){
//     return(
//         <Fragment>
//             <h1>hi</h1>
//             <h2>hello</h2>
//         </Fragment>
//     )
// }

export default App;
