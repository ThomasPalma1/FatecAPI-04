import { Text, View, StyleSheet } from 'react-native';
import Fab from '../../components/Fab'

export default function Home() {
  return (
    <View style={styles.container}>
      <Fab/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});