import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
  },

  topContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },

  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    aspectRatio: 1,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  symbol: {
    color: '#6b6b6b'
  },

  currentPriceContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },

  indexPriceContainer: {
    flexDirection: 'row',
  },

  row: {
    alignItems: 'center',
    marginHorizontal: 5,
  },

  position: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 15,
  },

  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },

  label: {
    color: '#545454',
    marginVertical: 5,
  },

  currentPrice: {
    fontSize: 24,
  },

  button: {
    flex: 1,
    margin: 5,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    color: 'white',
    fontSize: 18,
    
  }

})

export default styles;