import { Text, View } from 'react-native';
import Input from '../../src/input/Input';
import { Styles } from '../../src/input/styles/Styles';

export default function Talhoes() {
  return ( 
    <View >
     <Text style={{ fontWeight: 'bold' }}>Talhoes</Text>
      <Input></Input>
      <Text>Talhoes</Text>
      <Input></Input>
      <Text>Talhoes</Text>
      <Input></Input>
    </View>
  );
}