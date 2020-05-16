import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Vitals(...props) {
  const pressed = props[0].pressed;

  const pressed2 = props[0].pressed2;

  const pressed3 = props[0].pressed3;

  const pressed4 = props[0].pressed4;

  const pressed5 = props[0].pressed5;

  const pressed6 = props[0].pressed6;

  let degree = degreeHandler;
  let degree2 = degreeHandler2;
  let degree3 = degreeHandler3;
  let degree4 = degreeHandler4;
  let degree5 = degreeHandler5;
  let degree6 = degreeHandler6;

  var today = new Date().toDateString();

  const degreeHandler = () => {
    switch (pressed) {
      case 0: {
        return (degree = "None");
      }
      case 1: {
        return (degree = "Mild");
      }
      case 2: {
        return (degree = "Mid");
      }
      case 3: {
        return (degree = "Semi");
      }
      case 4: {
        return (degree = "High");
      }
      default:
        return (degree = props[0].degree);
    }
  };

  const degreeHandler2 = () => {
    switch (pressed2) {
      case 0: {
        return (degree2 = "None");
      }
      case 1: {
        return (degree2 = "Mild");
      }
      case 2: {
        return (degree2 = "Mid");
      }
      case 3: {
        return (degree2 = "Semi");
      }
      case 4: {
        return (degree2 = "High");
      }
      default:
        return (degree2 = props[0].degree2);
    }
  };

  const degreeHandler3 = () => {
    switch (pressed3) {
      case 0: {
        return (degree3 = "None");
      }
      case 1: {
        return (degree3 = "Mild");
      }
      case 2: {
        return (degree3 = "Mid");
      }
      case 3: {
        return (degree3 = "Semi");
      }
      case 4: {
        return (degree3 = "High");
      }
      default:
        return (degree3 = props[0].degree3);
    }
  };

  const degreeHandler4 = () => {
    switch (pressed4) {
      case 0: {
        return (degree4 = "None");
      }
      case 1: {
        return (degree4 = "Mild");
      }
      case 2: {
        return (degree4 = "Mid");
      }
      case 3: {
        return (degree4 = "Semi");
      }
      case 4: {
        return (degree4 = "High");
      }
      default:
        return (degree4 = props[0].degree4);
    }
  };

  const degreeHandler5 = () => {
    switch (pressed5) {
      case 0: {
        return (degree5 = "None");
      }
      case 1: {
        return (degree5 = "Mild");
      }
      case 2: {
        return (degree5 = "Mid");
      }
      case 3: {
        return (degree5 = "Semi");
      }
      case 4: {
        return (degree5 = "High");
      }
      default:
        return (degree5 = props[0].degree);
    }
  };

  const degreeHandler6 = () => {
    switch (pressed6) {
      case 0: {
        return (degree6 = "None");
      }
      case 1: {
        return (degree6 = "Mild");
      }
      case 2: {
        return (degree6 = "Mid");
      }
      case 3: {
        return (degree6 = "Semi");
      }
      case 4: {
        return (degree6 = "High");
      }
      default:
        return (degree6 = props[0].degree6);
    }
  };

  const handleColor = function () {
    // handleVital();
    degreeHandler();
    // console.log(degree, degree2);
    if (degree === "None")
      return {
        backgroundColor: "#85ffa3",
      };
    if (degree === "Mild")
      return {
        backgroundColor: "#97e8f0",
      };
    if (degree === "Mid")
      return {
        backgroundColor: "#da5aed",
      };
    if (degree === "Semi")
      return {
        backgroundColor: "#ff9100",
      };
    if (degree === "High")
      return {
        backgroundColor: "#c20c0c",
      };
    else {
      return {
        backgroundColor: "green",
      };
    }
  };

  const handleColor2 = function () {
    degreeHandler2();
    // console.log(degree, degree2);
    if (degree2 === "None")
      return {
        backgroundColor: "#85ffa3",
      };
    if (degree2 === "Mild")
      return {
        backgroundColor: "#97e8f0",
      };
    if (degree2 === "Mid")
      return {
        backgroundColor: "#da5aed",
      };
    if (degree2 === "Semi")
      return {
        backgroundColor: "#ff9100",
      };
    if (degree2 === "High")
      return {
        backgroundColor: "#c20c0c",
      };
    else {
      return {
        backgroundColor: "green",
      };
    }
  };

  const handleColor3 = function () {
    degreeHandler3();
    // console.log(degree, degree2, degree3);
    if (degree3 === "None")
      return {
        backgroundColor: "#85ffa3",
      };
    if (degree3 === "Mild")
      return {
        backgroundColor: "#97e8f0",
      };
    if (degree3 === "Mid")
      return {
        backgroundColor: "#da5aed",
      };
    if (degree3 === "Semi")
      return {
        backgroundColor: "#ff9100",
      };
    if (degree3 === "High")
      return {
        backgroundColor: "#c20c0c",
      };
    else {
      return {
        backgroundColor: "green",
      };
    }
  };

  const handleColor4 = function () {
    degreeHandler4();
    // console.log(degree, degree2, degree3, degree4);
    if (degree4 === "None")
      return {
        backgroundColor: "#85ffa3",
      };
    if (degree4 === "Mild")
      return {
        backgroundColor: "#97e8f0",
      };
    if (degree4 === "Mid")
      return {
        backgroundColor: "#da5aed",
      };
    if (degree4 === "Semi")
      return {
        backgroundColor: "#ff9100",
      };
    if (degree4 === "High")
      return {
        backgroundColor: "#c20c0c",
      };
    else {
      return {
        backgroundColor: "green",
      };
    }
  };

  const handleColor5 = function () {
    degreeHandler5();
    // console.log(degree, degree2, degree3, degree4, degree5);
    if (degree5 === "None")
      return {
        backgroundColor: "#85ffa3",
      };
    if (degree5 === "Mild")
      return {
        backgroundColor: "#97e8f0",
      };
    if (degree5 === "Mid")
      return {
        backgroundColor: "#da5aed",
      };
    if (degree5 === "Semi")
      return {
        backgroundColor: "#ff9100",
      };
    if (degree5 === "High")
      return {
        backgroundColor: "#c20c0c",
      };
    else {
      return {
        backgroundColor: "green",
      };
    }
  };

  const handleColor6 = function () {
    degreeHandler6();
    // console.log(degree, degree2, degree3, degree4, degree5, degree6);
    // console.log(props);

    if (degree6 === "None")
      return {
        backgroundColor: "#85ffa3",
      };
    if (degree6 === "Mild")
      return {
        backgroundColor: "#97e8f0",
      };
    if (degree6 === "Mid")
      return {
        backgroundColor: "#da5aed",
      };
    if (degree6 === "Semi")
      return {
        backgroundColor: "#ff9100",
      };
    if (degree6 === "High")
      return {
        backgroundColor: "#c20c0c",
      };
    else {
      return {
        backgroundColor: "green",
      };
    }
  };

  return (
    <View style={Styles.entirePage}>
      <View>
        <Text style={{ fontWeight: "bold", marginLeft: 60, marginBottom: 10 }}>
          {today}
        </Text>

        <View style={{ alignItems: "center" }}>
          <View style={Styles.VitalRow}>
            <View
              style={[
                Styles.vitalLog,
                { marginHorizontal: 10 },
                handleColor(degree),
              ]}
            >
              <Text style={{ color: "white" }}>Aches</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {pressed}
              </Text>
              <Text style={{ color: "white" }}>{degree}</Text>
            </View>

            <View
              style={[
                Styles.vitalLog,
                { marginHorizontal: 10 },
                handleColor2(degree2),
              ]}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Breath Shortness
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {pressed2}
              </Text>
              <Text style={{ color: "white" }}>{degree2}</Text>
            </View>
            <View
              style={[
                Styles.vitalLog,
                { marginHorizontal: 10 },
                handleColor3(degree3),
              ]}
            >
              <Text style={{ color: "white" }}>Fever</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {pressed3}
              </Text>
              <Text style={{ color: "white" }}>{degree3}</Text>
            </View>
          </View>

          <View style={Styles.VitalRow}>
            <View
              style={[
                Styles.vitalLog,
                { marginHorizontal: 10 },
                handleColor4(degree4),
              ]}
            >
              <Text style={{ color: "white" }}>Aches</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {pressed4}
              </Text>
              <Text style={{ color: "white" }}>{degree4}</Text>
            </View>

            <View
              style={[
                Styles.vitalLog,
                { marginHorizontal: 10 },
                handleColor5(degree5),
              ]}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Breath Shortness
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {pressed5}
              </Text>
              <Text style={{ color: "white" }}>{degree5}</Text>
            </View>
            <View
              style={[
                Styles.vitalLog,
                { marginHorizontal: 10 },
                handleColor6(degree6),
              ]}
            >
              <Text style={{ color: "white" }}>Fever</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {pressed6}
              </Text>
              <Text style={{ color: "white" }}>{degree6}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
// Vitals.navigationOptions = {
//   headerTitle: <HeaderRight />,
//   headerStyle: {
//     backgroundColor: "#fff",
//   },
//   headerTintColor: "white",
// headerTitleStyle: { fontWeight: "bold" }
// };

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

  // alignItems: "center",
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
  vitalLog: {
    elevation: 2,
    width: 90,
    height: 90,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
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
  VitalRow: {
    flexDirection: "row",
    marginTop: 5,
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
