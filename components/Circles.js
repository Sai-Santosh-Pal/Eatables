import React, { Component, useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';



export default function Circle(props) {

  const windowWidth = Dimensions.get('window').width;
  const [loaded] = useFonts({
    'sf-pro-medium': require('../assets/fonts/sf-pro-med.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{margin: 5,height: 150, width: 150, borderWidth: 1, borderColor: '#eee', alignItems: 'center', padding: 10}}>
      <Image source={{uri: props.img}} style={{height: 100, width: 100}} />
      <Text style={{textAlignVertical: 'bottom'}}>{props.text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({});
