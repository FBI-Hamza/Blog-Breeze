/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, TextInput, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Feed = () => {
//   const navigation = useNavigation();
  // const [feedData, setFeedData] = useState([
  //   {"id": "1", "header": "User 1", "text": "Just posted a status update!", "time": "10 minutes ago"},
  //   {"id": "2", "header": "User 2", "text": "Feeling excited about the weekend!", "time": "25 minutes ago"},
  //   {"id": "3", "header": "User 3", "text": "Enjoying some quality time with friends.", "time": "30 minutes ago"},
  //   {"id": "4", "header": "User 4", "text": "Posted another status update.", "time": "1 hour ago"},
  //   {"id": "5", "header": "User 5", "text": "Happy Monday everyone!", "time": "2 hours ago"},
  //   {"id": "6", "header": "User 6", "text": "Looking forward to the upcoming holiday.", "time": "3 hours ago"},
//     {"id": "7", "header": "User 7", "text": "Had a great workout session today!", "time": "4 hours ago"},
//     {"id": "8", "header": "User 8", "text": "Enjoying a cup of coffee on a rainy day.", "time": "5 hours ago"},
//     {"id": "9", "header": "User 9", "text": "Just finished reading a good book.", "time": "6 hours ago"},
//     {"id": "10", "header": "User 10", "text": "Excited for the weekend getaway.", "time": "7 hours ago"},
//     {"id": "11", "header": "User 11", "text": "Had a productive day at work.", "time": "8 hours ago"},
//     {"id": "12", "header": "User 12", "text": "Trying out a new recipe for dinner tonight.", "time": "9 hours ago"},
//     {"id": "13", "header": "User 13", "text": "Feeling motivated and ready to conquer the day!", "time": "10 hours ago"},
//     {"id": "14", "header": "User 14", "text": "Spent the day exploring new places.", "time": "11 hours ago"},
//     {"id": "15", "header": "User 15", "text": "Relaxing with some music after a busy day.", "time": "12 hours ago"},
//     {"id": "16", "header": "User 16", "text": "Looking forward to the weekend.", "time": "13 hours ago"},
//     {"id": "17", "header": "User 17", "text": "Reflecting on the week's accomplishments.", "time": "14 hours ago"},
//     {"id": "18", "header": "User 18", "text": "Feeling grateful for the little things in life.", "time": "15 hours ago"},
//     {"id": "19", "header": "User 19", "text": "Sending positive vibes to everyone!", "time": "16 hours ago"},
//     {"id": "20", "header": "User 20", "text": "Ready for a relaxing weekend.", "time": "17 hours ago"},
//     {"id": "21", "header": "User 21", "text": "Enjoying a delicious home-cooked meal.", "time": "18 hours ago"},
//     {"id": "22", "header": "User 22", "text": "Feeling inspired by nature.", "time": "19 hours ago"},
//     {"id": "23", "header": "User 23", "text": "Excited about upcoming projects!", "time": "20 hours ago"},
//     {"id": "24", "header": "User 24", "text": "Appreciating the beauty of a sunset.", "time": "21 hours ago"},
//     {"id": "25", "header": "User 25", "text": "Spending quality time with family.", "time": "22 hours ago"},
//     {"id": "26", "header": "User 26", "text": "Feeling energized after a good workout.", "time": "23 hours ago"},
//     {"id": "27", "header": "User 27", "text": "Ready for a weekend road trip!", "time": "1 day ago"},
//     {"id": "28", "header": "User 28", "text": "Grateful for the support of friends and family.", "time": "1 day ago"},
//     {"id": "29", "header": "User 29", "text": "Exploring new hobbies and interests.", "time": "1 day ago"},
//     {"id": "30", "header": "User 30", "text": "Chasing dreams and setting new goals.", "time": "1 day ago"},
//     {"id": "31", "header": "User 31", "text": "Celebrating small victories.", "time": "1 day ago"},
//     {"id": "32", "header": "User 32", "text": "Feeling grateful for health and happiness.", "time": "1 day ago"},
//     {"id": "33", "header": "User 33", "text": "Ready for a weekend of relaxation.", "time": "1 day ago"},
//     {"id": "34", "header": "User 34", "text": "Spending time in nature to recharge.", "time": "1 day ago"},
//     {"id": "35", "header": "User 35", "text": "Reflecting on personal growth.", "time": "1 day ago"},
//     {"id": "36", "header": "User 36", "text": "Embracing the beauty of the present moment.", "time": "1 day ago"},
//     {"id": "37", "header": "User 37", "text": "Feeling inspired by art and creativity.", "time": "1 day ago"},
//     {"id": "38", "header": "User 38", "text": "Enjoying a cup of tea on a rainy day.", "time": "1 day ago"},
//     {"id": "39", "header": "User 39", "text": "Setting intentions for the week ahead.", "time": "1 day ago"},
//     {"id": "40", "header": "User 40", "text": "Ready for a weekend filled with laughter and joy.", "time": "1 day ago"},
//     {"id": "41", "header": "User 41", "text": "Feeling blessed and grateful.", "time": "1 day ago"},
//     {"id": "42", "header": "User 42", "text": "Excited about upcoming adventures.", "time": "1 day ago"},
//     {"id": "43", "header": "User 43", "text": "Cherishing moments of peace and quiet.", "time": "1 day ago"},
//     {"id": "44", "header": "User 44", "text": "Appreciating the little joys of life.", "time": "1 day ago"},
//     {"id": "45", "header": "User 45", "text": "Feeling motivated and ready to tackle challenges.", "time": "1 day ago"},
//     {"id": "46", "header": "User 46", "text": "Connecting with friends and loved ones.", "time": "1 day ago"},
//     {"id": "47", "header": "User 47", "text": "Grateful for a weekend of rest and relaxation.", "time": "1 day ago"},
//     {"id": "48", "header": "User 48", "text": "Ready for a week of productivity and positivity.", "time": "1 day ago"},
//     {"id": "49", "header": "User 49", "text": "Enjoying a quiet Sunday morning.", "time": "1 day ago"},
//     {"id": "50", "header": "User 50", "text": "Feeling inspired by the beauty of nature.", "time": "1 day ago"}
//   ]
//   );
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Simulating an asynchronous data fetch
//         // Replace this with your actual data fetching logic
//         await new Promise(resolve => setTimeout(resolve, 1000));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//   };

//   const handlePress = (item) => {
//     console.log('Item pressed:', item);
//     navigation.navigate('ContentScreen', { item });
//   };

//   const renderItem = ({ item }) => {
//     if (item.header) {
//       return (
//         <TouchableWithoutFeedback onPress={() => handlePress(item)}>
//           <View style={styles.headerContainer}>
//             <Text style={styles.header}>{item.header}</Text>
//             <Text>{item.text}</Text>
//           </View>
//         </TouchableWithoutFeedback>
//       );
//     }

//     // Render regular item
//     // return (
//     //   <TouchableOpacity style={styles.feedItem} onPress={() => handlePress(item)}>
//     //     <Text>{item.text}</Text>
//     //     <Text style={styles.timeText}>{item.time}</Text>
//     //   </TouchableOpacity>
//     // );
//   };

//   const renderSeparator = () => (
//     <View
//       style={{
//         height: 1,
//         backgroundColor: '#ccc',
//         marginVertical: 10,
//       }}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchInput}
//         onChangeText={text => handleSearch(text)}
//         value={searchQuery}
//         placeholder="Search"
//       />
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={feedData.filter(item => item.text.toLowerCase().includes(searchQuery.toLowerCase()))}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           ItemSeparatorComponent={renderSeparator}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 10,
//   },
//   searchInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   feedItem: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//   },
//   timeText: {
//     color: '#888',
//     marginTop: 10,
//   },
//   headerContainer: {
//     marginVertical: 10,
//   },
//   header: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginBottom: 5,
//   },
// });

// export default Feed;
/////////////////////////////////

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Feed = () => {
  const navigation = useNavigation();
  const [feedData, setFeedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Ali-Haider006/Online-Auction/main/posts.json');
        const data = await response.json();
        setFeedData(data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handlePress = (item) => {
    console.log('Item pressed:', item);
    navigation.navigate('ContentScreen', { item });
  };

  const renderItem = ({ item }) => {
    if (item.header) {
      return (
        <TouchableWithoutFeedback onPress={() => handlePress(item)}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{item.header}</Text>
            <Text>{item.text}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }

    return (
      <TouchableWithoutFeedback onPress={() => handlePress(item)}>
        <View style={styles.feedItem}>
          <Text>{item.text}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
      }}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={text => handleSearch(text)}
        value={searchQuery}
        placeholder="Search"
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={feedData.filter(item => item.text.toLowerCase().includes(searchQuery.toLowerCase()))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
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

export default Feed;

