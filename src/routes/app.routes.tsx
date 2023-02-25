import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Meal } from '../screens/Meal';
import { Home } from '../screens/Home';
import { Feedback } from '../screens/Feedback';
import { Statistics } from '../screens/Statistics';
import { ManageMeal } from '../screens/ManageMeal';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='statistics'
        component={Statistics}
      />
      <Screen
        name='manage-meal'
        component={ManageMeal}
      />
      <Screen
        name='feedback'
        component={Feedback}
      />
      <Screen
        name='meal'
        component={Meal}
      />
    </Navigator>
  )
}