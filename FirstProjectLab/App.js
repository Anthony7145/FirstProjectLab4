import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <ToDoForm addTask={addTask} />

      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;