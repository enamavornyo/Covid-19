// import React, { Component, useState } from "react";
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
// } from "react-native";

// const Profile = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>

//             <TouchableHighlight
//               style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </Modal>

//       <TouchableHighlight
//         style={styles.openButton}
//         onPress={() => {
//           setModalVisible(true);
//         }}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

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
            <TabBarIcon
              name={Platform.OS === "ios" ? "ios-close-outline" : "md-close"}
            />
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          style={{ ...Styles.openButton, backgroundColor: "#2196F3" }}
          onPress={() => {
            setProfileVisible(!profileVisible);
          }}
        >
          <Text style={Styles.textStyle}>Hide Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>
</View>;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: "95%",
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalHeader: {
    flexDirection: "row",
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
});

export default Profile;
