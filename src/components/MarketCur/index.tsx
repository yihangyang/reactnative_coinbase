import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
  Pressable,
} from 'react-native';
import PercentageChange from '../PercentageChange';

import styles from './styles'


export interface marketCurrencyProps {
  marketCurrency: {
    image: string,
    name: string,
    symbol: string,
    valueChange24h: number,
    valueUSD: number,
  }
}

const MarketCurrency = (props: marketCurrencyProps) => {
  const {
    marketCurrency: {
      image,
      name,
      symbol,
      valueChange24h,
      valueUSD,
    },
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
        <PercentageChange value={valueChange24h} />
      </View>
    </Pressable>
  )
}

export default MarketCurrency;