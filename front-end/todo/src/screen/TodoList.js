import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'


const TodoList = () => {
    const getTask = async () => {
        const response = await fetch("http://localhost:8000/items");
        const taskData = await response.json();
        setData(taskData)
        console.log(data)

    }
    getTask()

    const [dataList, setData] = useState([])


    return (

        <SafeAreaView>
            <NavBar />

            <View style={{ marginVertical: 30 }}>

                {dataList.map((task) => {
                    return (
                        <View style={{
                            backgroundColor: "#1e90ff",
                            borderRadius: 6,
                            paddingHorizontal: 6,
                            paddingVertical: 20,
                            marginBottom: 10,

                        }} >
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
                                {task.item}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default TodoList

const styles = StyleSheet.create({})