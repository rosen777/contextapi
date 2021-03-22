import React, { createContext, Component } from "react";

const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: true,
    isLightTheme: false,
    lightTheme: {
      color: "222",
      backgroundcolor: "#d8ddf1",
    },
    darkTheme: {
      color: "#fff",
      backgroundColor: "#5c5c5c",
    },
  };

  render() {
    // The spread operator takes all of the different properties inside the state
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default ThemeContextProvider;
