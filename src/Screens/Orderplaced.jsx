import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Orderplaced = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Home");
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="white" />
      <MaterialIcons name="verified" size={90} color={colors.primary} />
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Su Compra Se Realizo con Exito!!
      </Text>
    </View>
  );
};

export default Orderplaced;