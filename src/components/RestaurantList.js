import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const RestaurantList = ({ title, results }) => {
  return (
    <View >
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default RestaurantList;