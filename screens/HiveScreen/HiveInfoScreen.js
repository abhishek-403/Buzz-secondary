import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { container, text } from './hiveScreenscss'

const HiveInfoScreen = ({hive}) => {
  return (
    <SafeAreaView style={container}>
        <Head  hive={hive}/>
      <Text style={text}>HiveInfoScreen</Text>
    </SafeAreaView>
  )
}

const Head = ({hive}) => (
    <View style={styles.head}>
      <View></View>
      <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
          Create Post
          {/* {hive?.name} */}
        </Text>
      </View>
      <View></View>
    </View>
  );


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      backgroundColor: "rgba(0,0,0,.9)",
    },
    head: {
      backgroundColor: "rgba(0,0,0,1)",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      height: 70,
    },
  });

export default HiveInfoScreen