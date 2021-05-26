import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Task = props => {
  const [backgroundColor, setBackgroundColor] = useState('#7DA453');
  const [textStyle, setTextStyle] = useState('none');
  const completed = () => {
    setBackgroundColor('#37474F');
    setTextStyle('line-through');
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}
      onPress={completed}
      onLongPress={props.deleted}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          textDecorationLine: textStyle,
        }}>
        {props.task}
      </Text>
    </TouchableOpacity>
  );
};
export default Task;
