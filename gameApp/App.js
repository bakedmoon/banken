import React, { Component } from "react";

import { View, StyleSheet, Text } from "react-native";

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
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "yellow"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderColor: "red",
              borderWidth: 1
            }}
          >
            <Text style={{ flex: 1, borderColor: "red", borderWidth: 1 }}>
              Left with long sd asdf text
            </Text>
            <Text
              style={{
                flex: 1,
                borderColor: "red",
                borderWidth: 1,
                textAlign: "center"
              }}
            >
              Title
            </Text>
            <Text
              style={{
                flex: 1,
                borderColor: "red",
                borderWidth: 1,
                textAlign: "right"
              }}
            >
              Right
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
        </View>
        <View style={styles.container}>
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "green",
    borderColor: "red",
    borderWidth: 1
  },
  card: {
    flex: 1,
    height: 80,
    backgroundColor: "#000",
    margin: 5,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
  }
});
