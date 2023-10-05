
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super()

    this.state = {
      sultans: [
        {name: "Ertugrul"},
        {name: "Usman"},
        {name: "Orhan"}      ]
    }
  }
  render()  {
    return (
    <div className="App">
      {this.state.sultans.map((sultan) => {
        return <h1>{sultan.name}</h1>
      })}
    </div>
    )
  }
}

export default App;
