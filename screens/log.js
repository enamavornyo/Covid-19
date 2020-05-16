const VitalLog = {
  degree: "None",
  degree1: "Mid",
  degree2: "Mild",
  degree4: "High",
  degree5: "None",
  degree6: "Semi",
};

export default VitalLog;

<View>
  <Text style={{ fontWeight: "bold", marginLeft: 60, marginBottom: 10 }}>
    {today}
  </Text>

  <View style={{ alignItems: "center" }}>
    <View style={Styles.VitalRow}>
      <View
        style={[Styles.vitalLog, { marginHorizontal: 10 }, handleColor(degree)]}
      >
        <Text style={{ color: "white" }}>Aches</Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>{pressed}</Text>
        <Text style={{ color: "white" }}>{VitalLog.degree}</Text>
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
        <Text style={{ color: "white", fontWeight: "bold" }}>{pressed2}</Text>
        <Text style={{ color: "white" }}>{VitalLog.degree2}</Text>
      </View>
      <View
        style={[
          Styles.vitalLog,
          { marginHorizontal: 10 },
          handleColor3(degree3),
        ]}
      >
        <Text style={{ color: "white" }}>Fever</Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>{pressed3}</Text>
        <Text style={{ color: "white" }}>{VitalLog.degree3}</Text>
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
        <Text style={{ color: "white", fontWeight: "bold" }}>{pressed4}</Text>
        <Text style={{ color: "white" }}>{VitalLog.degree4}</Text>
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
        <Text style={{ color: "white", fontWeight: "bold" }}>{pressed5}</Text>
        <Text style={{ color: "white" }}>{VitalLog.degree5}</Text>
      </View>
      <View
        style={[
          Styles.vitalLog,
          { marginHorizontal: 10 },
          handleColor6(degree6),
        ]}
      >
        <Text style={{ color: "white" }}>Fever</Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>{pressed6}</Text>
        <Text style={{ color: "white" }}>{VitalLog.degree6}</Text>
      </View>
    </View>
  </View>
</View>;
