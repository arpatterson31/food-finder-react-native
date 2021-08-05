import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantInfoScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.headerStyle}>{result.name}</Text>
      <Text>{result.display_phone}</Text>
      <Text>{result.location.address1}</Text>
      <Text>{result.location.city}, {result.location.state}  {result.location.zip_code}</Text>
      <Text>{result.price}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300
  },
  headerStyle: {
    fontSize: 18
  }
});

export default RestaurantInfoScreen;