import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

const FormData = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [display,setDisplay]  = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }


  return (
    <View>
      <Text style = {{fontSize:20}}>Handling InputText using STATE</Text>
        <View>
          <TextInput
          style = {styles.inputStyle}
          placeholder='Enter Name'
          value = {name}
          onChangeText={(text)=>setName(text)}
          />
          <TextInput
          style = {styles.inputStyle}
          placeholder='Enter Email'
          value = {email}
          onChangeText={(text)=>setEmail(text)}
          />
          <TextInput
          style = {styles.inputStyle}
          placeholder='Enter Password'
          secureTextEntry = {true}
          value = {password}
          onChangeText={(text)=>setPassword(text)}
          />
          
        </View>
        <View>
            <Button 
            title='show detail'
            color = 'green'
            onPress={()=>setDisplay(true)}
            />
            <Button 
            title='clear detail'
            color = 'blue'
            onPress={resetFormData}
             />
        </View>
          {
            display?
            <View>
              <Text style={{fontSize:20 ,fontWeight:"bold"}}>User Name is :{name}</Text>
              <Text style={{fontSize:20,fontWeight:"bold"}}>User Email is :{email}</Text>
              <Text style={{fontSize:20,fontWeight:"bold"}}>User Password is :{password}</Text>
            </View>
            :null
          }
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle:{
    fontSize:18,
    color:'blue',
    borderWidth:1,
    borderColor:'blue',
    margin:10

  }
});
export default FormData;