// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Button,
//   ScrollView,
//   StyleSheet,
//   TextInput,
//   CheckBox,
//   //   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   Modal,
//   Dimensions,
//   TouchableHighlight,
// } from "react-native";

// import { Platform } from "react-native";
// import AddIcon from "../components/addIcon";
// import Icon from "../components/icon";

// export default function VitalsModal(...props) {
//   const [logVitals, setLogVitals] = useState(true);
//   const [pressed, setPressed] = useState(Number);
//   let [vital1] = useState(Number);
//   const [pressed2, setPressed2] = useState(Number);
//   let [vital2] = useState(Number);
//   const [pressed3, setPressed3] = useState(Number);
//   let [vital3] = useState(Number);
//   const [pressed4, setPressed4] = useState(Number);
//   let [vital4] = useState(Number);
//   const [pressed5, setPressed5] = useState(Number);
//   let [vital5] = useState(Number);
//   const [pressed6, setPressed6] = useState(Number);
//   let [vital6] = useState(Number);

//   const handleVital = () => {
//     // pressed = -1 means it was left null
//     pressed ? (vital1 = pressed) : (vital1 = 0);
//     pressed2 ? (vital2 = pressed2) : (vital2 = 0);
//     pressed3 ? (vital3 = pressed3) : (vital3 = 0);
//     pressed4 ? (vital4 = pressed4) : (vital4 = 0);
//     pressed5 ? (vital5 = pressed5) : (vital5 = 0);
//     pressed6 ? (vital6 = pressed6) : (vital6 = 0);

//     console.log(vital1);
//     console.log(vital2);
//     console.log(vital3);
//     console.log(vital4);
//     console.log(vital5);
//     console.log(vital6);
//   };

//   return (

//   );
// }
// const Styles = StyleSheet.create({
//   container: {
//     padding: 0,
//     backgroundColor: "#fff",
//   },
//   entirePage: {
//     flex: 1,
//   },
//   // centeredView: {
//   //   flex: 1,

//   // alignItems: "center",
//   //   marginTop: 0,
//   // },
//   modalView: {
//     // maxHeight: Dimensions.get("window").height,
//     height: 650,
//     width: "100%",
//     backgroundColor: "white",
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   vitalCard: {
//     elevation: 2,
//     height: 120,
//     marginBottom: 10,
//     borderRadius: 10,
//     padding: 10,
//   },
//   vitalLog: {
//     elevation: 2,
//     width: 90,
//     height: 90,
//     marginBottom: 10,
//     borderRadius: 10,
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   VitalGroup: {
//     justifyContent: "center",
//     // borderColor: "grey",
//     // borderWidth: 1,
//     // elevation: 2,
//     // height: 100,
//     // marginBottom: 20,
//     // borderRadius: 10,
//     // padding: 10,
//     alignItems: "center",
//   },
//   vitalSeverity: {
//     backgroundColor: "black",
//     color: "white",
//     height: 40,
//     width: 40,
//     borderRadius: 40,
//     borderColor: "black",
//     borderWidth: 1,
//     padding: 10,
//     elevation: 1,
//     marginHorizontal: 10,
//   },
//   openButton: {
//     backgroundColor: "black",
//     color: "white",
//     height: 70,
//     width: 70,
//     borderRadius: 40,
//     padding: 10,
//     elevation: 1,
//   },
//   textStyle: {
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginTop: 15,
//     marginBottom: 15,
//   },
//   modalHeader: {
//     flexDirection: "row",
//   },
//   row: {
//     flexDirection: "row",
//     marginTop: 30,
//   },
//   VitalRow: {
//     flexDirection: "row",
//     marginTop: 5,
//   },
//   modalBody: {
//     paddingTop: 0,
//     padding: 20,
//   },
//   modalHeaderTxt: {
//     fontSize: 30,
//     fontWeight: "bold",
//     margin: 15,
//   },
//   closeButton: {
//     marginLeft: "auto",
//     margin: 20,
//   },
//   country: {
//     backgroundColor: "transparent",
//     margin: "1%",
//     borderColor: "black",
//     borderWidth: 1,
//     borderRadius: 10,
//     height: 90,
//     width: "35%",
//     elevation: 1,
//   },
// });
