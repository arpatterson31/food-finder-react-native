import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const RestaurantList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <RestaurantDetail restaurant={item} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  }
});

export default RestaurantList;