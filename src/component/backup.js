import React, { Component } from "react";
import { StyleSheet,View,TextInput,Alert,Button } from "react-native";
import PhoneInput from "react-native-phone-input";

class PhoneEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneandemail:'',
      active:'email',
      keyboardLayout:'email-address',
      focus:false,
      activeFlag:false
    };
  }
  setValue=(value)=>{
      console.log( 'value',value.length)
      let phoneno = /^[0-9]+$/;
      let chars = /^[A-Za-z]+$/;
      let lengthPhone=/^((?!(0))[0-9]{3,})$/;
      if(value.match(lengthPhone)){
          this.setState({phoneandemail:value,active:'phone',keyboardLayout:'phone-pad',focus:true,activeFlag:true})   
        }else
        {
            if (value.match(phoneno)) {
                this.setState({phoneandemail:value,keyboardLayout:'phone-pad',focus:true})
            }
            else if(value.match(chars)){
                this.setState({phoneandemail:value,active:'email',keyboardLayout:'email-address',focus:true})   
            }
            else{
                this.setState({phoneandemail:value,active:'email',keyboardLayout:'email-address',focus:true})   
            }
            }
        }
//   showData=()=>{
//       Alert.alert(this.state.phoneandemail)
//   }
  render() {
      console.log(this.state)
    return (
      <View style={styles.container}>
            <View style={styles.inputContainer}>
              
          {this.state.phoneandemail!=='' && this.state.active==='phone' && this.state.activeFlag===true && this.state.keyboardLayout==='phone-pad' && (
                     <PhoneInput 
                     style={styles.inputs} 
                     initialCountry="in"
                     value={this.state.phoneandemail}
                     onChangePhoneNumber={this.setValue}
                     focus={true}
                     autoFormat={true}
                     ></PhoneInput>
                )}
                {
                    this.state.active==='email'  && (
                        <TextInput style={styles.inputs}
                        placeholder="Enter Parents Email/ Number"
                        value={this.state.phoneandemail}
                        key={this.state.keyboardLayout=='phone-pad' ? 'input-phone' : 'input-default'}
                        keyboardType={this.state.keyboardLayout}
                        onChangeText={this.setValue}
                        autoFocus={this.state.focus}
                        autoCompleteType={'email'}
                    />
                    )
                }
            </View>
            {/* <Button title="Show " onPress={()=>{this.showData()}}></Button> */}
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
  inputs: {
    height: 45,
    width:250,
    marginLeft:15,
    marginRight: 15,
    borderBottomColor: '#286038',
    flex: 1,
    backgroundColor:'white',
    fontWeight:'bold',
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
  },
});
export default PhoneEmail