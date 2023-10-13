import { Component } from "react";

class ListComponent extends Component {
  render() {
    console.log("render");
    const {sultans}= this.props
    console.log(sultans)
    return (
      <div>
        {sultans.map((sultan) => {
            return <h1 key={sultan.id}>{sultan.name}</h1>
        })}
      </div>
    );
  }
}

export default ListComponent;
