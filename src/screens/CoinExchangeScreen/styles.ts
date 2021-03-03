import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    // marginVertical: 10,
    marginHorizontal: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#5f5f5f',
  },

  image: {
    height: 250,
    resizeMode: 'contain'
  },

  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#b1b1b1',
    padding: 15,
    flex: 1,
    margin: 20,
  },

  button: {
    backgroundColor: '#2f95dc',
    marginTop: 'auto',
    marginBottom: 50,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }

})

export default styles;