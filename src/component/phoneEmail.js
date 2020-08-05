import React, { Component } from "react";
import { StyleSheet,View,TextInput } from "react-native";
import PhoneInput from "react-native-phone-input";

class PhoneEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone:'',
      active:'email',
      keyboardTypee:'default',
      focus:false
    };
  }
  setValue=(value)=>{
      console.log( value)
      let phoneno = /^[0-9]+$/;
      var chars = /^[A-Za-z]+$/;
      if (value.match(phoneno)) {
        this.setState({phone:value,active:'phone',keyboardTypee:'phone-pad',focus:true})
      }else if(value.match(chars)){
        this.setState({phone:value,active:'email',keyboardTypee:'email-address',focus:true})   
      }else{
        this.setState({phone:value,active:'email',keyboardTypee:'email-address',focus:true})   
      }
      
  }
  render() {
      console.log(this.state.phone,this.state.keyboardTypee)
    return (
      <View style={styles.container}>
            <View style={styles.inputContainer}>
              
          {this.state.phone!=='' && this.state.active==='phone' && this.state.keyboardTypee==='phone-pad' && (
                     <PhoneInput style={styles.inputIcon} 
                     initialCountry="in"
                     ></PhoneInput>
                )}
            <TextInput style={styles.inputs}
                placeholder="Enter Phone Number/ Email"
                value={this.state.phone}
                key={this.state.keyboardTypee=='phone-pad' ? 'input-phone' : 'input-default'}
                keyboardType={this.state.keyboardTypee}
                onChangeText={this.setValue}
                autoFocus={this.state.focus}
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
    width: 30,
    height: 30,
    marginLeft:25,
    justifyContent: 'center'
  },
  inputs: {
    height: 45,
    width:250,
    marginLeft: 16,
    marginRight: 15,
    borderBottomColor: '#286038',
    flex: 1,
    backgroundColor:'white',
    fontWeight:'bold',
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    borderTopRightRadius:5,
  },
});
export default PhoneEmail