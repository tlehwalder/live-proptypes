import React, { Component } from "react";
import PropComponent from "./PropComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Live <code>PropTypes</code>
          </p>
        </header>
        <PropComponent
          title={"PropComponent"}
          half={10}
          mapped={["eins", "zwei", "drei"]}
          iceCream={"chocolate"}
          complex={{ firstValue: "first", nested: { secondValue: 8 } }}
        />
      </div>
    );
  }
}

export default App;
