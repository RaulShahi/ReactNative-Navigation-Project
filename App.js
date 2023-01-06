import * as React from 'react';
import {View, StatusBar, StyleSheet, Text, Button} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScren from './screens/MealsOverviewScren';
import MealDetailScreen from './screens/MealDetailScreen';
import {
  MEALDETAILS,
  MEALSCATEGORIES,
  MEALSOVERVIEW,
} from './constants/ScreenNames';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={MEALSCATEGORIES}
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name={MEALSCATEGORIES}
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name={MEALSOVERVIEW} component={MealsOverviewScren} />
          <Stack.Screen name={MEALDETAILS} component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
    justifyContent: 'center',
  },
});
