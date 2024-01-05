import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const nav = useNavigation();
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isVisbile, setisVisbile] = useState(true);

  const { email, password } = loginCredentials;

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((value) => {
        if (value) {
          AsyncStorage.setItem("id", "success");
          nav.replace("Home");
        }
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ScrollView style={{ flex: 1, paddingTop: 40 }}>
        <Image
          style={{ alignSelf: "center", height: 100, width: 100 }}
          source={require("../assets/login.png")}
        />

        <View style={{ paddingHorizontal: 35, marginTop: 40 }}>
          <Text
            style={{
              color: colors.third,
              fontSize: 22,
              fontWeight: "500",
              textAlign: "center",
              letterSpacing: 2,
            }}
          >
            INGRESAR
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "white",
              marginTop: 5,
              textAlign: "center",
              letterSpacing: 1,
            }}
          >
            Ingresa tu email y contraseña
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "white",
              marginTop: 40,
            }}
          >
            EMAIL
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setloginCredentials({ ...loginCredentials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "white",
              marginTop: 40,
            }}
          >
            CONTRASEÑA
          </Text>
          <View
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setloginCredentials({ ...loginCredentials, password: val });
              }}
              secureTextEntry={isVisbile}
              maxLength={10}
              keyboardType="ascii-capable"
              style={{
                fontSize: 20,
                marginTop: 15,

                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => {
                setisVisbile(!isVisbile);
              }}
              name={isVisbile == true ? "eye-off" : "eye-sharp"}
              size={24}
              color="black"
            />
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              color: "black",
              marginTop: 15,

              textAlign: "right",
            }}
          >
            Olvidaste tu Contraseña?
          </Text>
          <TouchableOpacity
            onPress={loginUser}
            style={{
              backgroundColor: colors.secondary,
              marginTop: 30,
              height: 70,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: colors.third,
                fontWeight: "500",
              }}
            >
              Loguearse
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>No tienes una cuenta?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Signup");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: colors.secondary,
                  fontWeight: "600",
                }}
              >
                Registrate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
