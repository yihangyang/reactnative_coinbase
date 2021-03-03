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
    resizeMode: 'contain',
    width: 200
  },

  userContainer: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%'
  },

  userImage: {
    aspectRatio: 1,
    height: 150,
    width: 150,
    borderRadius: 50,
    resizeMode: 'contain'
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  email: {
    fontSize: 18,
    marginBottom: 5,
  },

  netWorth: {
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