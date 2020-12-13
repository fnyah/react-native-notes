import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Note to Self</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "coral",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    }
})

export default Header; 