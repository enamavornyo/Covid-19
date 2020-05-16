import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Dimensions,
} from "react-native";
import Vitals from "./loggedDetails";
import HeaderRight from "./HeaderTitle";
import { Platform } from "react-native";
import AddIcon from "../components/addIcon";
import Icon from "../components/icon";

export default function VitalsScreen(props) {
  const [logVitals, setLogVitals] = useState(false);
  const [logged, setLogged] = useState(false);
  const [pressed, setPressed] = useState(Number);
  let [vital1] = useState(Number);
  const [pressed2, setPressed2] = useState(Number);
  let [vital2] = useState(Number);
  const [pressed3, setPressed3] = useState(Number);
  let [vital3] = useState(Number);
  const [pressed4, setPressed4] = useState(Number);
  let [vital4] = useState(Number);
  const [pressed5, setPressed5] = useState(Number);
  let [vital5] = useState(Number);
  const [pressed6, setPressed6] = useState(Number);
  let [vital6] = useState(Number);

  // function createPerson() {
  //   const newPerson = people.push({
  //     id: 122,
  //     pressed: pressed,
  //     pressed2: pressed2,
  //     pressed3: pressed3,
  //     pressed4: pressed4,
  //     pressed5: pressed5,
  //     pressed6: pressed6,
  //   });
  //   return newPerson;
  // }

  const people = [
    {
      id: 12332,
      pressed: 2,
      pressed2: 3,
      pressed3: 1,
      pressed4: 4,
      pressed5: 3,
      pressed6: 2,
    },
    {
      id: 456566,
      pressed: 1,
      pressed2: 3,
      pressed3: 2,
      pressed4: 3,
      pressed5: 1,
      pressed6: 0,
    },
  ];

  const handleVital = () => {
    // pressed = -1 means it was left null

    pressed ? (vital1 = pressed) : (vital1 = 0);
    pressed2 ? (vital2 = pressed2) : (vital2 = 0);
    pressed3 ? (vital3 = pressed3) : (vital3 = 0);
    pressed4 ? (vital4 = pressed4) : (vital4 = 0);
    pressed5 ? (vital5 = pressed5) : (vital5 = 0);
    pressed6 ? (vital6 = pressed6) : (vital6 = 0);

    console.log(Vitals.props);
    console.log(vital1);
    console.log(vital2);
    console.log(vital3);
    console.log(vital4);
    console.log(vital5);
    console.log(vital6);
    // createPerson();
  };

  const Texty = () => {
    return (
      <View>
        <View>
          <Text>No vitals logged Yet</Text>
        </View>
      </View>
    );
  };

  return logged === true ? (
    <ScrollView>
      <Text style={{ margin: 20, fontSize: 30, fontWeight: "bold" }}>
        Vitals
      </Text>
      <View
        style={{
          borderBottomColor: "#c7c7bd",
          borderBottomWidth: 1,
          marginBottom: 10,
        }}
      />
      <Vitals
        pressed={pressed}
        pressed2={pressed2}
        pressed3={pressed3}
        pressed4={pressed4}
        pressed5={pressed5}
        pressed6={pressed6}
      />

      {people.map((people) => {
        return (
          <Vitals
            key={people.id}
            pressed={people.pressed}
            pressed2={people.pressed2}
            pressed3={people.pressed3}
            pressed4={people.pressed4}
            pressed5={people.pressed5}
            pressed6={people.pressed6}
          />
        );
      })}

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
            // console.log(Vitals.props);
            //
            setLogVitals(true);
            setPressed(-1);
            setPressed2(-1);
            setPressed3(-1);
            setPressed4(-1);
            setPressed5(-1);
            setPressed6(-1);
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
          visible={logVitals}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalHeader}>
                <Text style={Styles.modalHeaderTxt}>Log Symptoms</Text>

                <TouchableOpacity
                  style={Styles.closeButton}
                  onPress={() => {
                    setLogVitals(!logVitals);
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
                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Dry Cough
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(0);

                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Tiredness
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Sore Throat
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Aches and Pains
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Shortness of Breath
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>Fever</Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <Button
                  color="#6a7b8f"
                  title="log vitals"
                  onPress={() => {
                    Alert.alert("Successfully logged vitals");
                    handleVital();
                    setLogVitals(false);
                    // setLogged(!logged);
                    // setLogged(true);
                    // console.log(logged);
                  }}
                />
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  ) : (
    <View style={Styles.entirePage}>
      <Text style={{ margin: 20, fontSize: 30, fontWeight: "bold" }}>
        Vitals
      </Text>
      <View
        style={{
          borderBottomColor: "#c7c7bd",
          borderBottomWidth: 1,
        }}
      />
      <Texty />
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
            // console.log(Vitals.props);
            setLogVitals(true);
            setPressed(-1);
            setPressed2(-1);
            setPressed3(-1);
            setPressed4(-1);
            setPressed5(-1);
            setPressed6(-1);
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
          visible={logVitals}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalHeader}>
                <Text style={Styles.modalHeaderTxt}>Log Symptoms</Text>

                <TouchableOpacity
                  style={Styles.closeButton}
                  onPress={() => {
                    setLogVitals(!logVitals);
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
                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Dry Cough
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(0);

                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Tiredness
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed2 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed2(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed2 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Sore Throat
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed3 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed3(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed3 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Aches and Pains
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed4 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed4(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed4 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>
                    Shortness of Breath
                  </Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed5 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed5(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed5 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.vitalCard}>
                  <Text style={{ fontWeight: "bold", padding: 6 }}>Fever</Text>
                  <View
                    style={{
                      borderBottomColor: "#c7c7bd",
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  />
                  <View style={Styles.VitalGroup}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 0
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(0);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 0 ? { color: "white" } : {},
                          ]}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 1
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(1);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 1 ? { color: "white" } : {},
                          ]}
                        >
                          1
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 2
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(2);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 2 ? { color: "white" } : {},
                          ]}
                        >
                          2
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 3
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(3);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 3 ? { color: "white" } : {},
                          ]}
                        >
                          3
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          Styles.vitalSeverity,
                          pressed6 === 4
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "transparent" },
                        ]}
                        activeOpacity={1}
                        onPress={() => {
                          setPressed6(4);
                          // handleVital();
                        }}
                      >
                        <Text
                          style={[
                            Styles.textStyle,
                            pressed6 === 4 ? { color: "white" } : {},
                          ]}
                        >
                          4
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <Button
                  color="#6a7b8f"
                  title="log vitals"
                  onPress={() => {
                    Alert.alert("Successfully logged vitals");
                    handleVital();
                    setLogVitals(false);
                    setLogged(!logged);
                    // setLogged(true);
                    console.log(logged);
                  }}
                />
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
VitalsScreen.navigationOptions = {
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

  //   // alignItems: "center",
  //   marginTop: 0,
  // },
  modalView: {
    // maxHeight: Dimensions.get("window").height,
    height: 650,
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
  vitalCard: {
    elevation: 2,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },

  VitalGroup: {
    justifyContent: "center",
    // borderColor: "grey",
    // borderWidth: 1,
    // elevation: 2,
    // height: 100,
    // marginBottom: 20,
    // borderRadius: 10,
    // padding: 10,
    alignItems: "center",
  },
  vitalSeverity: {
    backgroundColor: "black",
    color: "white",
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    elevation: 1,
    marginHorizontal: 10,
  },
  openButton: {
    backgroundColor: "black",
    color: "white",
    height: 70,
    width: 70,
    borderRadius: 40,
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
    margin: "1%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: 90,
    width: "35%",
    elevation: 1,
  },
});
