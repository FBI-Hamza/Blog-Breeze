import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
      source={require("C:\Users\lenovo\Documents\MAD\Final\MyScreens\icons\add.png")}
      />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    button:{
        position:'absolute',
        bottom: 50,
        alignSelf: 'right',
        backgroundColor: 'black',
        height:60,
        width:60,
        borderRadious:30,
        justifyContent:'center',
        alignItems:'right'
    }
})