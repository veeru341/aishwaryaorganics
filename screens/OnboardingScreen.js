import React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

function OnboardingScreen({navigation}){
    function Done({...props}){
        return(
        <TouchableOpacity
            {...props}
            onPress={() => navigation.navigate("Login")}
            style={{marginHorizontal:8}}><Text style={{fontSize:16}}>Done</Text></TouchableOpacity>
        )};
    return(
        <Onboarding
            DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/logo3.png')}  style={styles.company} />,
                    title: 'Aishwarya Organics',
                    subtitle: 'From Aishwarya Group',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onbordingimage6.jpg')} style={styles.products} />,
                    title: 'Natural Foods',
                    subtitle: 'Vegitables, Fruits, Etc',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/veeru.jpeg')} style={styles.self} />,
                    title: 'Gollapalli Veerababu',
                    subtitle: 'Founder Of Aishwarya Organics',
                }
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    self: {
        width:400,
        height:440,
        marginTop:-150
    },
    company: {
        borderTopLeftRadius:50,
        borderBottomRightRadius:50
    },
    products: {
        width:400,
        height:440,
        marginTop:-150 
    }
})
