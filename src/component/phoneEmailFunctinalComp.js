import React ,{ useState } from 'react'
import { StyleSheet,View,TextInput,Alert,Button } from "react-native";
import PhoneInput from "react-native-phone-input";

export default function phoneEmail(){
    const [phoneandemail, setPhoneandEmail] = useState('')
    const [active, setActive] = useState('email')
    const [keyboardLayout, setkeyboardLayout] = useState('email-address')
    const [focus, setFocus] = useState(false)

    const setValue=(value)=>{
        console.log( value)
        let phoneno = /^[0-9]+$/;
        var chars = /^[A-Za-z]+$/;
        if (value.match(phoneno)) {
            setPhoneandEmail(value)
            setActive('phone')
            setkeyboardLayout('phone-pad')
            setFocus(true)
        }else if(value.match(chars)){
            setPhoneandEmail(value)
            setActive('email')
            setkeyboardLayout('email-address')
            setFocus(true)
        }else{
            setPhoneandEmail(value)
            setActive('email')
            setkeyboardLayout('email-address')
            setFocus(true)
        }
    }
     const showData=()=>{
      Alert.alert(phoneandemail)
    }

    return(
        <View style={styles.container}>
        <View style={styles.inputContainer}>
      {phoneandemail!=='' && active==='phone' && keyboardLayout==='phone-pad' && (
                 <PhoneInput 
                 style={styles.inputs} 
                 initialCountry="in"
                 value={phoneandemail}
                 onChangePhoneNumber={setValue}
                 focus={true}
                 autoFormat={true}
                 ></PhoneInput>
            )}
            {
                active==='email' && keyboardLayout==='email-address' && (
                    <TextInput style={styles.inputs}
                    placeholder="Enter Parents Email/ Number"
                    value={phoneandemail}
                    key={keyboardLayout=='phone-pad' ? 'input-phone' : 'input-default'}
                    keyboardType={keyboardLayout}
                    onChangeText={setValue}
                    autoFocus={focus}
                    autoCompleteType={'email'}
                />
                )
            }
        </View>
        <Button title="Show " onPress={()=>{showData()}}></Button>
  </View>
    )
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