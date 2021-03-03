import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
} from 'react-native';

import styles from './styles'

export interface PercentageChangeProps {
  value: number,
  style?: object
}

const PercentageChange = ({value, style={}}: PercentageChangeProps) => {
  return (
    <View style={styles.container}>
      <Text style={[style, {color: value > 0 ? '#4bdb00' : '#f10000'}]}>
        {value > 0 && '+'} {value} %
      </Text>
    </View>
  )
}

export default PercentageChange;