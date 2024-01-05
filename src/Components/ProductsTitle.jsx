import { View, Text } from "react-native";
import React from "react";
import { colors } from './../Utils/Colors';

const ProductsTitle = ({titulo}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" }}>{titulo}</Text>
      <Text style={{fontSize:16,color:colors.primary}} >Ver Todos</Text>
    </View>
  );
};

export default ProductsTitle;