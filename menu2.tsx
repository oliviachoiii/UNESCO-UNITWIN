import * as React from "react";
import { SafeAreaView, ImageBackground,TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {MD2Colors} from "react-native-paper";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailScreenProps = {
    navigation: NativeStackNavigationProp<any, 'Detail'>;
};

const Details: React.FC<DetailScreenProps> = ({ navigation }) => {
  return(
  <SafeAreaView style = {style.safe}>
    <ImageBackground style = {style.bg} source = {require("./images/bg.jpg")}>
      <View style = {style.view2}>
        <TouchableOpacity onPress={()=>(console.log("Pressed"))}><View style={style.button}>
            <Text style={style.text}>Education</Text>
          </View></TouchableOpacity>
        </View>
        <View style = {style.view2}>
        <TouchableOpacity onPress={()=>(console.log("Pressed"))}><View style={style.button}>
            <Text style={style.text}>Help Desk</Text>
          </View></TouchableOpacity>
        </View>
    </ImageBackground>
  </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safe: {
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: "center"
  },
  view2: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "space-around",
    justifyItems: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: MD2Colors.amber700,
    borderRadius: 10
  },
  text:{
    color: MD2Colors.white,
    fontSize: 18,
    padding: 35,
    textAlign: "center"
  }

})