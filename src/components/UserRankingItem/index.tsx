import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
} from 'react-native';

import styles from './styles'
const image = require('../../../assets/images/Saly-1.png')

export interface UserRankingItemProps {
  user: {
    image: string,
    name: string,
    netWorth: number,
  },
  place: {

  }
}

const UserRankingItem = (props: UserRankingItemProps) => {
  const {
    user: {
      image,
      name,
      netWorth,
    },
    place
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{uri: image}} />
        <View style={{justifyContent: 'space-around'}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{netWorth}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.valueUSD}>$ {netWorth}</Text>
      </View>
    </View>
  )
}

export default UserRankingItem;