import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './Input.styles';
const InputBox = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textbox}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        onChangeText={props.changeText}
        value={props.value}
      />
      <TouchableOpacity style={styles.touchable} onPress={props.onPresstoDo}>
        <Text style={styles.touchable_text}> Kaydet </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
