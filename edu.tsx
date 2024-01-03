import React, {useState} from "react";
import {SafeAreaView, Text, View, Button, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity} from "react-native";
import{MD2Colors} from "react-native-paper"

export default function App(){
return (
<SafeAreaView style = {style.safe}>
    <View style = {style.view1}>
        <Text style = {style.text}> Get To Know About Your Body, Girl!</Text>
    </View>
    <View style = {style.view1}>
        <TouchableOpacity onPress={()=>(console.log("Pressed"))}>
          <View style={style.button}>
            <Text style={style.text}>How does puberty change your body?</Text>
          </View>
        </TouchableOpacity>
    </View>
    <View style = {style.view1}>
        <TouchableOpacity onPress={()=>(console.log("Pressed"))}>
          <View style={style.button}>
            <Text style={style.text}>What happens to your body during your period?</Text>
          </View>
        </TouchableOpacity>
    </View>
    <View style = {style.view2}>
        <Text style = {style.text}>Now, Let's Talk About Sexual Health!</Text>
    </View>
    <View style = {style.view2}>
        <TouchableOpacity onPress={()=>(console.log("Pressed"))}>
          <View style={style.button}>
            <Text style={style.text}>How to take a good care of your reproductive system</Text>
          </View>
        </TouchableOpacity>
    </View>
</SafeAreaView>


);}

const style = StyleSheet.create({
safe: {
    flex : 1
},
text:{
    fontSize: 30,
    fontWeight : "bold",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginLeft: 10
},
view1: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
},
view2: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",

},
button:{
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: MD2Colors.amber700,
    borderRadius: 10
}

})

