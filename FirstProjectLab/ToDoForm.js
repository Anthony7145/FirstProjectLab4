import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  return (
    <form>
      {/* Other form elements */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </form>
  );
}

export default ToDoForm;