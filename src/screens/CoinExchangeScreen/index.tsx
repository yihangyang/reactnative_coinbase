import React, { useEffect, useState } from 'react';
import {
  View, 
  Text,
  Image,
  Pressable,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native';

const image = require('../../../assets/images/Saly-31.png')
import styles from './styles'

const CoinExchangeScreen = () => {
  const [coinAmount, setCoinAmount] = useState('');
  const [coinUSDValue, setCoinUSDValue] = useState('');

  const maxUSD =  100000;
  
  const route = useRoute();

  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    // if(amount > 100) {
    //   setCoinAmount('100')
    //   setCoinUSDValue((100 * coinData?.currentPrice).toString())
    //   return;
    // }
    if (!amount && amount !== 0){
      setCoinAmount("")
      setCoinUSDValue("")
      return;
    }
    setCoinUSDValue((amount * coinData?.currentPrice).toString())
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinUSDValue);
    if (!amount && amount !== 0){
      setCoinAmount("")
      setCoinUSDValue("")
      return;
    }
    setCoinAmount((amount / coinData?.currentPrice).toString())
  }, [coinUSDValue]);

  const onPressOrder = () => {
    if(isBuy && parseFloat(coinUSDValue) > maxUSD) {
      Alert.alert('ERROR', `beyond maximum ${maxUSD} `)
    }

    if(!isBuy && parseFloat(coinAmount) > coinData.amount) {
      Alert.alert('ERROR', `Not enough ${coinData.symbol} coins. You have only ${coinData.amount}`)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.title}>
        {isBuy ? 'Buy ' : 'Sell '}
        {coinData?.name}
      </Text>
      <Text style={styles.subtitle}>
        1 {coinData?.symbol}
        { ' = ' }
        ${coinData?.currentPrice}
      </Text>
      <Image style={styles.image} source={image}/>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinAmount}
            onChangeText={setCoinAmount}
          />
          <Text>{coinData?.symbol}</Text>
        </View>
        <Text style={{fontSize: 25}}>=</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinUSDValue}
            onChangeText={setCoinUSDValue}
          /> 
          <Text>USD</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPressOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>  
    </KeyboardAvoidingView>
  )
}

export default CoinExchangeScreen;