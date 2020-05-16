import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  CheckBox,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import HeaderRight from "./HeaderTitle";
import { Platform } from "react-native";
import AddIcon from "../components/addIcon";
import Icon from "../components/icon";

export default function ReportScreen() {
  const [makeReport, setMakeReport] = useState(false);
  let [gender, setGender] = useState("Male");
  let [myself, setMyself] = useState(true);

  const handleMyself = () => {
    setMyself(!myself);
  };
  return (
    <View style={Styles.entirePage}>
      <Text style={{ margin: 20, fontSize: 30, fontWeight: "bold" }}>
        CASE REPORTS
      </Text>
      <View
        style={{
          borderBottomColor: "#c7c7bd",
          borderBottomWidth: 1,
        }}
      />
      <View
        style={{
          marginRight: 10,
          marginLeft: "auto",
          flex: 100,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={Styles.openButton}
          activeOpacity={0.5}
          onPress={() => {
            setMakeReport(true);
          }}
        >
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <AddIcon
              name={Platform.OS === "ios" ? "ios-add-outline" : "md-add"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={Styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={makeReport}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalHeader}>
                <Text style={Styles.modalHeaderTxt}>Make Report</Text>

                <TouchableOpacity
                  style={Styles.closeButton}
                  onPress={() => {
                    setMakeReport(!makeReport);
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
                <Text style={{ fontWeight: "bold" }}>
                  Who are you reporting?
                </Text>
                <View style={Styles.row}>
                  <CheckBox
                    title="male"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    value={myself}
                    onChange={() => {
                      handleMyself();
                    }}
                  ></CheckBox>
                  <Text style={{ paddingTop: 5 }}>Self</Text>
                  <CheckBox
                    title="female"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    value={!myself}
                    onChange={() => {
                      handleMyself();
                    }}
                  ></CheckBox>
                  <Text style={{ paddingTop: 5 }}>Other Individual</Text>
                </View>

                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    Location or Digital Address
                  </Text>
                  <TextInput
                    keyboardType="default"
                    style={{ height: 40, borderColor: "grey", borderWidth: 1 }}
                  />
                  <View style={Styles.row}>
                    <View style={{ marginRight: 20, width: 220 }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginTop: 10,
                          marginBottom: 10,
                        }}
                      >
                        Nearest Landmark
                      </Text>
                      <TextInput
                        keyboardType="default"
                        style={{
                          height: 40,
                          borderColor: "grey",
                          borderWidth: 1,
                        }}
                      />
                    </View>
                    <View style={{ width: 130 }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginTop: 10,
                          marginBottom: 10,
                        }}
                      >
                        Alternate Contact
                      </Text>
                      <TextInput
                        keyboardType="default"
                        style={{
                          height: 40,
                          borderColor: "grey",
                          borderWidth: 1,
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      Description
                    </Text>
                    <TextInput
                      keyboardType="default"
                      multiline={true}
                      numberOfLines={4}
                      textAlignVertical={"top"}
                      editable
                      style={{
                        borderColor: "grey",
                        borderWidth: 1,
                        width: "100%",
                      }}
                    />
                  </View>
                </View>
                <TouchableHighlight
                  style={{
                    ...Styles.closeButton,
                    backgroundColor: "black",
                    marginTop: 160,
                    height: 50,
                    width: "100%",
                    paddingTop: 15,
                  }}
                  onPress={() => {
                    Alert.alert("Successfully Filed Report");
                    setMakeReport(false);
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    File Report
                  </Text>
                </TouchableHighlight>
              </ScrollView>
              <View style={{ flex: 1, justifyContent: "flex-end" }}></View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
ReportScreen.navigationOptions = {
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
  entirePage: {
    flex: 1,
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
    backgroundColor: "black",
    height: 70,
    width: 70,
    borderRadius: 40,
    padding: 10,
    elevation: 1,
  },
  closeButton: {
    backgroundColor: "black",

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
    marginTop: 10,
  },
  row_: {
    flexDirection: "row",
    marginTop: 10,
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
    margin: "1%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: 90,
    width: "35%",
    elevation: 1,
  },
});
