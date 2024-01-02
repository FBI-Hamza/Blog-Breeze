/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
const RatingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AirbnbRating count={5} defaultRating={4} size={30} />
      <Text style={styles.title}>Rate our app</Text>
      <Text style={styles.text}>
      Your feedback is invaluable to us! At Blog Breeze, we strive to provide the best user experience possible. Please take a moment to share your thoughts and rate our app. Your ratings and comments help us understand what you love about the app and where we can make improvements.
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Feedback')} style={styles.button}>
        <Text style={styles.buttonText}>Thank you for rating!</Text>
      </TouchableOpacity>
      
      <Text style={styles.smallText}>Don’t like the app? Let us know.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RatingScreen;
