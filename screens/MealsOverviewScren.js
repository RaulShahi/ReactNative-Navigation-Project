import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from '../components/MealsList/MealItem';
import MealsList, {renderMealItem} from '../components/MealsList/MealsList';
import {CATEGORIES, MEALS} from '../data/dummy-data';

export default function MealsOverviewScren({route, navigation}) {
  const {categoryId} = route.params;
  const displayedMeals = MEALS.filter(mealItem =>
    mealItem?.categoryIds?.includes(categoryId),
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES?.find(
      category => category.id === categoryId,
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return <MealsList items={displayedMeals} />;
}
