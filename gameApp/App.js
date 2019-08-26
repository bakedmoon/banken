import React, { Component } from 'react';
import { View,  Text, StyleSheet, TouchableHighlight, Image, ImageBackground} from 'react-native';
import bg from './assets/image1.jpeg';
export default class App extends Component {
 
constructor() {
  super();
  this.state = {
     arr : [
       {
      "img": require("./assets/image1.jpeg")
    },
    {
      "img": require("./assets/image2.jpeg")
    },
    {
    
      "img": require("./assets/image3.jpeg")
    }
     ]
    
  }
  }

shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
       randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
     return array;
  }
  
componentWillMount(){
  let myData = this.state.arr
  this.shuffle(myData)
  console.log(this.state.arr);
  
}

  render() {
  return (
    
      <View
       style={{
         flex: 1,
         flexDirection: "column",
         justifyContent: "flex-start"
       }}>
       <ImageBackground source={bg} style={styles.backgroundImage}/>
       <View style={styles.overlay} />
       <View style={{ position: "absolute", top: 0, width: "100%" }}>
         
      <View style={styles.container}>
       {this.state.arr.map(dest => 
        <View style={styles.card}>
           <Image source={dest.img}
                key={dest.destinationId}
                style={{height: 60, width: 60}} 
                resizeMode='contain' />
        </View>
       )}

    </View>
      </View>
     
  </View>   
     
  );
  }
  }
 
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row"
    },
    card: {
      flex: 1,
      height: 80,
      borderRadius: 8,
      backgroundColor: "rgba(144, 212 , 245, 0.2)",
      margin: 5,
      shadowOffset: { width: 20, height: 20 },
      shadowColor: "#95b2c3",
      shadowOpacity: 1.0,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    backgroundImage: {
      flex: 1,
      height: "100%",
      resizeMode: "cover" // or 'stretch'
    },
    overlay: {
      flex: 1,
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.5)",
      width: "100%",
      height: "100%"
    },
    iconSize: {
      maxHeight: 64,
      maxWidth: 64,
      borderRadius: 8
    }
   });