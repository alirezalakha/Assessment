import React, { useState, useContext } from "react";
import MapView, { Marker } from "react-native-maps";

import { EventRegister } from "react-native-event-listeners";

import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  Platform,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import themeContext from "../config/themeContext";

const Map = () => {
  const mode = useContext(themeContext);
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
    EventRegister.emit("changeTheme", theme);
  };

  return (
    <>
      <View style={styles.container}>
        <MapView
          userInterfaceStyle={mode.map}
          style={styles.map}
          initialRegion={{
            latitude: 22.6281662,
            longitude: 88.4410113,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
          }}
        >
          <Marker
            image={require("../assets/images/cocktail.png")}
            coordinate={{ latitude: 22.6281661, longitude: 88.4410113 }}
          />
          <Marker
            image={require("../assets/images/frenchfries.png")}
            coordinate={{ latitude: 22.6381669, longitude: 88.451011 }}
          />
          <Marker
            image={require("../assets/images/coffee.png")}
            coordinate={{ latitude: 22.6181669, longitude: 88.441011 }}
          />
        </MapView>
      </View>
      <View style={[styles.searchBox, [{ backgroundColor: mode.buttons }]]}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        />
      </View>
      <TouchableOpacity
        onPress={handleTheme}
        style={{
          bottom: Platform.OS == "ios" ? "88%" : "80%",
          left: "30%",
          alignItems: "center",
          justifyContent: "center",
          width: 45,
          height: 45,
          borderRadius: 20,
          backgroundColor: mode.buttons,
          elevation: 10,
          alignSelf: "center",
          shadowOpacity: 0.5,
        }}
      >
        <FontAwesome5 name="toggle-off" size={24} color={mode.icons} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          bottom: Platform.OS == "ios" ? "85%" : "75%",
          left: "30%",
          alignItems: "center",
          justifyContent: "center",
          width: 45,
          height: 45,
          borderRadius: 20,
          backgroundColor: mode.buttons,
          elevation: 10,
          alignSelf: "center",
          shadowOpacity: 0.5,
        }}
      >
        <FontAwesome5 name="location-arrow" size={24} color={mode.icons} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 70 : 60,
    width: "80%",
    alignSelf: "center",
    borderRadius: 8,
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default Map;
