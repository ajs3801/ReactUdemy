import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
  // when the app is built, run this
  constructor() {
    super(); // calling the constructor of Component

    this.state = { // object
      monsters: [ ], // api list -> empty
      searchField: '' // store the search string
    };
    // accessing the above javascript variable -> {this.state.name}
  }

  // Life cycle method -> componentDidMount()
  componentDidMount() { // mount -> first render
    // fetch the monsters api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // convert to json file
      .then((users) => 
        this.setState(
          () => { // updater function
            return {monsters: users}
          }, 
          () => { // later function
            console.log(this.state)
          }
        )
      )
  }

  // methods for optimizations -> change Anoymous function to function
  onSearchChange = (event) => { // Anonymous function
    // console.log(event.target.value)
    // make it to lower string
    const searchField = event.target.value.toLocaleLowerCase();
    
    // change the state
    this.setState(() => {
      return { searchField };
    })
    // when to render? 
    // 1. setState call
    // 2. new props are updated in components
  }

  // render function returns what the page explictly loaded
  // I will render this below code
  render() {
    // cast it -> more readable
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    // make new array
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField) // return the boolean, if true keep it
    });

    return (
      <div className="App">
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder="search monsters" 
          className="Search Box"
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;
