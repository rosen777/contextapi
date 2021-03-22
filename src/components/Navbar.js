import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const {
      headerContainer,
      headerText,
      headerTabContainer,
      headerTab,
    } = styles;
    return (
      <ThemeContext.Consumer>
        {(context) => {
          console.log("context", context);
          const { isDarkTheme, darkTheme, lightTheme } = context;
          const theme = isDarkTheme ? darkTheme : lightTheme;
          return (
            <View style={[headerContainer, theme]}>
              <Text style={[headerText, theme]}>OakAcademy</Text>
              <View style={headerTabContainer}>
                <Text style={headerTab}>Overview</Text>
                <Text style={headerTab}>Contact</Text>
                <Text style={headerTab}>Support</Text>
              </View>
            </View>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "dimGrey",
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 25,
  },
  headerText: {
    marginTop: 25,
    fontSize: 29,
    color: "white",
  },
  headerTabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 25,
    backgroundColor: "light-grey",
    alignSelf: "flex-end",
  },
  headerTab: {
    fontSize: 22,
    paddingVertical: 10,
  },
});

export default Navbar;
