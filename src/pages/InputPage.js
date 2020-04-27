import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const InputPage = (props) => {
  const [kilometersTraveled, setkilometersTraveled] = useState("");
  const [usedGasoline, setusedGasoline] = useState("");
  const [msg, setMsg] = useState("Calcular a média de KM percorridos");

  const { navigation } = props;

  const average = () => {
    if (kilometersTraveled && usedGasoline) {
      const averageConsumption = (kilometersTraveled / usedGasoline).toFixed(2);

      let consumptionIndication = "";
      if (averageConsumption > 12) {
        consumptionIndication = "A";
      } else if (averageConsumption > 10 && averageConsumption <= 12) {
        consumptionIndication = "B";
      } else if (averageConsumption > 8 && averageConsumption <= 10) {
        consumptionIndication = "C";
      } else if (averageConsumption > 4 && averageConsumption <= 8) {
        consumptionIndication = "D";
      } else if (averageConsumption < 4) {
        consumptionIndication = "E";
      }

      navigation.navigate("ResultPage", {
        averageConsumption,
        consumptionIndication,
      });

      setkilometersTraveled("");
      setusedGasoline("");
    } else {
      setMsg("Parâmetros inválidos!");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput
        style={styles.caixaTexto}
        keyboardType="numeric"
        placeholder="Quantidade de KM percorridos"
        onChangeText={(valor) => setkilometersTraveled(valor)}
        value={kilometersTraveled}
      />
      <TextInput
        style={styles.caixaTexto}
        keyboardType="numeric"
        placeholder="Quantidade de litros de gasolina consumidos"
        onChangeText={(valor) => setusedGasoline(valor)}
        value={usedGasoline}
      />
      <View style={styles.botaoDefault}>
        <Button title="Calcular" onPress={() => average()} />
      </View>
    </View>
  );
};

export default InputPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
