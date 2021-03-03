import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
  Pressable,
} from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

import styles from './styles'
const image = require('../../../assets/images/Saly-1.png')
const googleImage = require('../../../assets/images/google-button.png')




const WelcomeScreen = () => {
  const navigation = useNavigation();
  
  const google = () => {
    navigation.navigate('Root')
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Welcome to VCrypto</Text>
      <Text style={styles.header2}>Invest your vitual $100,000 and compete with others</Text>
      <Pressable style={styles.googleContainer} onPress={google}>
        <Image style={styles.googleImage} source={googleImage}/>
      </Pressable>
    </View>

  )
}

export default WelcomeScreen;