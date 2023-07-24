import React, { Component } from "react";
// import axios from "axios";

class RandomJokes extends Component {
  state = {
    setJoke: "",
  };
  getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          setJoke: data.setup + "  Answer: ...." + data.punchline,
        });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.getJoke}>Get a Dad Joke</button>
        <div>{this.state.setJoke}</div>
      </div>
    );
  }
}

export default RandomJokes;
