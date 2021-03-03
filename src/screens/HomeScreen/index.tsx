import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
} from 'react-native';

import styles from './styles'
const image = require('../../../assets/images/Saly-1.png')
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Welcome to VCrypto</Text>
      <Text style={styles.header2}>Invest your vitual $100,000 and compete with others</Text>
    </View>
  )
}

export default HomeScreen;