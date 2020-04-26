import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const ResultPage = (props) => {
  const [kilometersTraveled, setkilometersTraveled] = useState("");
  const [usedGasoline, setusedGasoline] = useState("");
  const [msg, setMsg] = useState("Calcular a média de KM percorridos");

  const { navigation, averageConsumption } = props;

  return (
    <View style={styles.container}>
      <Text>{averageConsumption}</Text>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  caixaTexto: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    padding: 5,
    marginTop: 5,
  },
  botaoDefault: {
    marginTop: 5,
  },
});
