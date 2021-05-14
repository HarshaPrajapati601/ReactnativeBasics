import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //props have navigate fn ..so we pass the string to it which matches the routes

  return (
    <View>
      <Text style={styles.texta}>Welcome Home</Text>
      <Button 
        title="Go to Components Demo"
        onPress={()=> navigation.navigate('Component')}  />
      {/* <TouchableOpacity
          onPress={()=> props.navigation.navigate('Component')}>
          <Text style={styles.buttn}>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button style={{paddingBottom: 5 }}
        title="Go to List Demo"
        onPress={()=> navigation.navigate('List')}  />
        <Button 
        title="Go to Image Demo"
        onPress={()=> navigation.navigate('Image')}  />
           <Button 
        title="Go to Counter Demo"
        onPress={()=> navigation.navigate('Counter')}  />
         <Button 
        title="Go to Color Demo"
        onPress={()=> navigation.navigate('Color')}  />
        <Button 
        title="Go to Square Demo"
        onPress={()=> navigation.navigate('Square')}  />
        <Button 
        title="Go to Text Demo"
        onPress={()=> navigation.navigate('Text')}  />
      <Button 
        title="Go to Box Demo"
        onPress={()=> navigation.navigate('Box')}  /> 
    </View>
  )
};

const styles = StyleSheet.create({
  texta: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20
  },
  buttn: {
    display:'flex',
    justifyContent: 'center'
  }
});

export default HomeScreen;
