import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, PickerIOSComponent} from 'react-native';

const NoteListItem = ({ item, deleteItem }) => {
    
    return( 
        <TouchableOpacity style={styles.container} onPress={() => deleteItem(item.id)}>
            <Text>{item.note}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 15,
        margin: 10, 
        borderWidth: 1,
        borderRadius: 100 / 2,
    }
})

export default NoteListItem; 