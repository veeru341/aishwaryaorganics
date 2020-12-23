import React from "react";
import { View, Text, StyleSheet, Button, Dimensions, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/Ionicons";


const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image animation="bounceIn" source={require('../assets/logo3.png')} style={styles.logo}
                resizeMode="stretch" />
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.title}>Aishwarya Organics</Text>
                <Text style={styles.text}>SignIn with account</Text>
                <Animatable.View animation="fadeInRight" style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate("Orders")}>
                        <Text style={styles.textSign}>Get Started
                            <Icon name='navigate-next' style={styles.icon} />
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </Animatable.View>
    </View>
    );
};


export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387"
    },
    header: {
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    footer: {
        flex:1.1,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        color: "#05375a",
        fontSize: 30,
        fontWeight: "bold"
    },
    text: {
        color:"gray",
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 20,
    },
    button:{
        alignItems:"flex-end",
        marginTop:30,
    },
    signIn:{
        backgroundColor: "#009387",
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection:"row"
    },
    textSign:{
        color: "white",
        fontWeight: "bold"
    },
    icon: {
        fontSize: 20,
    }
})

