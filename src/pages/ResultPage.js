import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ResultPage = (props) => {
  const { navigation, route } = props;
  const { averageConsumption, consumptionIndication } = route.params;

  return (
    <View style={styles.container}>
      <Text>Consumo médio do veículo: {averageConsumption}</Text>
      <Text>Indicação de consumo de veículos: {consumptionIndication}</Text>
      <View style={styles.botaoDefault}>
        <Button
          title="Voltar para a página inicial"
          onPress={() => navigation.navigate("InputPage")}
        />
      </View>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 80,
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
