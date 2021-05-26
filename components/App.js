import React, {useState} from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import InputBox from './InputBox';
import Task from './Task/Task';

const App = () => {
  const [text, setText] = useState();
  const [toDo, settoDo] = useState([]);

  const changeText = texttoDo => {
    setText(texttoDo);
  };
  const onPresstoDo = () => {
    settoDo([...toDo, text]);
    setText(null);
  };
  const deletedTask = index => {
    let toDoCopy = [...toDo];
    toDoCopy.splice(index, 1);
    settoDo(toDoCopy);
  };
  const renderTask = ({item}) => <Task task={item} deleted={deletedTask} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar : {toDo.length}</Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={toDo}
        renderItem={renderTask}
      />
      <InputBox
        changeText={changeText}
        onPresstoDo={onPresstoDo}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
  title: {
    color: '#FFA500',
    fontSize: 30,
    padding: 10,
  },
});

export default App;
