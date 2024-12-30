import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



interface ContainedButtonProps {
  title: string; // Button text
  onPress: () => void; // Press handler
}

const ContainedButton = ({ title, onPress}:ContainedButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={() => onPress()}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ContainedButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'

  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width:'100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});