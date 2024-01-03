//DetailScreen.tsx
import * as React from "react";
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailScreenProps = {
    navigation: NativeStackNavigationProp<any, 'Detail'>;
};

const Details: React.FC<DetailScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Details screen.</Text>
      <Button
        title="Go to second Details"
        onPress={() => navigation.navigate('SecondDetails')}
      />
    </View>
  );
}

export default Details;