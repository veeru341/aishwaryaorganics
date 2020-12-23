import React from "react";
import { View, Text } from "react-native"



export default function ContactUs(){
    return(
        <View style={styles.section}>
            <Text>This is a Cart Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    section : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})