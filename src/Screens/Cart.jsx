import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
 } from "react-native-responsive-dimensions";
 import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../Utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  clearCart
} from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  let amount = 0;
  storeData.forEach((element) => {
    amount += element.quantity * element.price;
  });

  const goToHomeScreen = () => {
    nav.navigate("Home"); 
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        gap: 15,
        marginTop:20
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginRight:20 }}>
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "500", marginLeft:10 }}>
          Mis Productos 
        </Text>
        <TouchableOpacity onPress={goToHomeScreen}>
        <FontAwesome name="home" size={30} color="black"/>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.93,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{}}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(18),

                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 0.35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ height: 120, width: 120, resizeMode: "contain" }}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>

              <View
                style={{
                  flex: 0.7,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <AntDesign
                    name="close"
                    size={25}
                    color="grey"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                </View>
                <Text style={{ fontSize: 17, color: "grey", marginTop: 5 }}>
                  {item.pieces} Precio
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",

                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <AntDesign
                      name="minuscircleo"
                      size={28}
                      color={colors.primary}
                      onPress={() => {
                        if (item.quantity === 1) {
                          dispatch(removeFromCart(item));
                        } else {
                          dispatch(decrementQuantity(item));
                        }
                      }}
                    />
                    <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                    <AntDesign
                      name="pluscircleo"
                      size={28}
                      color={colors.primary}
                      onPress={() => {
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQuantity(item));
                        }
                      }}
                    />
                  </View>

                  <Text style={{ fontSize: 22, fontWeight: "600" }}>
                    $ {item.quantity * item.price}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            dispatch(clearCart());
            nav.navigate("OrderPlaced");
          }}
          activeOpacity={0.8}
          style={{
            marginTop: 100,
            backgroundColor: colors.primary,
            borderRadius: 10,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
              Finalizar Compra
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
              $ {amount}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
