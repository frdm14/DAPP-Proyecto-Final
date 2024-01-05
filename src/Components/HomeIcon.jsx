import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const HomeIcon = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleGoToCart = () => {
    navigation.navigate('Cart');
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../assets/LogoHome.jpg')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuIcon}>
        <AntDesign name="menu-unfold" size={24} color="black" />
        {showMenu && (
          <View style={styles.menu}>
            <TouchableOpacity onPress={handleLogout}>
              <Text>Salir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoToCart}>
              <Text>Carrito</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
    
  },
  menuIcon: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  menu: {
    position: 'absolute',
    top: 5,
    right: 30,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuOption: {
    marginVertical: 5,
  },
});

export default HomeIcon;