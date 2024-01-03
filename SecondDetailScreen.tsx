//SecondDetailScreen.tsx
import * as React from "react";
import { View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SecondDetailScreenProps = {
  navigation: NativeStackNavigationProp<any, 'SecondDetail'>;
};

const SecondDetailScreen: React.FC<SecondDetailScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the second Details screen.</Text>
    </View>
  );
}

export default SecondDetailScreen;