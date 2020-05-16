import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import VitalsScreen from "../screens/VitalsScreen";
import MessagesScreen from "../screens/Messages";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#fff",
    },
    activeTintColor: "black",
  },
};

HomeStack.path = "";

const SearchStack = createStackNavigator(
  {
    Search: ReportScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Report",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "paper-plane-outline" : "md-paper-plane"}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#fff",
    },
    activeTintColor: "black",
  },
};

SearchStack.path = "";

const NotificationsStack = createStackNavigator(
  {
    Settings: VitalsScreen,
  },
  config
);

NotificationsStack.navigationOptions = {
  tabBarLabel: "Vitals",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-pulse-outline" : "md-pulse"}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#fff",
    },
    activeTintColor: "black",
  },
};

NotificationsStack.path = "";

const MessagesStack = createStackNavigator(
  {
    Settings: MessagesScreen,
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-settings-outline" : "md-settings"}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#fff",
    },
    activeTintColor: "black",
  },
};

MessagesStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  NotificationsStack,
  MessagesStack,
});

tabNavigator.path = "";

export default tabNavigator;
