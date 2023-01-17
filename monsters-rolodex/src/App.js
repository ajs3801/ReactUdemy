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
      monsters: [ // array
        {
          name: "Linda",
          id: "12asdf"
        },
        {
          name: "Frank",
          id: "39aken"
        },
        {
          name: "Jacky",
          id: "19xmew"
        },
        {
          name: "Anderi",
          id: "93jrnw"
        }
      ]
    };
    // accessing the above javascript variable -> {this.state.name}
  }
  // render functino returns what the page explictly loaded
  // I will render this below code
  render() {
    return ( 
      <div className="App">
        { // access javascript
          this.state.monsters.map((monster) => { // loop over the array
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
          }) // it has Warning: Each child in a list should have a unique "key" prop.
          // it needs the unique key value
        }
      </div>
    )
  }
}
export default App;
