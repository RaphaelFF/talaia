import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/home/home';
import Home2 from './src/home/home2';
import Home3 from './src/home/home3';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Home2/>
      <Home3/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
