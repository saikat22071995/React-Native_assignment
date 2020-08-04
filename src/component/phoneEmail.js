import React, { Component } from "react";
import { StyleSheet,View,TextInput } from "react-native";
import PhoneInput from "react-native-phone-input";

class PhoneEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone:'',
      active:'email',
      keyboardTypee:'default'
    };
  }
  setValue=(value)=>{
      console.log( value)
      let phoneno = /^[0-9]+$/;
      if (value.match(phoneno)) {
        this.setState({phone:value,active:'phone',keyboardTypee:'phone-pad'})
      }else{
        this.setState({phone:value,active:'email',keyboardTypee:'default'})   
      }
      
  }
  render() {
      console.log(this.state.phone,this.state.keyboardTypee)
    return (
      <View style={styles.container}>
            <View style={styles.inputContainer}>
              
          {this.state.phone!=='' && this.state.active==='phone' && (
                     <PhoneInput style={styles.inputIcon} 
                     initialCountry="in"
                     onChangePhoneNumber={this.setValue}
                     ></PhoneInput>
                )}
            <TextInput style={styles.inputs}
                placeholder="Enter Phone Number/ Email"
                value={this.state.phone}
                key={this.state.keyboardTypee=='phone-pad' ? 'input-phone' : 'input-default'}
                keyboardType={this.state.keyboardTypee}
                onChangeText={this.setValue}
                autoFocus={true}
            />
            </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  info: {
    // width: 200,
    borderRadius: 5,
    backgroundColor: "#1E90FF",
    padding: 10,
    marginTop: 20,
    width:300
  },
  button: {
    marginTop: 20,
    padding: 10
  },
  inputContainer: {
    borderRadius: 5,
    width: 350,
    height: 100,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#1E90FF',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputIcon: {
    width: 10,
    height: 30,
    marginLeft:25,
    justifyContent: 'center'
  },
  inputs: {
    height: 45,
    width:250,
    marginLeft: 30,
    marginRight: 15,
    borderBottomColor: '#286038',
    flex: 0,
    backgroundColor:'white',
    fontWeight:'bold',
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:0,
    borderTopRightRadius:0,
  },
});

module.exports = PhoneEmail;