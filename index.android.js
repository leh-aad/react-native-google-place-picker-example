
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

export default class PlaceTest extends Component {
  constructor(props) {
    super(props);
    this.state = {  // state to get JSON of the selected place
      location: null, 
    }
  }
  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
                console.log(place);
                this.setState({
                  location: place
                });
    })
    .catch(error => console.log(error.message));  // error  object
  }

  currentPlace(){
    //only show result on console
    RNGooglePlaces.getCurrentPlace()
    .then((results) => {
              console.log(results); 
             
    })
    .catch((error) => console.log(error.message));
  }

  render() {
    return (

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.header}>
             <Text style={{fontSize: 20, fontWeight:'bold'}}>Place Picker</Text>
        </View>

        <View style={styles.container}>
        
          <TouchableOpacity style={styles.button} onPress={() => this.openSearchModal()}>
            <Text style={{fontSize: 18, fontWeight:'bold'}}>
              Pick a Place!
            </Text>
          </TouchableOpacity>

          <View style={styles.location}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>
              Location JSON:{"\n"}
            </Text>
            <Text style={{fontSize: 15}}>
              {JSON.stringify(this.state)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
//Style for some components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    margin: 25
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 250,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: '#d9b3ff'
  },
  header: {
    backgroundColor: '#d9b3ff', 
    justifyContent: 'center',
    alignItems: 'center',  
    height: 55,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: 'relative',
    elevation: 2, 
  }
});


AppRegistry.registerComponent('PlaceTest', () => PlaceTest);
