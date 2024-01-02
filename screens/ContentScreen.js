/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ContentScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <View style={styles.headerContainer}>
            <Text style={styles.header}>{item.header}</Text>
            <Text>{item.text}</Text>
            <Text>{item.time}</Text>
          </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  feedItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  timeText: {
    color: '#888',
    marginTop: 10,
  },
  headerContainer: {
    marginVertical: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ContentScreen;
