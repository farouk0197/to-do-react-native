import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';
import TodoList from './src/screen/TodoList';

export default function App() {
  return (
    <SafeAreaView>
      <View >
        <TodoList/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
