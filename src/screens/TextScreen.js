import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {

    return(
        <View >
            <TextInput
                style= {styles.input}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1

    }
});
export default TextScreen;