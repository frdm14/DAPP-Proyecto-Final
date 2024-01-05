import { View, Text, Image } from "react-native";
import React from "react";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const HomeBanner = () => {
  return (
    <View>
      <Image
        style={{ height: responsiveHeight(13), width:responsiveWidth(93) }}
        source={require("../assets/banner.jpg")}
      />
    </View>
  );
};

export default HomeBanner;
