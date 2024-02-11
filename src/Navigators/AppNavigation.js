import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, MovieDetail, SearchMovie} from '../Containers';

const Stack = createNativeStackNavigator();

export default function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}></Stack.Screen>
        <Stack.Screen
          name="MovieDetail"
          options={{
            headerShown: false,
          }}
          component={MovieDetail}></Stack.Screen>
        <Stack.Screen
          name="SearchMovie"
          options={{
            headerShown: false,
          }}
          component={SearchMovie}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
