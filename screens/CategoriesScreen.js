import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {MEALSOVERVIEW} from '../constants/ScreenNames';
import {CATEGORIES} from '../data/dummy-data';

export default function CategoriesScreen({navigation}) {
  const renderCategoryItem = item => {
    const pressHandler = () => {
      navigation.navigate(MEALSOVERVIEW, {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item?.title}
        color={item?.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={CATEGORIES}
        renderItem={itemList => renderCategoryItem(itemList.item)}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      {/* <Text>hello world</Text> */}
    </View>
  );
}
