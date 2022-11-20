import React, { useContext } from "react";
import { View, Text } from "react-native";

import themeContext from "../config/themeContext";

import styles from "./style";

const ExploreScreen = () => {
  const mode = useContext(themeContext);
  return (
    <View style={[styles.container, { backgroundColor: mode.background }]}>
      <Text style={[styles.text, { color: mode.color }]}>Explore</Text>
    </View>
  );
};

export default ExploreScreen;
