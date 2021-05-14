import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        // <View style={styles.ViewStyle}>
        //     <Text style={styles.TextStyle}>Box model</Text>
        // </View>
        <View style={styles.ViewStyle}>
            <Text style={styles.TextStyle}>Child 1</Text>
            <Text style={styles.TextStyle2}>Child 2</Text>
            <Text style={styles.TextStyle3}>Child 3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    ViewStyle: {
        borderWidth: 3,
        flexDirection: 'row',
        // alignItems :'flex-start',
        borderColor: 'black',
        height: 200,
        // justifyContent: 'center'
    },
    TextStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
        // marginVertical: 20,
        // marginHorizontal: 20
    },
    TextStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
        // marginVertical: 20,
        // marginHorizontal: 20
    },
    TextStyle3: {
        borderWidth: 3,
        flex: 1,
        alignSelf: 'center',
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20
    }
})
export default BoxScreen;