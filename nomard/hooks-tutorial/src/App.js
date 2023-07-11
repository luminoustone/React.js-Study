import React, {useState} from 'react';
import Average from './Average';
//mport Info from './Info';
//import Counter from './Counter';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={()=>{
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기': '보이기'}
//       </button>
//       <hr/>
//       {visible && <Info/>}
//     </div>
//   )
// };

const App = () => {
  return <Average/>;
  // return <Info/>;
  //return <Counter/>;
}

export default App;