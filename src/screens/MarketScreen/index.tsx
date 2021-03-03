import React, { useState } from 'react';
import {
  View, 
  Text, 
  Image,
  FlatList
} from 'react-native';
import MarketCurrency from '../../components/MarketCur';

import styles from './styles'
const image = require('../../../assets/images/Saly-17.png')
const currency = [{
  id: 1,
  name: 'Virtual Dollars',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'USD',
  valueChange24h: -69,
  valueUSD: 69,
},{
  id: 2,
  name: 'Bitcoin',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'BTC',
  valueChange24h: 619,
  valueUSD: 69,
},{
  id: 3,
  name: 'Etherium',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'ETH',
  valueChange24h: 629,
  valueUSD: 69,
},{
  id: 1,
  name: 'Virtual Dollars',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'USD',
  valueChange24h: 69,
  valueUSD: 69,
},{
  id: 2,
  name: 'Bitcoin',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'BTC',
  valueChange24h: 619,
  valueUSD: 69,
},{
  id: 3,
  name: 'Etherium',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'ETH',
  valueChange24h: 629,
  valueUSD: 69,
},{
  id: 1,
  name: 'Virtual Dollars',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'USD',
  valueChange24h: 69,
  valueUSD: 69,
},{
  id: 2,
  name: 'Bitcoin',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'BTC',
  valueChange24h: 619,
  valueUSD: 69,
},{
  id: 3,
  name: 'Etherium',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'ETH',
  valueChange24h: 629,
  valueUSD: 69,
}]

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={currency}
        renderItem={({item}) => <MarketCurrency marketCurrency={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Market</Text>
            </View>
          </>
        )}
      />
    </View>
  )
}

export default MarketScreen;