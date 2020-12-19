import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import InsetShadow from 'react-native-inset-shadow'


const LoginBackground = () => {
    return (
        <View style={styles.container}>
            <InsetShadow shadowOpacity={1} shadowRadius={20}>
                <ImageBackground style={styles.image} source={require("../assets/library-image.jpg")} >
                
                </ImageBackground>
            </InsetShadow>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        justifyContent: 'center',     
        alignItems: 'center',       
        resizeMode: "cover",
        width: null,
        height: null,
        flex: 1,
      }, 
      textBox: {
        height: 40, 
        width: "80%",
        color: "black",
        borderColor: 'gray', 
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 15
    },
})

export default LoginBackground; 
