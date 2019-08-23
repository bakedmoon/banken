import React, { Component } from "react";

import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import CountDown from "react-native-countdown-component";
import bg from "./assets/image5.jpeg";
import icon1 from "./assets/characters/cat-icon.png";
import icon2 from "./assets/characters/dog-icon.jpg";
import icon3 from "./assets/characters/hen-icon.jpeg";
import icon4 from "./assets/characters/rabbit-icon.jpg";

export default class App extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <ImageBackground source={bg} style={styles.backgroundImage} />
        <View style={styles.overlay} />
        <View style={{ position: "absolute", top: 0, width: "100%" }}>
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
            <View style={styles.card}>
              <Image source={icon1} style={styles.iconSize} />
            </View>
            <View style={styles.card}>
              <Image source={icon2} style={styles.iconSize} />
            </View>
            <View style={styles.card}>
              <Image source={icon3} style={styles.iconSize} />
            </View>
            <View style={styles.card}>
              <Image source={icon4} style={styles.iconSize} />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.card} />
            <View style={styles.card} />
            <View style={styles.card} />
            <View style={styles.card} />
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
