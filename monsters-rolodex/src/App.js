import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// A : function format
// function App() {
//   // it returns the.. visually render it
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello my name is.. JS
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// B : class format
class App extends Component {
  // when the app is built 
  constructor() {
    super(); // calling the constructor of Component

    this.state = { // object
      name: {firstname: "JunSeong", lastname: "An"},
      company: "LG U+"
    };
    // accessing the above javascript variable -> {this.state.name}
  }
  // render functino returns what the page explictly loaded
  // I will render this below code
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>Hi, {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>
            <button 
              onClick={ () => { // call back function
                // change the state name to Seong
                // this.setState({name : {firstname: "Yiwha", lastname: "Zhang"}});

                // setState using function callback
                this.setState(
                  // updater function
                  (state, props) => { // state -> current state
                    return {
                      name : {firstname: "Yiwha", lastname: "Zhang"}
                    }
                  }, 
                  // optional function
                  () => { //update once
                    // 위의 updater function으로 바뀐 state값을 볼 수 있음
                    //console.log(this.state)
                  });
              }
            }>
              change name 
            </button>
        </header>
      </div>
    )
  }
}
export default App;
