import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/home/home';
import Home2 from './src/home/home2';
import {Home3} from './src/home/home3';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testando texto no react native</Text>
      <Home />
      <Home2/>
      <Home3/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
