import React, { Component } from "react";
import classes from "./App.css";
//import Axios from "axios";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import RandomJokes from "../components/RandomJokes/RandomJokes";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import LoginPage from "../components/Login/Login";
//import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
// import Validation from "./Validation/Validation";
// import Char from "./Char/Char";
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
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
    changeCounter: 0,
    showCockpit: true,
    showLoginPage: false,
    showButton: true,
    showRandomJokes: true,
    authenticated: false,
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }
  shouldComponenetUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.state.changeCounter + 1,
      };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  render() {
    console.log("[App.js] render");
    // const charList = this.state.userInput.split("").map((ch, index) => {
    //   return (
    //     <Char
    //       character={ch}
    //       key={index}
    //       clicked={() => this.deleteCharHandler(index)}
    //     />
    //   );
    // });
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );

      /* <Person
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
          /> */
    }

    return (
      <Aux>
        {this.state.showButton ? (
          <button
            onClick={() => {
              this.setState({
                showCockpit: false,
                showButton: false,
                showRandomJokes: false,
              });
            }}
          >
            Remove Cockpit
          </button>
        ) : null}
        <div></div>

        {this.state.showRandomJokes ? (
          <div>
            <RandomJokes />{" "}
          </div>
        ) : null}
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
        {this.state.showButton ? (
          <button
            onClick={() => {
              this.setState({
                showLoginPage: true,
                showCockpit: false,
                showButton: false,
                showRandomJokes: false,
              });
            }}
          >
            Login
          </button>
        ) : null}

        {this.state.showLoginPage ? <LoginPage /> : null}
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
      </Aux>
    );

    //return React.createElement("div",{className: "App"},null,React.createElement("h1", null, "I'm a react App"));
  }
}

export default withClass(App, classes.App);
