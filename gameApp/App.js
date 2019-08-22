import React, { Component } from 'react';
import { View,  Text, StyleSheet, TouchableHighlight, Image} from 'react-native'

class App extends Component {
 
constructor() {
  super();
  this.state = {
    myarray : [
      {
        id: 1,
        title: 'How to Cook Blue Meth',
        description: 'Lorem ipsum dolor sit amet, turpis at, elit',
        thump: 'thump.jpg',
        hero: '/img/',
        category: 'k1',
        fullname: 'Walter White',
        published: '10.05.2016, 15:30pm',
      },
      {
        id: 2,
        title: 'Passenger',
        description: 'Lorem ipsum dolor sit amet, turpis at, elit',
        thump: 'thump.jpg',
        hero: '/img/',
        category: 'k2',
        fullname: 'Chino Moreno',
        published: '10.05.2016, 15:30pm',
       },
        // ...and more dummy posts(about 7)
       ]
  }
  }

  shuffle(arra1) {
    console.log("THE ARRAY  =>>",arra1)
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

componentWillMount(){
  let myData = this.state.myarray
  this.shuffle(myData)
}

  render() {
  return (
          <View>
            <Text>wwdedke</Text>
          </View>
           
          
  );
  }
  }
  
  export default App;