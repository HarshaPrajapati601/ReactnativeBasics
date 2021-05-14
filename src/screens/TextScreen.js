import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TextScreen = () => {

    return(
        <View style= {styles.container}>
            <Text> Text screen</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
export default TextScreen;