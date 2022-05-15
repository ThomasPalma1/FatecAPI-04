import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home'
import SettingsScreen from '../pages/Profile/Profile';
import CadastroInfoScreen from '../pages/Home/Cadastro';
import AddTalhoesScreen from '../pages/Talhoes/addTalhoes';
import AddCultivoScreen from '../pages/Colheitas/addCultivo';
import AddColheitaScreen from '../pages/Colheitas/addColheita';
import AddAmostrasScreen from '../pages/Colheitas/addAmostras';
import AddCustosScreen from './Custos/addCustos';
import TalhoesScreen from '../pages/Talhoes/Talhoes';
import DetalhesTalhoesScreen from './Talhoes/detalhesTalhoes';
import RecuperarSenhaScreen from '../pages/Login/RecuperarSenha';
import VerificaScreen from './Login/Verficação';
import NovaSenhaScreen from './Login/NovaSenha'
import AddFazendasScreen from '../pages/Fazendas/addFazendas';
import AddProdutividadeScreen from './Colheitas/addProdutividade';
import LoginScreen from './Login/Login';
import MenuScreen from './Home/Menu';
import CadastroScreen from './Login/Cadastro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapScreen from '../components/map';
import FazendaScreen from './Fazendas/Fazenda';
export default function App() {

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='Login' component={LoginScreen} />
      <HomeStack.Screen name='Cadastro' component={CadastroScreen} />
      <HomeStack.Screen name="Recuperar" component={RecuperarSenhaScreen} />
      <HomeStack.Screen name="Verificacao" component={VerificaScreen} />
      <HomeStack.Screen name="NovaSenha" component={NovaSenhaScreen} />
      <HomeStack.Screen name='Map' component={MapScreen} />
      <HomeStack.Screen name='Menu' component={MenuScreen} />
      <HomeStack.Screen name="Inicio" component={HomeScreen} />
      <HomeStack.Screen name="Fazenda" component={FazendaScreen} />
      <HomeStack.Screen name="addTalhoes" component={AddTalhoesScreen} />
      <HomeStack.Screen name="addFazendas" component={AddFazendasScreen} />
      <HomeStack.Screen name="Talhoes" component={TalhoesScreen} />
      <HomeStack.Screen name="Detalhes" component={DetalhesTalhoesScreen} />
      <HomeStack.Screen name="addAmostra" component={AddAmostrasScreen} />
      <HomeStack.Screen name="addCultivo" component={AddCultivoScreen} />
      <HomeStack.Screen name="addColheita" component={AddColheitaScreen} />
      <HomeStack.Screen name="addCusto" component={AddCustosScreen} />
      <HomeStack.Screen name="CadastroInfo" component={CadastroInfoScreen} />
      <HomeStack.Screen name="addProdutividade" component={AddProdutividadeScreen} />
    </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();


  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>

  );
}
