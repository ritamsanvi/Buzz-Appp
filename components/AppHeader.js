import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>๐ฑ๐๐ฎ๐ฎ๐นing ๐ฃ๐ช๐ซber๐ฑ</Text>
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