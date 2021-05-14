import React from 'react';
import { Text,View, StyleSheet } from "react-native";

const ComponentsScreen = () => {

    return(
        <Text style={styles.textStyle}> ComponentsScreen </Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen;