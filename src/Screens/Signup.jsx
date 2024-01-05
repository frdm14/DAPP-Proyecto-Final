import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../Utils/Colors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { authentication, database } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from 'react-native-uuid';


const Signup = () => {
  const [isVisbile, setisVisbile] = useState(true);
  const [userCredentials, setuserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const { email, password, name } = userCredentials;
  const nav = useNavigation();
  const uid = uuid.v4();

  useEffect(() => {
    let timeoutId;
    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
        nav.navigate('Login');
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAlert, nav]);

  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        setShowAlert(true);
        setDoc(doc(database, "users",uid ), {
          username:name,
          email:email,
          id:authentication.currentUser.uid
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("El Email esta siendo usado!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("Direccion de Email invalida!");
        }

        console.error(error);
      });
  };


    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 40 }}>
      {showAlert && (
          <Text style={{ color: 'blue', textAlign: 'center', paddingVertical: 10, fontSize:20 }}>
            ¡Registro exitoso!
          </Text>
        )}
        <Image
          style={{ alignSelf: "center", height: 100, width: 100 }}
          source={require("../assets/registro.png")}
        />
        <View style={{ paddingHorizontal: 35, marginTop: 20 }}>
          <Text
            style={{
              color: colors.third,
              fontSize: 22,
              fontWeight: "500",
              textAlign: "center",
              letterSpacing: 2,
            }}
          >
            REGISTRATE
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
            Ingresa tus datos para continuar
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "white",
              marginTop: 40,
            }}
          >
            USUARIO
          </Text>
          <TextInput
            maxLength={9}
            value={name}
            onChangeText={(val) => {
              setuserCredentials({ ...userCredentials, name: val });
            }}
            keyboardType="name-phone-pad"
            style={{
              borderColor: "white",
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
            EMAIL
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setuserCredentials({ ...userCredentials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "white",
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
              borderColor: "white",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
                    <TextInput
            value={password}
            onChangeText={(val) => {
              setuserCredentials({ ...userCredentials, password: val });
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
              size={30}
              color="black"
            />
        </View>
        <Text
            numberOfLines={2}
            style={{
              fontSize: 15,
              fontWeight: "400",
              color: "white",
              marginTop: 15,
              letterSpacing: 0.7,
              lineHeight: 25,
              width: "95%",
              
            }}
          >
            Para continuar debes aceptar los Terminos y Condiciones del Servicio.
          </Text>
          <TouchableOpacity
            onPress={userAccount}
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
                fontSize: 20,
                color: colors.third,
                fontWeight: "500",
              }}
            >
              Registrarse
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
            <Text style={{ fontSize: 16 }}>Si ya tenes una cuenta.</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Login");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: colors.secondary,
                  fontWeight: "600",
                }}
              >
                Ingresa aqui
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
