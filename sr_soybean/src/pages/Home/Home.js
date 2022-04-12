import { Text, View, StyleSheet } from 'react-native';
import Fab from '../../components/Fab'
import Map from '../../components/Map'

export default function Home({}) {
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