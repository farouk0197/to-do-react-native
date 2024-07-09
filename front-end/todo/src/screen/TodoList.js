import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView ,Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { IconButton } from 'react-native-paper';

const TodoList = () => {

    const [dataList, setData] = useState([])
  
    const getTask = async () => {
        const response = await fetch("http://localhost:8000/items");
        const taskData = await response.json();
        setData(taskData)
        


    }
    getTask()

    const handleRemoveItem = async (id)=> {
        try {
            const response = await fetch(`http://localhost:8000/del/${id}`, {
              method: 'DELETE',
            });
            if (response.ok) {
              // If the deletion was successful, update the local state
              setData(dataList.filter(item => item._id !== id));
              Alert.alert('Success', 'Item deleted successfully');
            } else {
              Alert.alert('Error', 'Failed to delete the item');
            }
          } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to delete the item');
          }
      
    }
   


    return (

        <SafeAreaView>
            <NavBar />
            <ScrollView>
            <View style={{ marginVertical: 30 }}>

                {dataList.map((task) => {
                    return (
                        <View style={{
                            backgroundColor: "#1e90ff",
                            borderRadius: 6,
                            paddingHorizontal: 6,
                            paddingVertical: 20,
                            marginBottom: 10,
                            marginHorizontal: 8,
                            flexDirection: "row",
                            alignItems: "center",


                        }} 
                        key={task._id}
                        >   
                            
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "800" , flex:1}} >
                                {task.item}
                            </Text>
                            {/* <IconButton icon="pencil" iconColor='white'/> */}
                            <IconButton icon="trash-can" onPress={()=> handleRemoveItem(task._id)} iconColor='white' />
                        </View>
                    )
                })}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TodoList

const styles = StyleSheet.create({})