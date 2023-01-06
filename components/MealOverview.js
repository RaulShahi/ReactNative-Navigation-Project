import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MealOverview({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.overview, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}mins</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-around',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
