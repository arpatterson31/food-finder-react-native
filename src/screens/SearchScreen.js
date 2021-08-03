import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchAPI = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'Seattle'
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchAPI}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;