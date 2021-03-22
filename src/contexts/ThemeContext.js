import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: true,
    isLightTheme: false,
    lightTheme: {
      color: "222",
      backgroundColor: "#d8ddf1",
    },
    darkTheme: {
      color: "#fff",
      backgroundColor: "#5c5c5c",
    },
  };

  changeTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme,
    });
  };

  render() {
    // The spread operator takes all of the different properties inside the state
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
