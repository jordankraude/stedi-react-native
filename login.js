import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import {View} from 'react-native';

const UselessTextInput = () => {
  const [phoneNumber, onChangeText] = React.useState(null);
  const [oneTimePassword, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phoneNumber}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
       <Button
      title="Send OTP"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber, {method: "post"})}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={oneTimePassword}
        placeholder="One Time Code"
        keyboardType="numeric"
      />
      <Button
      title="Log In"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin', {method: "post"})}
      />
      

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function getCode(){
    setusername();
    $.ajax({
        type: 'POST',
        url: 'https://dev.stedi.me/twofactorlogin/'+phoneNumber,
        data: JSON.stringify({userName, password}),
        //success: function(data) {
        //    window.location.href = "/timer.html#"+data;//add the token to the url
        //},
        contentType: "application/text",
        dataType: 'text'
    });

}

function twofactorlogin(){
    setuserpassword();
    setusername();
    $.ajax({
        type: 'POST',
        url: 'https://dev.stedi.me/twofactorlogin' ,
        data: JSON.stringify({phoneNumber: userName, oneTimePassword: password}),
        success: function(data) {
            window.location.href = "/timer.html#"+data;//add the token to the url
        }
    })}

export default UselessTextInput;