import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
  FlatList
} from 'react-native';
import PortfolioCurrency from '../../components/PortfolioCur';

const image = require('../../../assets/images/Saly-10.png')

const currency = [{
  id: 1,
  name: 'Virtual Dollars',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'USD',
  amount: 69,
  valueUSD: 69,
},{
  id: 2,
  name: 'Bitcoin',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'BTC',
  amount: 619,
  valueUSD: 69,
},{
  id: 3,
  name: 'Etherium',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'ETH',
  amount: 629,
  valueUSD: 69,
},{
  id: 1,
  name: 'Virtual Dollars',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'USD',
  amount: 69,
  valueUSD: 69,
},{
  id: 2,
  name: 'Bitcoin',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'BTC',
  amount: 619,
  valueUSD: 69,
},{
  id: 3,
  name: 'Etherium',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'ETH',
  amount: 629,
  valueUSD: 69,
},{
  id: 1,
  name: 'Virtual Dollars',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'USD',
  amount: 69,
  valueUSD: 69,
},{
  id: 2,
  name: 'Bitcoin',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'BTC',
  amount: 619,
  valueUSD: 69,
},{
  id: 3,
  name: 'Etherium',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  symbol: 'ETH',
  amount: 629,
  valueUSD: 69,
}]

import styles from './styles'
const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={currency}
        renderItem={({item}) => <PortfolioCurrency portfolioCurrency={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio balance</Text>
              <Text style={styles.balance}>$100,000</Text>
            </View>
          </>
        )}
      />
    </View>
  )
}

export default PortfolioScreen;