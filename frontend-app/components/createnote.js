import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import axios from 'axios'; 

const CreateNote = ({ submitHandler }) => {

    const [text, setText] = useState('')

    const onChangeHandler = (value) => {
        setText(value)
    }

    return( 
        <View style={styles.container}> 
            <TextInput style={styles.textBox} 
            title="new note here..." 
            onChangeText={onChangeHandler}
            /> 
        <Button onPress={() => submitHandler(text)} title="Create note" color="coral"/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }, 
    textBox: {
        height: 40, 
        width: "80%",
        borderColor: 'gray', 
        borderWidth: 1,
    },
})

export default CreateNote; 