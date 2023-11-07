import { View, Text } from 'react-native'
import React from 'react'
import { boxCont, boxDesc, boxTitle } from './hivecss'

const HiveBox = ({hive}) => {
  return (
    <View style={boxCont}>
      <Text style={boxTitle}>{hive.name}</Text>
      <Text style={boxDesc}>{hive.description}</Text>
    </View>
  )
}

export default HiveBox