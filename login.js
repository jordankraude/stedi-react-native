import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [phoneNumber, onChangeText] = React.useState("Useless Text");
  const [oneTimePassword, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={oneTimePassword}
        placeholder="useless placeholder"
        keyboardType="numeric"
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
        url: 'https://dev.stedi.me/twofactorlogin/'+userName,
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