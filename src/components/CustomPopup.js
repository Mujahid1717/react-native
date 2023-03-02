import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'

const CustomPop = () => {
  const [show,setShow] = useState(false)
  return (
  
    <View style = {styles.container}>
      {
        show?
        <View style={styles.modal}>
        <View style={styles.body}>
        <Text style={styles.bodyText}>Are you sure to close?</Text>
          <TouchableOpacity
          onPress={()=>setShow(false)}
          >
          <Image source={require('./assets/close.png')}/>
          </TouchableOpacity>
          
            {/* <Button  title="close " onPress={()=>setShow(false)}/> */}
        </View>
        
      </View>
      :null
      }
      
      <Button  title = "Dialog Box" onPress={()=>setShow(true)} />
    </View>
    
  )
}

export default CustomPop

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'flex-end'
},
modal:{
  flex:1,
  backgroundColor:'rgba(50,50,50,.5)',
  justifyContent:"center",
  alignItems:'center'
},
body:{
  backgroundColor:'white',
  height:220,
  width:220,
  borderRadius:40,
  padding:40,
  justifyContent:'flex-end',
  alignItems:'center',
  borderBottomColor:'red',
  borderWidth:3
  
},
bodyText:{
  fontSize:18,
  marginBottom:35,
  fontWeight:'bold'
}
})