import React from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./src/components/Navbar";
import TodoList from "./src/components/TodoList";
import ThemeContextProvider from "./src/contexts/ThemeContext";
import AuthContextProvider from "./src/contexts/AuthContext";

const App = (props) => {
  return (
    <View>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
