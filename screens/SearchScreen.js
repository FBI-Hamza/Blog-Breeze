import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate search results based on user input
    const mockResults = [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
      'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
      'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    ];

    // Filter results based on the user's input
    const filteredResults = mockResults.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>9:41</Text>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Content</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSearch}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <Text style={styles.resultItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20, flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  time: {
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 10,
    flex: 1,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  submitButtonText: {
    color: 'white',
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SearchScreen;