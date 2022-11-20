import React, { useState, useEffect } from "react";

import { EventRegister } from "react-native-event-listeners";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";
import themeContext from "./src/config/themeContext";
import themeColor from "./src/config/theme";

const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    let eventListner = EventRegister.addEventListener("changeTheme", (data) => {
      setTheme(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListner);
    };
  });

  return (
    <themeContext.Provider
      value={theme === true ? themeColor.dark : themeColor.light}
    >
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default App;
