import { Text, View } from 'react-native';
import Input from '../../components/Input'


export default function addTalhoesScreen({navigation}) {
  return (
    <View >
      <Text style={{ fontWeight: 'bold' }}>Adicionar talhões</Text>
      <Text>Nome do campo</Text>
      <Input></Input>
      <Text>Longitude</Text>
      <Input></Input>
      <Text>Latitude</Text>
      <Input></Input>     
    </View>
  );
}