import React, { useReducer }  from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  switch(action.type) {
    case 'change_increase':
      return { ...state, counter: state.counter + action.payload };
    case 'change_decrease':
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
}

const CounterScreen = ({ navigation }) => {
  //props have navigate fn ..so we pass the string to it which matches the routes
//  const [counter, setCounter] = useState(0);
const [state, dispatchReducer] = useReducer(reducer, {counter: 0});

const { counter} = state;

  return (
    <View>
    <Button title="Increase" onPress={()=> {
        dispatchReducer({type:'change_increase', payload: 1})
    }}/>
    <Button title="Decrease" onPress={()=> {
        dispatchReducer({type:'change_decrease', payload: -1})
    }}/>
      <Text style={styles.texta}>Current Count: {counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  texta: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
  buttn: {
    display:'flex',
    justifyContent: 'center'
  }
});

export default CounterScreen;
