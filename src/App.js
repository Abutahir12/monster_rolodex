import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sultans: [],
      searchString: ""
    };
    console.log("constructor")
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((sultans) => this.setState({ sultans: sultans }));
    console.log("componentDidMount")  
  }
  render() {
    console.log("render")
    const filteredSultans = this.state.sultans.filter((sultan) => {
      return sultan.name.toLocaleLowerCase().includes(this.state.searchString);
    });
    console.log("////", filteredSultans)
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search sultans"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchString };
            });
          }}
        />
        {filteredSultans.map((sultan) => {
          
          return (
            <div key={sultan.id}>
              <h1>{sultan.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
