
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
  const navigation = useNavigation();
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  
  const handleAddButtonPress = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  const handleButtonPress1 = () => {
    setIsActive1(!isActive1);
    setIsActive2(false);
  };

  const handleButtonPress2 = () => {
    setIsActive2(!isActive2);
    setIsActive1(false);
  };

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const response = await firestore().collection('blogs').get();
        const fetchedData = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFeedData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feed data:', error);
        setLoading(false);
      }
    };

    fetchFeedData();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('RatingScreen');
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  const handleDelete = async (itemId) => {
    try {
      await firestore().collection('posts').doc(itemId).delete();

      setFeedData((prevData) => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleUpdate = (itemId) => {

    const updatedItem = feedData.find((item) => item.id === itemId);

    navigation.navigate('Compose', {
      updateMode: true,
      title: updatedItem.title,
      content: updatedItem.content,
      itemId: itemId,
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
    <View style={styles.buttonContainer1}>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => handleUpdate(item.id)}
      >
        <Text style={{ color: 'white',paddingTop:4 }}>Update</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={{ color: 'white',paddingTop:4 }}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
  );

  const keyExtractor = (item) => item.id.toString();

  const dataToRender = isActive1 ? feedData : [];

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <TouchableOpacity onPress={ ()=>navigation.navigate('Feed')}  style={{paddingTop: 25}}><Text  style={{ color: 'white',fontSize: 18 }}>Feed</Text></TouchableOpacity>
      <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold',paddingTop: 16 }}>Profile</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{paddingTop: 25}}><Text style={{ color: 'white',fontSize: 18 }}>Logout</Text></TouchableOpacity>
    </View>

    <View style={{ alignItems: 'center', paddingVertical: 20 }}>
      <Image 
        source={require('../Image/Img.jpg')}
        style={{
          paddingTop: 80,
          width: 150,
          height: 150,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: 'white'
        }}
      />
    </View>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={{ color:'black', fontSize :30, alignSelf:'center', fontWeight:'bold',paddingTop:20 }}>John Snow</Text>
        <Text style={{ color:'black',alignSelf:'center',fontSize :18 }}>A mantra goes here</Text>

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, isActive1 ? styles.activeButton : styles.inactiveButton]}
                onPress={()=>handleButtonPress1()}
                activeOpacity={0.7}
        >
        <Text style={[styles.text,isActive1 ? styles.activeText : styles.inactiveText]}>Blogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,isActive2 ? styles.activeButton : styles.inactiveButton]}
                onPress={()=>handleButtonPress2()}
                activeOpacity={0.7} >
        <Text style={[styles.text,isActive2 ? styles.activeText : styles.inactiveText]}>Images</Text>
        </TouchableOpacity>
        </View>
        <View>
        {showAdditionalButtons && (
        <View style={styles.additionalButtonsContainer}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Compose')}} 
          style={styles.additionalButton1}>
            <Text style={styles.additionalButtonText}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Gallery')}}
          style={styles.additionalButton2}>
            <Text style={styles.additionalButtonText}>I</Text>
          </TouchableOpacity>
        </View>
      )}
          <TouchableOpacity onPress={handleAddButtonPress} style={[styles.addButton]} ><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        </View>


      <View><FlatList
        data={dataToRender}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: 'white' }}>No posts available</Text>
          </View>
        )}
      /></View>
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:10,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
  text: {
    color: 'grey',
    alignSelf: 'center',
    fontWeight:'bold',
    fontSize:16
  },
  activeButton: {
    backgroundColor: 'white',   
    borderColor: 'black',
    borderWidth: 1,
  },
  inactiveButton: {
    backgroundColor: 'white',
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: 1,
  },
  activeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  inactiveText: {
    color: 'rgb(211, 211, 211)',
    fontSize: 20
  },
  addButton:{
    position: 'absolute',
    bottom: -340,
    right: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize:20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    color: 'grey',
  },
  buttonContainer1: {
    flexDirection: 'row',
  },
  updateButton: {
    marginRight: 10,
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
  },
  addButton:{
    position: 'absolute',
    bottom: -340,
    right: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width:50,
    height:50,
  },
  additionalButtonsContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: -280,
    right: 20,
  },
  additionalButton1: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width:50,
    height:50,
  },
  additionalButton2: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width:50,
    height:50,
    marginTop:10
  },
  additionalButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Profile;


// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';


// const Profile = () => {
//   const navigation = useNavigation();
//   const [isActive1, setIsActive1] = useState(false);
//   const [isActive2, setIsActive2] = useState(false);
//   const [feedData, setFeedData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
//   const [imageUrl, setImageUrl] = useState([]);

  
//   const handleAddButtonPress = () => {
//     setShowAdditionalButtons(!showAdditionalButtons);
//   };

//   const handleButtonPress1 = () => {
//     setIsActive1(!isActive1);
//     setIsActive2(false);
//   };

//   const handleButtonPress2 = () => {
//     setIsActive2(!isActive2);
//     setIsActive1(false);
//   };

//   useEffect(() => {
//     const fetchFeedData = async () => {
//       try {
//         const response = await firestore().collection('blogs').get();
//         const fetchedData = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setFeedData(fetchedData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching feed data:', error);
//         setLoading(false);
//       }
//     };

//     const fetchImageUrl = async () => {
//       try {
//         const path = 'images/2023-12-30T11:21:20.793Z';
//         const url = await storage().ref(path).getDownloadURL();
//         console.log(url);
//         setImageUrl(url);
//       } catch (error) {
//         console.error('Error fetching image URL:', error);
//       }
//     };

//     fetchImageUrl();
//     fetchFeedData();

//   }, []);

//   const handleDelete = async (itemId) => {
//     try {
//       await firestore().collection('posts').doc(itemId).delete();

//       setFeedData((prevData) => prevData.filter((item) => item.id !== itemId));
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleUpdate = (itemId) => {

//     const updatedItem = feedData.find((item) => item.id === itemId);

//     navigation.navigate('Compose', {
//       updateMode: true,
//       title: updatedItem.title,
//       content: updatedItem.content,
//       itemId: itemId,
//     });
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//     <View style={styles.textContainer}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.content}>{item.content}</Text>
//     </View>
//     <View style={styles.buttonContainer1}>
//       <TouchableOpacity
//         style={styles.updateButton}
//         onPress={() => handleUpdate(item.id)}
//       >
//         <Text style={{ color: 'white',paddingTop:4 }}>Update</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDelete(item.id)}
//       >
//         <Text style={{ color: 'white',paddingTop:4 }}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
//   );


//   const renderImageItem = ({ item }) => (
//     <View style={styles.imageContainer}>
//       <Image source={{ uri: item }} style={styles.image} />
//     </View>
//   );
  

//   const keyExtractor = (item) => item.id.toString();

//   const dataToRender = isActive1 ? feedData : [];

//   return (
//     <View style={{ flex: 1, backgroundColor: 'black' }}>
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
//       <TouchableOpacity onPress={ ()=>navigation.navigate('RatingScreen')}  style={{paddingTop: 25}}><Text  style={{ color: 'white',fontSize: 18 }}>Rate our App</Text></TouchableOpacity>
//       <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold',paddingTop: 16 }}>Profile</Text>
//       <TouchableOpacity onPress={()=>navigation.navigate('Feed')} style={{paddingTop: 25}}><Text style={{ color: 'white',fontSize: 18 }}>Feed</Text></TouchableOpacity>
//       <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{paddingTop: 25}}><Text style={{ color: 'white',fontSize: 18 }}>Logout</Text></TouchableOpacity>
//     </View>

//     <View style={{ alignItems: 'center', paddingVertical: 20 }}>
//       <Image 
//         source={require('../Image/Img.jpg')}
//         style={{
//           paddingTop: 80,
//           width: 150,
//           height: 150,
//           borderRadius: 100,
//           borderWidth: 2,
//           borderColor: 'white'
//         }}
//       />
//     </View>
//         <View style={{ flex: 1, backgroundColor: 'white' }}>
//         <Text style={{ color:'black', fontSize :30, alignSelf:'center', fontWeight:'bold',paddingTop:20 }}>John Snow</Text>
//         <Text style={{ color:'black',alignSelf:'center',fontSize :18 }}>A mantra goes here</Text>

//         <View style={styles.buttonContainer}>
//         <TouchableOpacity style={[styles.button, isActive1 ? styles.activeButton : styles.inactiveButton]}
//                 onPress={()=>handleButtonPress1()}
//                 activeOpacity={0.7}
//         >
//         <Text style={[styles.text,isActive1 ? styles.activeText : styles.inactiveText]}>Blogs</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button,isActive2 ? styles.activeButton : styles.inactiveButton]}
//                 onPress={()=>handleButtonPress2()}
//                 activeOpacity={0.7} >
//         <Text style={[styles.text,isActive2 ? styles.activeText : styles.inactiveText]}>Images</Text>
//         </TouchableOpacity>
//         </View>
//         <View>
//         {showAdditionalButtons && (
//         <View style={styles.additionalButtonsContainer}>
//           <TouchableOpacity onPress={()=>{navigation.navigate('Compose')}} 
//           style={styles.additionalButton1}>
//             <Text style={styles.additionalButtonText}>B</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>{navigation.navigate('Gallery')}}
//           style={styles.additionalButton2}>
//             <Text style={styles.additionalButtonText}>I</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//           <TouchableOpacity onPress={handleAddButtonPress} style={[styles.addButton]} ><Text style={styles.buttonText}>+</Text></TouchableOpacity>
//         </View>
//       <FlatList
//         data={dataToRender}
//         renderItem={isActive1 ? renderItem : renderImageItem}
//         keyExtractor={keyExtractor}
//         ListEmptyComponent={() => (
//           <View style={{ alignItems: 'center', marginTop: 20 }}>
//             <Text style={{ color: 'white' }}>No data available</Text>
//           </View>
//         )}
//       />
//       </View>  
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     paddingTop:10,
//   },
//   button: {
//     padding: 10,
//     borderRadius: 20,
//     width: 150,
//   },
//   text: {
//     color: 'grey',
//     alignSelf: 'center',
//     fontWeight:'bold',
//     fontSize:16
//   },
//   activeButton: {
//     backgroundColor: 'white',   
//     borderColor: 'black',
//     borderWidth: 1,
//   },
//   inactiveButton: {
//     backgroundColor: 'white',
//     borderColor: 'rgb(211, 211, 211)',
//     borderWidth: 1,
//   },
//   activeText: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 20
//   },
//   inactiveText: {
//     color: 'rgb(211, 211, 211)',
//     fontSize: 20
//   },
//   addButton:{
//     position: 'absolute',
//     bottom: -340,
//     right: 20,
//     backgroundColor: 'black',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 50,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize:20,
//   },
//   itemContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'grey',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   content: {
//     fontSize: 12,
//     color: 'grey',
//   },
//   buttonContainer1: {
//     flexDirection: 'row',
//   },
//   updateButton: {
//     marginRight: 10,
//     backgroundColor: 'black',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteButton: {
//     backgroundColor: 'black',
//     padding: 5,
//     borderRadius: 5,
//   },
//   addButton:{
//     position: 'absolute',
//     bottom: -340,
//     right: 20,
//     backgroundColor: 'black',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 50,
//     width:50,
//     height:50,
//   },
//   additionalButtonsContainer: {
//     flexDirection: 'column',
//     position: 'absolute',
//     bottom: -280,
//     right: 20,
//   },
//   additionalButton1: {
//     backgroundColor: 'black',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 50,
//     width:50,
//     height:50,
//   },
//   additionalButton2: {
//     backgroundColor: 'black',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 50,
//     width:50,
//     height:50,
//     marginTop:10
//   },
//   additionalButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//   },
// });

// export default Profile;
