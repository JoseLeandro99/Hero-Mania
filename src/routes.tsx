import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import theme from './styles/themes';

import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params?.hero.name,
          headerTitleAlign: 'center',
          headerTintColor: theme.textSecondary,
          headerStyle: {
            backgroundColor: theme.bgPrimary,
          }
        })}
      />

    </Stack.Navigator>
  );
}

export default Routes;