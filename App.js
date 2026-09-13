import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Colors as Clr } from './constants/Colors';
import NewTask from './components/NewTask';
import Task from './components/Task';

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: "1", task: "First example task", checked: false },
    { id: "2", task: "Second example task", checked: false },
  ]);

  const handleSubmit = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, {id: Date.now().toString(), task: newTask}]);
    setNewTask('');
    inputRef.current?.focus();
  }

  const updateTodo = (id, newData) => {
    setTasks(tasks.map(t =>
        t.id === id ? {...t, ...newData} : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <View style={styles.root}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Task Tracker</Text>
      </View>
      <View style={styles.contentView}>
        <NewTask 
          newTask={newTask} 
          setNewTask={setNewTask} 
          onSubmit={handleSubmit}
          clrs={Clr}/>
        <ScrollView 
          style={styles.listView} 
          contentContainerStyle={styles.listViewContent}>
          { tasks.map(todo => (
            <Task 
              key={todo.id} 
              label={todo.task} 
              setLabel={(newTask) => updateTodo(todo.id, {task: newTask})} 
              onDelete={() => deleteTask(todo.id)}
              clrs={Clr}/>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Clr.dark,
    alignItems: 'center',
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Clr.light,
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentView: {
    width: '98%',
    flex: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Clr.middle,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listView: {
    flex: 10,
    alignSelf: 'stretch',
    borderRadius: 10,
    marginLeft: 14,
    marginRight: 14,
  },
  listViewContent: {
    alignItems: 'center',
  },
  newTask: {
    color: Clr.dark,
    fontSize: 16,
  },
  baseView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
