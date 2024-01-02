// import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
// import React,{useState} from 'react'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//     const Gallery = () => {
//         const [selectedImage, setSelectedImage] = useState('');
      
//         const ImagePicker = () => {
//             let options = {
//                 storageOptions:{
//                     path:"image"
//                 },
//             };

//             launchImageLibrary(options, response=>{
//                 setSelectedImage(response.assets[0].uri);
//                 console.log(response.assets[0].uri);
//             });
//         };


      
//         return (
//           <View style={styles.container}>
//             <View style={{height:400,width:'100%'}}>
//               <Image source={{ uri: selectedImage }} style={{height:400,width:'100%'}} />
//               </View>      
      
//             <TouchableOpacity onPress={ImagePicker} style={styles.button}>
//               <Text style={styles.buttonText}>Pick an Image</Text>
//             </TouchableOpacity>
//           </View>
//         );
//       };
      
//       const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         },

//         button: {
//           backgroundColor: 'black',
//           padding: 10,
//           borderRadius: 15,
//         },
//         buttonText: {
//           color: 'white',
//           fontSize: 20,
//         },
//       });



// export default Gallery;


import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const ImagePicker = async () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel || response.error) {
        return;
      }

      const imageUri = response.assets[0].uri;

      const storageRef = storage().ref(`images/${new Date().toISOString()}`);
      const task = storageRef.putFile(imageUri);

      try {
        await task;
        const downloadURL = await storageRef.getDownloadURL();

        await firestore().collection('images').add({
          downloadURL,
        });

        setSelectedImage(downloadURL);

        console.log('Image uploaded successfully:', downloadURL);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 400, width: '100%' }}>
        <Image source={{ uri: selectedImage }} style={{ height: 400, width: '100%' }} />
      </View>

      <TouchableOpacity onPress={ImagePicker} style={styles.button}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Gallery;
