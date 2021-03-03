import React, { useState } from 'react';
import {
  View, 
  Text,
  Image,
  Pressable,
} from 'react-native';

const image = require('../../../assets/images/Saly-16.png')
import styles from './styles'
const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: '1',
    name: 'yang',
    email: 'yang@outlook.de',
    image: 'https://logosmarken.com/wp-content/uploads/2020/08/Bitcoin-Logo.png',
    netWorth: 12,
  })

  const signOut = () => {
    console.warn('Sign out')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <Image style={styles.userImage} source={{ uri: user.image }} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.netWorth}>$ {user.netWorth}</Text>
        </View>
      </View>
      <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;