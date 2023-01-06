import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import MealItem from '../components/MealItem';
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

  const renderMealItem = item => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={itemData => renderMealItem(itemData.item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
