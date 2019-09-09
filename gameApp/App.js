import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Button
} from "react-native";
import FlipCard from "react-native-flip-card";
import CountDown from "react-native-countdown-component";
import bg from "./assets/image5.jpeg";
import axios from "axios";
const imageCharacters = [];
const amount = [145, 276, 44, 55, 86, 27, 88, 89, 27, 95, 124, 32];
export default class App extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      gameResponse: "",
      isAmountVisible: false,
      addClass: false,
      isClickable: true,
      isFlipEnd: false,
      arr: [
        {
          img: require("./assets/characters/cat-icon.png")
        },
        {
          img: require("./assets/characters/dog-icon.jpg")
        },
        {
          img: require("./assets/characters/hen-icon.jpeg")
        },
        {
          img: require("./assets/characters/1.png")
        },
        {
          img: require("./assets/characters/2.png")
        },
        {
          img: require("./assets/characters/3.png")
        },
        {
          img: require("./assets/characters/4.jpeg")
        },
        {
          img: require("./assets/characters/5.png")
        },
        {
          img: require("./assets/characters/6.png")
        },
        {
          img: require("./assets/characters/7.png")
        },
        {
          img: require("./assets/characters/8.jpeg")
        }
      ],
      count: [50]
    };
  }

  shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  // componentDidMount() {
  //   axios.get('http://192.168.0.156:8000/api/v1/restApp/')
  //   .then(response => {
  //     console.log(response.data.gameData);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  handleClick() {
    // let boxClass = ["card"];
    console("hello");
    let shufflearr = this.state.arr;
    this.shuffle(shufflearr);
    console.log(shufflearr);

    if (this.isAmountVisible && this.isFlipEnd) {
      this.setState({ isAmountVisible: false });
      this.setState({ isClickable: true });
      this.setState({ isFlipEnd: true });
    } else {
      this.setState({ isAmountVisible: true });
      this.setState({ isClickable: false });
      this.setState({ isFlipEnd: false });
      // boxClass.pop("flipper");
    }
  }

  render() {
    let Blocks = [];

    for (let i = 0; i <= this.state.count; i++) {
      let item = imageCharacters[i];
      let amt = amount[i];
      Blocks.push(
        <View key={i} style={styles.gameCard}>
          <TouchableHighlight
            underlayColor="white"
            onPress={() => {
              this.handleClick();
            }}
          >
            <FlipCard
              style={styles.card}
              friction={6}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              flip={false}
              clickable={this.state.isClickable}
              onFlipEnd={isFlipEnd => {
                console.log("isFlipEnd", isFlipEnd);
              }}
            >
              <Image
                source={require("./assets/characters/3.png")}
                style={styles.face}
              />

              <View style={styles.back}>
                <Text style={{ color: "#fff", fontSize: 7 }}>You Won</Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 10
                  }}
                >
                  {amt}
                </Text>
              </View>
            </FlipCard>
          </TouchableHighlight>
        </View>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
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
          <View style={styles.container}>{Blocks}</View>
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
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold"
              }}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    transform: [{ perspective: 800 }]
  },
  face: {
    width: 50,
    height: 50,
    borderRadius: 8
  },
  back: {
    flex: 1,
    justifyContent: "center"
  },
  gameCard: {
    width: 50,
    height: 50,
    aspectRatio: 1,
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
    maxHeight: 38,
    maxWidth: 38,
    borderRadius: 8
  }
});
