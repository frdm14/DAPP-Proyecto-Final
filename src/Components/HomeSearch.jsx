import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Feather } from '@expo/vector-icons';
import { productsCarousel, products } from '../Utils/Date';

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );

    const filteredCarouselProducts = productsCarousel.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );

    const combinedResults = [...filteredProducts, ...filteredCarouselProducts];

    setSearchResults(combinedResults);
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: '#F2F3F2',
          height: responsiveHeight(6),
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          gap: 15,
        }}
      >
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Buscar producto"
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>

      {searchTerm !== '' && (
        <View style={{ marginTop: 10 }}>
          <Text>Resultados:</Text>
          {searchResults.map((result, index) => (
            <Text key={index}>{result.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default HomeSearch;

