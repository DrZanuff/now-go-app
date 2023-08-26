import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  console.log('DBG: RUNNING THE APP');
  console.warn('DBG THE APP');

  const renderText = (times: number) => {
    const arr = new Array(times).fill('');

    return arr.map((_, index) => <Text>-${index + 1}</Text>);
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Look what I did!!!</Text>
      <ScrollView style={styles.scrollableContainer}>
        <Text>List:</Text>
        {renderText(150)}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  scrollableContainer: {
    width: '80%',
    border: '1px solid red',
  },
});
