import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  image: {
    aspectRatio: 1,
    resizeMode: 'contain'
  },

  balanceContainer: {
    width: '100%',
    marginVertical: 20,
  },

  label: {
    fontSize: 18,
    marginTop: 0,
    marginBottom:20,
  },

  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    // textAlign: 'center',
    color: '#707070'
  },

  flatlist: {
    width: '100%',
  },

})

export default styles;