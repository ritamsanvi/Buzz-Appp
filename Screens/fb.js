import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Searchscreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <AppHeader />
        </View>
        <View style={{ flex: 2, alignItems: 'center', marginTop: 100 }}>
          <Text style={{ textAlign: 'center', fontSize: 35 }}>
            {' '}
            FACEBOOK
            <Image
              style={{
                marginTop: 40,
                width: 300,
                height: 100,
                alignSelf: 'center',
              }}
              source={{
                uri:
                  'https://www.logolynx.com/images/logolynx/9e/9ec5e74c6855727f50c5e0b793e21868.jpeg',
              }}
            />
          </Text>
        </View>
      </View>
    );
  }
}
