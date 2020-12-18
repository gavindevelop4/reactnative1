import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = ['Hi ', 'there !'];
  const name = 'Gavin';
  return (
    <View>
      <Text style={styles.title}>Hi</Text>
      <Text style={styles.text}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  title: {
    fontSize: 45
  }
});

export default ComponentsScreen;
