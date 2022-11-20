import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";

import ExploreScreen from "../screens/ExploreScreen";
import Map from "../screens/Map";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import AddPost from "../screens/AddPost";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import themeContext from "../config/themeContext";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const mode = useContext(themeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: mode.background,
          height: Platform.OS === "ios" ? "10%" : "8%",
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="compass"
                size={24}
                color={focused ? "grey" : mode.color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="map"
                size={24}
                color={focused ? "grey" : mode.color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                bottom: 16,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
                borderRadius: 35,
              }}
            >
              <Text
                style={{ fontSize: 32, fontWeight: "bold", color: "white" }}
              >
                +
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="bell"
                size={24}
                color={focused ? "grey" : mode.color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="user"
                size={24}
                color={focused ? "grey" : mode.color}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
