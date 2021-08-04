import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
          navigation={navigation}
        />
        <RestaurantList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
          navigation={navigation}
        />
        <RestaurantList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;