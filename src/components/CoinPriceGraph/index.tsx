import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {
  LineChart,
} from "react-native-chart-kit";

import styles from './styles'

export interface CoinPriceGraphProps {
  dataString: string,
}

const CoinPriceChart = ({dataString}: CoinPriceGraphProps) => {
  const data = JSON.parse(dataString)
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ["-7D", "-6D", "-5D", "-4D", "-3D", "-2D", "-1D"],
          datasets: [
            {
              data
            }
          ]
        }}
        width={Dimensions.get("window").width - 30} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withInnerLines={false}
        withOuterLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(25, 66, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}

export default CoinPriceChart;