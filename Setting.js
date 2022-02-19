import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UselessTextInput from './login.js';


function Setting(UselessTextInput) {
    return(
      <View>
      UselessTextInput
      <Button
      title="Log In"
      onPress={() => twofactorlogin}
    />
      </View>
    )
  }
  
export default Setting;