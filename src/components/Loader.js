import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';  

const Loader = () => {
  const [show,setShow] = useState(false)

  const displayLoader = ()=>{
    setShow(true);
  
    setTimeout(() => {
      setShow(false)
    }, 5000);
  }
  
  return (
    <View style={styles.container}>
      <ActivityIndicator size ={50} color="gold" animating={show}/>
      {
        show ? <ActivityIndicator size = 'large' color = 'red'/> :null
      }
       <Button title = 'show me' onPress={displayLoader} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },
  
});
export default Loader;