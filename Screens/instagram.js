import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Searchscreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          {' '}
          <AppHeader />{' '}
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{ textAlign: 'center', fontSize: 40 }}>
            {' '}
            INSTAGRAM
            <Image
              style={{
                marginTop: 40,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              source={{
                uri:
                  'https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-videoSixteenByNineJumbo1600-v2.jpg',
              }}
            />
          </Text>
        </View>
      </View>
    );
  }
}
