import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>📱𝓑𝓮𝓮𝓹ing 𝓣𝓪𝓫ber📱</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'violet',
  },
  text:{
    color: 'red',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;