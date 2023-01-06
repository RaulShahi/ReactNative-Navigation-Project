import {useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealOverview from '../components/MealOverview';
import {MEALS} from '../data/dummy-data';

export default function MealDetailScreen({route, navigation}) {
  const {mealTitle, mealId} = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log('pressed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="heart"
          onPress={headerButtonPressHandler}
          color="white"
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.mainContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{mealTitle}</Text>
      <MealOverview
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
