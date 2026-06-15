import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
   <Stack.Screen 
  name="Dashboard" 
  component={DashboardScreen}
/>

      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
