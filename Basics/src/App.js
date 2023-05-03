import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComp from './Components-State/NewComp';
// import FunctionalComp from './Components/FunctionalComponents';
// import {ClassComp,ClassComp1} from './Components/ClassComp';
// import Click from './Components/Click';
// import Counter from './Components/Counter';
// import ParentComp from './Components/ParentComp';
// import ClassProps from './props/ClassProps';
// import Functionalprops from './props/FunctionalProps';
// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       {/* <FunctionalComp/>
//       <ClassComp />
//        <ClassComp1/>
//        <Click/>
//        <Counter />
//        <ParentComp/> */}
//        {/* <ClassProps name="Learner 1" place="place1"><p>child Component</p></ClassProps>
//        <ClassProps name="Learner 2"><button>Click</button></ClassProps>
//        <ClassProps name="Learner 3"/> */}
//        {/* <Functionalprops name="learner4" place="!"></Functionalprops> */}
//     </div>
//   );
// }

// export default App;
class App extends React.Component {
  
    styles ={
      fontStyle : "italic",
      color: "pink"
    }
  
  render() { 
    return (
      <div className="App">
        <h1 style = {this.styles}>Welcome</h1>
        <NewComp />
      </div>
    );
  }
}
 
export default App ;
