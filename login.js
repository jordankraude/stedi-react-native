import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import {View} from 'react-native';
import { useLinkProps } from "@react-navigation/native";
import { Alert } from "react-native";

export default function UselessTextInput(props) {
  const [phoneNumber1, onChangeText] = React.useState(null);
  const [oneTimePassword1, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phoneNumber1}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
       <Button
      title="Send OTP"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber1, {method: "post"})}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={oneTimePassword1}
        placeholder="One Time Code"
        keyboardType="numeric"
      />
      <Button
      title="Log In"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin', {
        method: "POST", 
        body: JSON.stringify({
          phoneNumber: phoneNumber1, 
          oneTimePassword: oneTimePassword1}),
        })
        .then(() => {
          props.setUserLoggedIn(true)
        })
      }
      />


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});