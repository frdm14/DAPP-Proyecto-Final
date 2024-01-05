import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTitle from "../Components/ProductsTitle";
import Carousel from "../Components/Carousel";
import { products, productsCarousel} from "../Utils/Date";


const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <View style={{ gap: 20, paddingBottom: 20 }}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductsTitle titulo="Ofertas Exclusivas" />
          <Carousel data={productsCarousel} />
          <ProductsTitle titulo="Mas Vendidos" />
          <Carousel data={products} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;