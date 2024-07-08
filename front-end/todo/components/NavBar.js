import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      <Button title="Tasks" onPress={() => navigation.navigate('TodoList')} />
      <Button title="Add Task" onPress={() => navigation.navigate('TodoScreen')} />
    </View>
  );

}



const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
});

export default NavBar
