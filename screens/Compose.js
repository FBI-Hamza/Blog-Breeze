// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const Compose = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handlePublish = async () => {
//     if (title.trim() === '' || content.trim() === '') {
//       return;
//     }

//     try {
//       const postsCollection = firestore().collection('blogs');

//       await postsCollection.add({
//         title,
//         content,
//         timestamp: firestore.FieldValue.serverTimestamp(),
//       });

      // setTitle('');
      // setContent('');
//     } catch (error) {
//       console.error('Error adding document: ', error);
//     }
//   };



//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
//       <ScrollView style={{ padding: 10 }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'black', alignSelf: 'center' }}>Compose</Text>
//         <TextInput
//           style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
//           placeholder="Enter Title"
//           value={title}
//           onChangeText={text => setTitle(text)}
//         />
//         <TextInput
//           style={{ height: 200, borderColor: 'black', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
//           multiline
//           placeholder="Write your blog post here..."
//           value={content}
//           onChangeText={text => setContent(text)}
//         />
//         <TouchableOpacity
//           style={{ width: '100%', backgroundColor: 'black', height: 40, borderRadius: 20, justifyContent: 'center' }}
//           onPress={handlePublish}
//         >
//           <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center' }}>Publish</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default Compose;


import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';

const Compose = () => {
  const route = useRoute();
  const { updateMode, title: initialTitle, content: initialContent, itemId } = route.params || {};
  
  const [title, setTitle] = useState(updateMode ? initialTitle : '');
  const [content, setContent] = useState(updateMode ? initialContent : '');
  
  const handlePublish = async () => {
    try {
      if (updateMode) {
        // Update the existing document in Firestore
        await firestore().collection('blogs').doc(itemId).update({
          title: title,
          content: content,
        });
      } else {
        // Add a new document to Firestore
        await firestore().collection('blogs').add({
          title: title,
          content: content,
        });
      }

      setTitle('');
      setContent('');
      } catch (error) {
      console.error('Error publishing:', error);
    }
  };



  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'black', alignSelf: 'center' }}>Compose</Text>
        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Enter Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={{ height: 200, borderColor: 'black', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
          multiline
          placeholder="Write your blog post here..."
          value={content}
          onChangeText={text => setContent(text)}
        />
        <TouchableOpacity
          style={{ width: '100%', backgroundColor: 'black', height: 40, borderRadius: 20, justifyContent: 'center' }}
          onPress={handlePublish}
        >
          <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center' }}>Publish</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Compose;