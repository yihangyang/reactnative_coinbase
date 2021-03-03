import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
  Pressable,
} from 'react-native';

import styles from './styles'

export interface portfolioCurrencyProps {
  portfolioCurrency: {
    image: string,
    name: string,
    symbol: string,
    amount: number,
    valueUSD?: number,
  }
}

const portfolioCurrency = (props: portfolioCurrencyProps) => {
  const {
    portfolioCurrency: {
      image,
      name,
      symbol,
      amount,
      valueUSD,
    }
  } = props;

  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('CoinDetails')}>
      <View style={styles.left}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={{justifyContent: 'space-around'}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.valueUSD}>$ {valueUSD}</Text>
        <Text style={styles.amount}>{symbol} {amount}</Text>
      </View>
    </Pressable>
  )
}

export default portfolioCurrency;