import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
        <View>
            <Image 
            style={styles.logo}
            source={require('./logo/sppl.png')}
            />
            <Text style={styles.text}>welcome to our Home page</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('register') }>
        <Text style={styles.text}>click here to Our contact page </Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  logo:{
    height:200,
    width:300,
    alignSelf:'center',
    
  },
  text:{
    color:'black',
    fontSize:20,
    alignSelf:'center',
    marginTop:40,

  }
})