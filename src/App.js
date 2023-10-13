import "./App.css";
import { Component } from "react";
import ListComponent from "./components/list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sultans: [],
      searchString: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((sultans) => this.setState({ sultans: sultans }));
  }

  onSearchString = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { sultans, searchString } = this.state;
    const { onSearchString } = this;
    const filteredSultans = sultans.filter((sultan) => {
      return sultan.name.toLocaleLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search sultans"
          onChange={onSearchString}
        />
        <ListComponent sultans={filteredSultans}/>
      </div>
    );
  }
}

export default App;
