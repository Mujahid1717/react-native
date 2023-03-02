import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const DialogBox = () => {
  const [showModal,setShowModal] = useState(false)
  return (
    <View style = {styles.buttonStyle}>
      <Modal
        transparent = {true}
        visible = {showModal}
        animationType = "slide"

      >
        <View style = {styles.wrapper}>
          <View style={styles.modalView}>
            <Text style = {styles.modalText}>Hello by dial Box</Text>
            <Button title = "close" onPress={()=>setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View>
      <Button title = "show modal" onPress={()=>setShowModal(true)}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonStyle:{
    flex:1,
    justifyContent:'flex-end',
    
  },
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  modalView:{
      backgroundColor:'white',
      padding:40,
      borderRadius:20,
      shadowColor:'black',
      elevation:5,
  },
  modalText:{
    fontSize:20,
    marginBottom:30
  }
});
export default DialogBox;