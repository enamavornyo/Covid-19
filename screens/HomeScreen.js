import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";

import HeaderRight from "./HeaderTitle";
import CountryPicker, { Flag } from "react-native-country-picker-modal";
import MyCountryPicker from "../components/CountryPicker";

export default function HomeScreen() {
  const [countryCode, setCountryCode] = useState("FR");
  const [country, setCountry] = useState(null);
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  return (
    <View style={Styles.container}>
      <Text style={{ margin: 20, fontSize: 30, fontWeight: "bold" }}>HOME</Text>
      <View
        style={{
          borderBottomColor: "#c7c7bd",
          borderBottomWidth: 1,
        }}
      />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={200}
        decelerationRate="fast"
      >
        <View style={Styles.Image}></View>
        <View style={Styles.Image}></View>
        <View style={Styles.Image}></View>
      </ScrollView>
    </View>
  );
}
//
HomeScreen.navigationOptions = {
  headerTitle: <HeaderRight />,
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "white",
  // headerTitleStyle: { fontWeight: "bold" }
};

const Styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: "#fff",
  },
  Image: {
    width: 350,
    height: 200,
    backgroundColor: "skyblue",
    margin: 10,
  },
});
