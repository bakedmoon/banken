import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
  Button
} from "react-native";
import CountDown from "react-native-countdown-component";
import bg from "./assets/image5.jpeg";
import icon1 from "./assets/characters/cat-icon.png";
import icon2 from "./assets/characters/dog-icon.jpg";
import icon3 from "./assets/characters/hen-icon.jpeg";
import icon4 from "./assets/characters/rabbit-icon.jpg";
export default class App extends Component {
 
constructor() {
  super();
  this.state = {
     arr : [
       {
      "img": require("./assets/characters/cat-icon.png")
    },
    {
      "img": require("./assets/characters/dog-icon.jpg")
    },
    {
    
      "img": require("./assets/characters/hen-icon.jpeg")
    },
    {
    
      "img": require("./assets/characters/rabbit-icon.jpeg")
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
        <ImageBackground source={bg} style={styles.backgroundImage} />
        <View style={styles.overlay} />
        <View
          style={{ position: "absolute", top: 0, width: "100%", marginTop: 40 }}
        >
          <CountDown
            size={20}
            until={1000}
            onFinish={() => alert("Finished")}
            digitStyle={{
              backgroundColor: "#FFF"
            }}
            digitTxtStyle={{ color: "#1CC625" }}
            timeLabelStyle={{ color: "red", fontWeight: "bold" }}
            separatorStyle={{ color: "#1CC625" }}
            timeToShow={["H", "M", "S"]}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />
          <View style={styles.container}>
          {this.state.arr.map(dest => 
           <View style={styles.card}>
             <Image source={dest.img}
                key={dest.destinationId}
                style={{height: 60, width: 60}} 
                resizeMode='contain' />
               <TouchableHighlight  underlayColor="white">
                <Image source={icon1} style={styles.iconSize} />
               </TouchableHighlight>
           </View>
         
          )}
        
          {/* <View style={styles.container}>
            <View style={styles.card}>
              <View>
                <Text style={{ color: "#fff" }}>You Won</Text>
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  Rs. 32
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View>
                <Text style={{ color: "#fff" }}>You Won</Text>
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  Rs. 32
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View>
                <Text style={{ color: "#fff" }}>You Won</Text>
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  Rs. 32
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View>
                <Text style={{ color: "#fff" }}>You Won</Text>
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  Rs. 32
                </Text>
              </View>
            </View>
          </View> */}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            paddingTop: 12,
            paddingBottom: 12,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            flex: 1,
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <View>
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
            >
              32
            </Text>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Total Amount
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderLeftColor: "#fff",
              borderRightColor: "#fff",
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
              paddingLeft: 10,
              paddingRight: 10,
              fontWeight: "bold"
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
            >
              32
            </Text>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Earned Amount
            </Text>
          </View>

          <View>
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
            >
              32
            </Text>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Remaining Amount
            </Text>
          </View>
 </View>
 </View>
 </View>
  )}}

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