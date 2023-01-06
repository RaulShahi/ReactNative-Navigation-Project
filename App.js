import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StatusBar, StyleSheet, Text, Button} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScren from './screens/MealsOverviewScren';
import MealDetailScreen from './screens/MealDetailScreen';
import {
  DRAAWERSCREEN,
  FAVORITES,
  MEALDETAILS,
  MEALSCATEGORIES,
  MEALSOVERVIEW,
} from './constants/ScreenNames';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name={MEALSCATEGORIES}
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <FontIcon name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={FAVORITES}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={DRAAWERSCREEN}
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name={DRAAWERSCREEN}
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name={MEALSOVERVIEW} component={MealsOverviewScren} />
          <Stack.Screen
            name={MEALDETAILS}
            component={MealDetailScreen}
            options={{title: 'About the Meal'}}
          />
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
