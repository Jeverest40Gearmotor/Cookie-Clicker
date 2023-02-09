import pocky from './pocky.png';
import './App.css';
import React from "react"

class App extends React.Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count+1
    }))
    console.log("click")
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <button
          className="Butt"
          onClick={() => this.handleClick()}>
          <img src={pocky} className="App-logo" alt="logo" />
        </button>
        <p>
          Cookies made: {this.state.count}
        </p>
      </header>
    </div>
  );
  }
}

export default App;
