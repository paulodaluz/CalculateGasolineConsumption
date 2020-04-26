import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const InputPage = (props) => {
  const [kilometersTraveled, setkilometersTraveled] = useState("");
  const [usedGasoline, setusedGasoline] = useState("");
  const [msg, setMsg] = useState("Calcular a média de KM percorridos");

  const { navigation } = props;

  const average = () => {
    if (kilometersTraveled && usedGasoline) {
      const averageConsumption = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
      navigation.navigate("ResultPage", { averageConsumption });
    } else {
      setMsg("Parâmetros inválidos!");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput
        style={styles.caixaTexto}
        placeholder="Quantidade de KM percorridos"
        onChangeText={(valor) => setkilometersTraveled(valor)}
        value={kilometersTraveled}
      />
      <TextInput
        style={styles.caixaTexto}
        placeholder="Quantidade de gasolina consumida"
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
