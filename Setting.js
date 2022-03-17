import React from "react";
import App from "./App.js"
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UselessTextInput from './login.js';



function Setting(UselessTextInput) {
    return(
      <View>
      <Button
      title={userEmail}
      onPress={() => twofactorlogin}
    />
      </View>
    )
  }
  
export default Setting;