import { View } from "react-native";
import { Screen } from "react-native-screens";
import Fab from "../../components/Fab";

export default function Home({ navigation }) {
  return (
    <Stack.Navigator>
      <View>
        <Fab />
      </View>
    </Stack.Navigator>
  );
}
