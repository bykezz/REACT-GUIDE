import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Validation from "./Validation/Validation";
// import Char from "./Char/Char";
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  // state = {
  //   username: "supermax",
  // };
  // usernameChangedHandler = (event) => {
  //   this.setState({ username: event.target.value });
  // };
  // state = {
  //   userInput: "",
  // };
  // inputChangedHandler = (event) => {
  //   this.setState({ userInput: event.target.value });
  // };
  // deleteCharHandler = (index) => {
  //   const text = this.state.userInput.split("");
  //   text.splice(index, 1);
  //   const updatedText = text.join("");
  //   this.setState({ userInput: updatedText });
  // };
  state = {
    persons: [
      { id: "name1", name: "max", age: 28 },
      { id: "name2", name: "manu", age: 29 },
      { id: "name3", name: "staphanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    // const charList = this.state.userInput.split("").map((ch, index) => {
    //   return (
    //     <Char
    //       character={ch}
    //       key={index}
    //       clicked={() => this.deleteCharHandler(index)}
    //     />
    //   );
    // });
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My hobbies: Racing{" "}
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
      style.backgroundColor = "red";
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        {/* <hr />
        <div>
          <input
            type="text"
            onChange={this.inputChangedHandler}
            value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}
        </div> */}

        {/* <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" /> */}
      </div>
    );

    //return React.createElement("div",{className: "App"},null,React.createElement("h1", null, "I'm a react App"));
  }
}

export default App;
