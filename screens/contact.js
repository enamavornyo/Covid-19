import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function drawContact() {
  return (
    <View style={Styles.ContactRow}>
      <View>
        <Image style={Styles.Image} />
      </View>

      <View style={Styles.contact}>
        <Text style={Styles.contactName}>NAME</Text>
        <Text style={Styles.contactText}> New contact Joined!</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  contact: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
  },

  ContactRow: { flexDirection: "row" },

  contactName: { color: "white", fontWeight: "bold" },

  contactText: { color: "grey" },

  Image: {
    width: 50,
    height: 50,
    backgroundColor: "skyblue",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30,
  },
});
