import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Toggle = () => {
  const [show,setShow] = useState()
  const [text, setText] =useState('show me')
  
  return (
    <View>
      <Text style= {{fontSize:22}}> Show And Hide Component or Toggle</Text>
      <Button title = {text} onPress={()=>{
        setShow(!show),
        setText('Hide Me')
        }}/>
     
      {
        show  ? <User /> :null
      }
    
      
    </View>
  ); 
};
const User = () => {
  return(
    <View>
      <Text style = {{fontSize:20,color:'red'}}>User Components</Text>
    </View>
  );
};


const styles = StyleSheet.create({});
export default Toggle;