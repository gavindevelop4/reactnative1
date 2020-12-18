import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  const greeting = ['Hi ', 'there !'];
  const name = 'Gavin';
  return (
    <View>
      <Text style={styles.title}>Welcome to React Native</Text>
      <View style={styles.button}>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
        style={styles.button}
      />
      </View>
      <View style={styles.button}>
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
        style={styles.button}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  title: {
    fontSize: 45
  },
  button: {
    marginVertical: 10
  }
});

export default HomeScreen;
