import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

export default function Btn ({bgColor,txtColor,btnLabel,Press}){
    return(
        <TouchableOpacity 
            onPress={Press}
            style = {{
            backgroundColor: bgColor,
            borderRadius:100, 
            alignItems:'center',
            width:280 ,
            paddingVertical:5,
         
         }}>
            <Text style = {{
                color:txtColor, 
                fontSize:24, 
                fontWeight:'bold'}}>{btnLabel}
            </Text>

        </TouchableOpacity>
    );

};
const styles = StyleSheet.create({});
