import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  CheckBox,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import Icon from "../components/icon";
import { Platform } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
export default function HeaderRight() {
  let [gender, setGender] = useState("Male");
  let [genValue, setGenValue] = useState(true);
  const visible = false;
  const [age, onChangeAge] = useState(Number);
  const [profileVisible, setProfileVisible] = useState(false);
  const [countryCode_, setCountryCode_] = useState("FR");
  const [country_, setCountry_] = useState(null);
  const [countryCode, setCountryCode] = useState("FR");
  const [country, setCountry] = useState(null);

  const onSelectCountry1 = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const onSelectCountry2 = (country_) => {
    setCountryCode_(country_.cca2);
    setCountry_(country_);
  };

  const cPicker = () => {
    return;
  };
  const handleGender = () => {
    setGenValue(!genValue);
    if (genValue === true) {
      setGender("Male");
      return;
    } else {
      setGender("Female");
    }
  };

  return (
    <View style={Styles.headerRow}>
      <TouchableOpacity
        style={{}}
        activeOpacity={0.5}
        onPress={() => {
          setProfileVisible(true);
        }}
      >
        <Image
          style={{
            maxHeight: 40,
            maxWidth: 40,
            borderRadius: 20,

            marginLeft: 10,
          }}
          source={require("../assets/images/robot-dev.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 300 }} activeOpacity={0.5}>
        <Icon
          name={
            Platform.OS === "ios"
              ? "ios-notifications-outline"
              : "md-notifications"
          }
        />
      </TouchableOpacity>

      <View style={Styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={profileVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalHeader}>
                <Text style={Styles.modalHeaderTxt}>PROFILE</Text>

                <TouchableOpacity
                  style={Styles.closeButton}
                  onPress={() => {
                    setProfileVisible(!profileVisible);
                  }}
                >
                  <Icon
                    name={
                      Platform.OS === "ios" ? "ios-close-outline" : "md-close"
                    }
                  />
                </TouchableOpacity>
              </View>
              <ScrollView style={Styles.modalBody}>
                <Text style={{ fontWeight: "bold" }}>Personal Details</Text>
                <View>
                  <Text style={Styles.modalText}>Enter Age</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={{ height: 40, borderColor: "grey", borderWidth: 1 }}
                    onChange={(text) => onChangeAge(text)}
                  />
                  <View style={Styles.row}>
                    <CheckBox
                      title="male"
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      value={genValue}
                      onChange={() => {
                        handleGender();
                      }}
                    ></CheckBox>
                    <Text style={{ paddingTop: 5 }}>Male</Text>
                    <CheckBox
                      title="female"
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      value={!genValue}
                      onChange={() => {
                        handleGender();
                      }}
                    ></CheckBox>
                    <Text style={{ paddingTop: 5 }}>Female</Text>
                  </View>
                  <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                    Travel History
                  </Text>
                  <Text style={Styles.modalText}>
                    Select the last two countries you visited (if Applicable)
                  </Text>
                  <View style={{ alignItems: "center" }}>
                    <View style={Styles.row}>
                      <View style={Styles.country}>
                        <CountryPicker
                          // FlagButton
                          countryCode={countryCode}
                          withFlagButton={true}
                          visible={visible}
                          onSelect={onSelectCountry1}
                        />
                        {country !== null ? (
                          <Text>{country.name}</Text>
                        ) : (
                          <Text> None Selected</Text>
                        )}
                      </View>

                      <View style={Styles.country}>
                        <CountryPicker
                          // FlagButton
                          countryCode={countryCode_}
                          withFlagButton={true}
                          visible={visible}
                          onSelect={onSelectCountry2}
                        />
                        {country_ !== null ? (
                          <Text>{country_.name}</Text>
                        ) : (
                          <Text>None Selected</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                    Medical professional Information
                  </Text>
                  <Text style={{}}>Applicable if you are a health worker</Text>
                  <Text style={Styles.modalText}>Health License Number</Text>
                  <TextInput
                    keyboardType="default"
                    style={{ height: 40, borderColor: "grey", borderWidth: 1 }}
                    onChange={(text) => onChangeAge(text)}
                  />
                </View>
                <TouchableHighlight
                  style={{
                    ...Styles.openButton,
                    backgroundColor: "black",
                    marginTop: 10,
                  }}
                  onPress={() => {
                    Alert.alert("Profile Successfully Updated");
                    setProfileVisible(!profileVisible);
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Update Profile
                  </Text>
                </TouchableHighlight>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  headerRow: {
    marginTop: "18%",
    flex: 1,
    flexDirection: "row",
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22,
  // },
  modalView: {
    height: "96%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",

    padding: 10,
    elevation: 1,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 15,
    marginBottom: 15,
  },
  modalHeader: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
  },
  modalBody: {
    paddingTop: 0,
    padding: 20,
  },
  modalHeaderTxt: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 15,
  },
  closeButton: {
    marginLeft: "auto",
    margin: 20,
  },
  country: {
    backgroundColor: "transparent",
    alignItems: "center",
    paddingTop: 10,
    margin: "1%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: 90,
    width: "35%",
    elevation: 1,
  },
});
