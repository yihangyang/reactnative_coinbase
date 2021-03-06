import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginVertical: 10,
  },

  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    aspectRatio: 1,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  place: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 20,
  },

  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  symbol: {
    color: '#6b6b6b'
  },

  right: {
    alignItems: 'flex-end',
  },

  valueUSD: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  amount: {
    color: '#6b6b6b'
  },

})

export default styles;