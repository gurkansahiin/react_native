import React from 'react';
import Login from './src/screens/Loginn';
import CoinPage from './src/screens/CoinPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen name='Loginsayfa' component={Login} />
      <Stack.Screen name='Coin' component={CoinPage} />

        </Stack.Navigator>
  
    </NavigationContainer>
  );
}

export default App;
