import logo from './logo.svg';
import './App.css';
import React from 'react';
import Wrapper from './Wrapper.js';

function App() {

    return (
    <div className="App">
      <header className="App-header">

        <Name/>
        <Sidebar></Sidebar>
        <Numbers></Numbers>
        <Greeting></Greeting>
        <h1>This is my first app</h1>
        <Wrapper/>
        <Pokemon name='charzard'/>
        <MovieNames movies={movies}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

let movies = [
  {'id': 1, 'title': 'Inception', 'director': 'Christopher Nolan'},
  {'id': 2, 'title': 'Jurrasic Park', 'director': 'Steven Spielberg'},
  {'id': 3, 'title': 'The Matrix', 'director': 'Wachowski'}
]

//practice using map to iterate through objects
const MovieNames = (props) => {
  let movieDirectorStatements = props.movies.map(movie => {
    return <li key={movie.id}>{movie.title} was directed by {movie.director}</li>
  })
  return movieDirectorStatements
}
//prefered naming convention using one liner arrow function
const Greeting = () => <h1>Hello There!</h1>;

const Pokemon = (props) => (
  <span>I choose you {props.name}!!</span>
);

function Numbers(){
const numberArray = [0,1,2,3,4]
const list = <ul>
              {numberArray.map(num => <li key="">{num}</li>)}
              </ul>
              return (<div>{list}</div>)
}

function Name() {
let myName = 'Bob'
  return (
    <div>
      {`hello my name is ` + myName}
    </div>
  )
}

const Sidebar  = () => {
  return (
    <ul>
      <li>
        <a href="http://www.theonion.com">The Onion</a>
      </li>
    </ul>
  )
}

//BUILDS A CLASS SO THAT YOU CAN MODIGY STATE WHEN BUTTON IS CLICKED
// export class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       view: 'landing'
//     }
//   }
//   handleClick = () => {
//     this.setState({
//       view: 'profile'
//     })
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.state.view === 'landing' ? (
//             <>
//               <h1>Landing Page</h1>
//               <button onClick={this.handleClick}>Profile</button>
//             </>
//           ) : (
//             <h1>Profile Page</h1>
//           )
//         }
//       </div>
//     )
//   }
// }

export default App;
