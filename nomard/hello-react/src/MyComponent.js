import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name: 'Default Name'
    };
    static propTypes={
        name:PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    }

    render(){
        const {name, favoriteNumber, children} = this.props; //비구조화 할당
        return(
            <div>
                Hi, My name is {name}.<br/>
                children value is {children}.
                <br/>
                My favoriteNumber is {favoriteNumber}.
            </div>
        );
    }
}

// //3.3.x ~3.3.6
// const MyComponent= ({name, favoriteNumber, children})=>{
//     // const {name, children} = props;

//     return(
//         <div>
//             Hi, My name is {name}.<br/>
//             children value is {children}.
//             <br/>
//             My favoriteNumber is {favoriteNumber}.
//         </div>
//     );

//     // return (
//     //     <div>
//     //         Hello, My name is {props.name}. <br/>
//     //         children value is {props.children}.
//     //     </div>
//     // );

//     //return <div>Hi, My name is {props.name}. </div>;

//     //return <div>new component</div>;
// };

// MyComponent.defaultProps = {
//     name : 'Default Name'
// };

// MyComponent.propTypes ={
//     name: PropTypes.string,
//     favoriteNumber : PropTypes.number.isRequired
// };

export default MyComponent;
 
