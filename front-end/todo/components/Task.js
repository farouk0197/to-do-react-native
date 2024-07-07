import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = ({task}) => {
  return (
    <View style={{
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingHorizontal:6,
        paddingVertical: 12,
        marginBottom: 6,

    }}>
      <Text>{task.item}</Text>
      <Text>Task</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({})