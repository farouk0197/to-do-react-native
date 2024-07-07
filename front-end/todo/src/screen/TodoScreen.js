import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const TodoScreen = () => {
  return (

    <View style={{marginVertical: 60, marginHorizontal: 20 }}>
      <Text style={{paddingVertical:20, textAlign: "center"}}>TodoScreen</Text>

      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 5,
          paddingVertical: 12,
          paddingVertical: 12,
        }}
        placeholder='Add a task'
      />
      <TouchableOpacity style={{backgroundColor: "black", borderRadius: 6, paddingVertical: 10, paddingHorizontal: 10, margin: 10}}>
        <Text style= {{color:"white", textAlign: "center",fontWeight:"bold", fontSize: 20}}>Add Task</Text>
      </TouchableOpacity>
    </View>

  )
}

export default TodoScreen

const styles = StyleSheet.create({})