import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  image: {
    height: '40%',
    aspectRatio: 1,
  },

  header1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom:30
  },

  header2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#707070'
  },

  googleContainer: {
    width: "70%",
    marginHorizontal: 10,
    alignItems: 'center',

  },

  googleImage: {
    width: '80%',
    resizeMode:'contain'
  }
})

export default styles;