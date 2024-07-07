import { StyleSheet, Text, View,FlatList} from 'react-native'
import React, { useState } from 'react'

const TodoList = () => {
    const [data,setData] = useState([])
    const getTask = async() => {
        const response = await fetch("");
        const taskData = await response.json();
        setData(taskData)
    }
  return (
    <View>
      <Text>TodoList</Text>
      <FlatList/>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})