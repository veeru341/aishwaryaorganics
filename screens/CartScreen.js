import React from "react";
import { View, Text, StyleSheet} from "react-native"



export default function CartScreen(){
    return(
        <View style={styles.section}>
            <Text style={styles.sectionText}>Items in your Basket</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    section : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sectionText: {
        fontSize: 18
    }
})