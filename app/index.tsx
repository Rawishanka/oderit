import { Dimensions, Pressable, StyleSheet, Text, View,Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Link, SplashScreen } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import ContainedButton from '@/components/ContainedButton';



const { width } = Dimensions.get('window');
const scaleFont = (size:number):number => (width / 375) * size;
SplashScreen.preventAutoHideAsync();
const Welcome = () => {

// Calculate font size based on screen width
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.firstContainer}>
        <Text style={[styles.brandText, { fontSize: scaleFont(30) }]}>Order<Text style={{color:'orange'}}>IT</Text></Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('@/assets/images/welcome/welcome.png')}></Image>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <View style={styles.button}>
          <ContainedButton title={'Continue'} onPress={()=>console.log('hwllo')}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  firstContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  brandText:{
    color:'white',
    fontFamily:'OpenSansVariable',
    fontWeight:'900'
  },
  secondContainer:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',
  },
  
  imageContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:'80%',
    height:'80%'
  },
  image:{
    resizeMode:"center",
  },
  thirdContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    flex:1,
    width:'80%'
  },
  safeArea:{
    backgroundColor:"black",
    flex:1
  }
})