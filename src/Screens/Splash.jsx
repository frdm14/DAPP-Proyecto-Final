import { View, Text, Image } from "react-native";
import React, { useEffect} from "react";
import { colors } from "./../Utils/Colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
const nav=useNavigation()

useEffect(() =>{
  setTimeout(() =>{
nav.replace("Signup")
  }, 4000);
},[]);


  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{height:250, width:250}}
          source={require("../assets/logisticaLogo.png")}
        />
        
      </View>
      <View  style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text style={{fontSize:30, color:colors.secondary, letterSpacing:4}}>
          Bienvenidos
        </Text>
      </View>
    </View>
  );
};

export default Splash;
