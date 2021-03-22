import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

export class TodoList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { todoContainer, item, buttonContainer, buttonText } = styles;

    return (
      <View style={[todoContainer, theme]}>
        <Text style={[item, theme]}>Plan the family trip</Text>
        <Text style={[item, theme]}>Go shopping for dinner</Text>
        <Text style={[item, theme]}>Go for a walk</Text>
        <TouchableOpacity onPress={changeTheme} style={buttonContainer}>
          <Text style={buttonText}>Change Theme</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "#696969",
    alignItems: "center",
    justifyContent: "space-around",
  },
  item: {
    color: "#fff",
    fontSize: 18,
    paddingVertical: 10,
  },
  buttonContainer: {
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default TodoList;
