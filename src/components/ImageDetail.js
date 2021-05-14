import React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {

    return(
        <View style={styles.textStyle}>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        padding: 30
    }
})

export default ImageDetail;