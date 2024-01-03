//App.tsx
import React, {useState} from "react";
import {SafeAreaView, Text, View, StyleSheet, Image, Button, Alert, TouchableHighlight, TouchableOpacity} from "react-native";
import {MD2Colors, TextInput} from "react-native-paper";

import { NavigationContainer } from '@react-navigation/native';

import Details from "./DetailScreen";
import SecondDetails from "./SecondDetailScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello world!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="SecondDetails" component={SecondDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;