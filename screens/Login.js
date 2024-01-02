// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import auth from '@react-native-firebase/auth';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const auth = getAuth();
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log('User signed in:', user);
      
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//       Alert.alert('Error', 'Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email Address"
//         placeholderTextColor="#000"
//         onChangeText={text => setEmail(text)}
//         value={email}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#000"
//         secureTextEntry
//         onChangeText={text => setPassword(text)}
//         value={password}
//       />
//       <Button title="Login" color="#000" onPress={handleSignIn} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#000',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingLeft: 8,
//     color: '#000',
//   },
// });

// export default Login;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Touchable } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Sign in the user with email and password
      await auth().signInWithEmailAndPassword(email, password);
      
      console.log('User logged in successfully!');
      
      // Optionally, you can navigate to the profile screen or another screen
      navigation.navigate('Profile');
      
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        console.log('No user found with that email address!');
      }
  
      if (error.code === 'auth/wrong-password') {
        console.log('Incorrect password!');
      }
      
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}><Text style={{color:'white',alignSelf:'center',fontSize:18,paddingTop:5}}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate('Signup')}><Text style={{color:'white',alignSelf:'center',fontSize:18,paddingTop:5}}>Doesn't have a Account</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },

  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    color: '#000',
  },

  buttonContainer: {
    backgroundColor: 'black', 
    borderRadius: 20,
    width:380,
    height:40,
    marginBottom:10,
  },
});

export default Login;
