import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const BlogPost = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Image
        style={{ width: '100%', height: 200 }}
        source={{ uri: 'C:\Users\lenovo\Documents\MAD\Final\MyScreens\Image\Img.jpg' }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Post Title Here...</Text>
      <Text style={{ fontSize: 18, color: 'grey' }}>Author</Text>
      <ScrollView>
        <Text style={{ marginTop: 10 }}>
          Labore sunt veniam amet est. Minim nisi dolor ea ad incididunt cillum et ex ut. Dolore exercitation nulla tempor esse aute ullamco occaecat. Nisi id ipsum irure consequat. Cupidatat non deserunt consequat irure ullamco sunt duis eiusmod minim ullamco cillum. Culpa consectetur eiusmod occaecat anim labore exercitation dolor sunt commodo excepteur adipisicing in ex. Laborum aliqua cupidatat et aliqua eu eiusmod. Incididunt laborum esse aute commodo id ad commodo minim sunt. Quis nostrud officia reprehenderit voluptate ipsum dolore eiusmod amet enim culpa. Exercitation ad exercitation labore non esse officia fugiat ex ullamco anim esse. Magna esse aute labore proident quis non eiusmod esse id proident. Est elit aliquip incididunt ad non incididunt proident. Enim tempor ea cillum incididunt laboris ipsum ullamco eiusmod. Mollit consequat veniam eiusmod labore do deserunt exercitation in reprehenderit incididunt ipsum ut. Ut culpa eu incididunt nostrud elit est duis occaecat.

        </Text>
      </ScrollView>
    </View>
  );
};

export default BlogPost;