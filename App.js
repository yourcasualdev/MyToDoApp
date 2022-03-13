import { StyleSheet, Text, View, Alert, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useState, useEffect, React } from 'react';
import Task from './app/components/Task';
import AddTask from './app/components/AddTask';
import AppLoading from './app/components/AppLoading';

export default function App() {
  const [tasks, settasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [reload, setReload] = useState(1)

  useEffect(async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://mytodoappbackend.herokuapp.com/api/todos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "token": 'fake-jwt-token'
        }
      })
      const data = await response.json()
      console.log(data)
      settasks(data)
      setIsLoading(false)
    } catch (error) {
      Alert.alert("Bir hata oluştu")
    }
  }, [reload])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Görevler</Text>
        </View>
        <ScrollView onRefresh contentContainerStyle={{ alignItems: "center", paddingTop: 10 }} style={styles.tasksWrapper}>
          {tasks.map((task, index) => (
            <Task key={index} name={task.name} completed={task.completed} id={task._id} setReload={setReload} reload={reload} />
          ))}
        </ScrollView>
        <AddTask isLoading={isLoading} setIsLoading={setIsLoading} reload={reload} setReload={setReload} />
        {isLoading ? <AppLoading /> : null}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, marginTop: -20 },
  titleWrapper: { backgroundColor: "black", width: "100%", height: 100, alignItems: "center", padding: 10, marginTop: 20 },
  title: { fontSize: 60, color: "white", fontWeight: "100" },
  tasksWrapper: { backgroundColor: "black", width: "100%" }
});
