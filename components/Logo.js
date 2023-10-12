import { View, Text, Image } from 'react-native'
import React from 'react'
import logo from '../assets/finallogo.png'
import { logoIcon } from '../screens/AuthScreens/AuthCss'

const Logo = () => {
  return (
    <View>
      
      <Image source={logo} style={logoIcon} />
    </View>
  )
}

export default Logo