/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RadioButton = ({title, onPress, selected}) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Text style={styles.optionText}>{title}</Text>
    <View style={selected ? styles.selectedIcon : styles.unselectedIcon} />
  </TouchableOpacity>
);

const Feedback = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.navText}>Back</Text>
        <Text style={styles.navTitle}>User Options</Text>
        <Text style={styles.navText}>Next</Text>
      </View>
      <View style={styles.optionsContainer}>
        <RadioButton
          title="I don't find friends there"
          onPress={() => setSelectedOption(0)}
          selected={selectedOption === 0}
        />
        <RadioButton
          title="Not much interested in it"
          onPress={() => setSelectedOption(1)}
          selected={selectedOption === 1}
        />
        <RadioButton
          title="Dont wanna tell its soo bad"
          onPress={() => setSelectedOption(2)}
          selected={selectedOption === 2}
        />
        <RadioButton
          title="Bad experience"
          onPress={() => setSelectedOption(3)}
          selected={selectedOption === 3}
        />
        <RadioButton
          title="Not a great app for sure"
          onPress={() => setSelectedOption(4)}
          selected={selectedOption === 4}
        />
      </View>
      <TouchableOpacity onPress={()=>(navigation.navigate('Profile'))} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    color:'#000000',
  },
  navText: { fontSize: 18, color:'#000000'},
  navTitle: {fontSize: 20, fontWeight: 'bold',color:'#000000'},
  optionsContainer: {flex: 1},
  option: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {marginLeft: 10, color:'#000000'},
  selectedIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    marginLeft: 10,
  },
  unselectedIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {color: '#FFF', fontSize: 18},
});

export default Feedback;
