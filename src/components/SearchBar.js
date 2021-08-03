import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <FontAwesome name="search" size={30} />
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});

export default SearchBar;