import React from "react";
import { View, Text, StyleSheet} from "react-native"



export default function OrdersScreen(){
    return(
        <View style={styles.section}>
            <Text style={styles.sectionText}>Your Orders are Displayed here</Text>
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