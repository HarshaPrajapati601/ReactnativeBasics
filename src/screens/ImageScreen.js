import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    return(
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/images/forest.jpg')} />
            <ImageDetail title="Beach"  imageSource={require('../../assets/images/beach.jpg')} />
            <ImageDetail title="Mountains"  imageSource={require('../../assets/images/mountain.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        padding: 20
    }
})

export default ImageScreen;