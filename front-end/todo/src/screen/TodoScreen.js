import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import NavBar from '../../components/NavBar';

const TodoScreen = () => {
  const [text, setText] = useState("")
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item: text})
  };

  const handlePost = async () => {
    
      const fetchData = await fetch(
      'http://localhost:8000/create', requestOptions)

      const data = await fetchData.json()

      if (data){
        Alert.alert("task created!")
        setText("")
      }
    
  }









  return (
    <SafeAreaView>
      <NavBar/>
      <View style={{ marginVertical: 60, marginHorizontal: 20 }}>
        <Text style={{ paddingVertical: 20, textAlign: "center" }}>TodoScreen</Text>

        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#1e90ff",
            borderRadius: 5,
            paddingVertical: 12,
            paddingVertical: 12,
          }}
          placeholder='Add a task'
          value={text}
          onChangeText={(val) => setText(val)}
        />
        <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 6, paddingVertical: 10, paddingHorizontal: 10, margin: 10 }} onPress={()=> handlePost()}>
          <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 20 }}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})