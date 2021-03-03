import React, { useState } from 'react';
import {
  View, 
  Text, 
  Image,
  FlatList
} from 'react-native';
import MarketCurrency from '../../components/MarketCur';
import UserRankingItem from '../../components/UserRankingItem';

import styles from './styles'
const image = require('../../../assets/images/Saly-20.png')
const currency = [{
  id: 1,
  name: 'Virtual Dollars',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  netWorth: 69,
},{
  id: 2,
  name: 'Bitcoin',
  image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
  netWorth: 69,
}]

const RankingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={currency}
        renderItem={({item, index}) => <UserRankingItem user={item} place={index + 1} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Rankings</Text>
            </View>
          </>
        )}
      />
    </View>
  )
}

export default RankingsScreen;