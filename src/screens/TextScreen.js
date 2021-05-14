import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
const [name, setName] = useState('');
    return(
        <View >
        <Text>Enter your name: </Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style= {styles.input}
                value={name}
                onChangeText={(newText)=> setName(newText)}
            />
            <Text>My Name is {name}</Text>
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