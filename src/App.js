
import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: "John"
    }
  }
  render()  {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {this.state.name}</p>
      
        <button onClick={() => {
          this.setState(() => {
            return {name: "Tahir"}
          }, 
          () => {
            console.log(this.state)
          })
        }}>Click to Change</button>
      </header>
    </div>
    )
  }
}

export default App;
