import React from "react";
import { View, Text, TextInput, StyleSheet, Button, Dimensions, Image, TouchableOpacity } from "react-native";

export default function Products({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/all.jpg')} style={styles.logo}
                resizeMode="stretch" />
            </View>
            <View style={styles.medium}>
                <Text style={styles.medium_text}>Categories</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.footer_sub}>
                    <Image source={require('../assets/veg.jpg')} style={styles.logo1}
                    resizeMode="stretch" />
                    <Text style={styles.items}>Vegitables</Text>
                </View>
                <View style={styles.footer_sub}>
                    <Image source={require('../assets/fruit.jpg')} style={styles.logo1}
                    resizeMode="stretch" />
                    <Text style={styles.items}>Fruits</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387",
    },
    logo: {
        width:"100%",
        height:180
    },
    medium: {
        color:"#fff",
        alignItems:"center",
        marginTop: 10
    },
    medium_text: {
        color: "green",
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        backgroundColor:"#f3f3f3",
        width:350
    },
    footer: {
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        marginTop:10
    },
    logo1: {
        width:350,
        height:145,
        marginTop:10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
        
    },
    items: {
        height: 35,
        color: "green",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "#fff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
        
    },
    footer_sub: {
        
    },
    login: {
        width: 300,
        height:50,
        backgroundColor:"#fff",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 10,
        marginLeft: 45
    },
    logintext: {
        color: "green",
        fontSize: 20,
        fontWeight:"bold"
    }
})
