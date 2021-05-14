import React, {useState} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 30;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red);

    const validateSetColor = (color, change) => {
        //color == 'red/ green / blue
        //change +30 or -30 increments
        switch(color) {
            case 'red':
                red + change> 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'blue':
                blue + change> 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            case 'green':
                green + change> 255 || green + change < 0 ? null : setGreen(green + change);
                return;                   
            default:
                return;
        }
    };

    return (
        <View style={styles.text}>
            <ColorCounter 
             color="Red"
             onIncrease={() => validateSetColor('red', COLOR_INCREMENT)}
             onDecrease={() => validateSetColor('red', -1 * COLOR_INCREMENT)} 
             />
                <ColorCounter
                color="Blue"
                onIncrease={() => validateSetColor('blue',  COLOR_INCREMENT)}
                onDecrease={() => validateSetColor('blue', -1 * COLOR_INCREMENT)} 

            />
            <ColorCounter
                color="Green"
                onIncrease={() => validateSetColor('green', COLOR_INCREMENT)}
                onDecrease={() => validateSetColor('green', -1 *  COLOR_INCREMENT)}  

                />
            <View 
            style={{
                 height: 150, 
                 width: 150, 
                 backgroundColor: `rgb(${red},${green},${blue})`}} 

                 />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        padding:15
    }
});

export default SquareScreen;