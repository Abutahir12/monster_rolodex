
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      sultans: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(sultans => this.setState({sultans: sultans}))
  }
  render() {
    return (
      <div className="App">
        {this.state.sultans.map((sultan) => {
          return <div key={sultan.id}><h1>{sultan.name}</h1></div>
        })}
      </div>
    )
  }
}

export default App;
