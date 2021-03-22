import React from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./src/components/Navbar";
import TodoList from "./src/components/TodoList";
import ThemeContextProvider from "./src/contexts/ThemeContext";

const App = (props) => {
  return (
    <View>
      <ThemeContextProvider>
        <Navbar />
        <TodoList />
      </ThemeContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
