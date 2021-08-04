import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const RestaurantInfoScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurant = async (id) => {
    await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Results Show Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({});

export default RestaurantInfoScreen;