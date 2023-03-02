
import { StyleSheet, Text, View } from 'react-native'
import {WebView} from 'react-native-webview';
import React from 'react'

const WebLink = () => {
  return (<WebView source={{uri:"https://reactnative.dev/"}}/>
    
  )
}

export default WebLink

const styles = StyleSheet.create({})