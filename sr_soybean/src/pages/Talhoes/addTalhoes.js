import { Text, View } from 'react-native';
import Input from '../../components/Input'


export default function addTalhoes() {
  return (
    <View >
      <Text style={{ fontWeight: 'bold' }}>Adicionar talhões</Text>
      <Input></Input>
      <Text>Nome do campo</Text>
      <Input></Input>
      <Text>Longitude</Text>
      <Input></Input>
      <Text>Latitude</Text>
    </View>
  );
}