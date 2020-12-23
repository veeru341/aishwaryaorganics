import React from "react";
import { View, Text } from "react-native"



export default function TermsandConditions(){
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

<>

import React from "react";
import { View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrdersScreen from "./screens/OrdersScreen";
import MaintabScreen from "./screens/MaintabScreen";
import Drawercontent from "./screens/Drawercontent";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <Drawercontent {...props} />}>
            <Drawer.Screen name="Maintab" component={MaintabScreen} />
            <Drawer.Screen name="Orders" component={OrdersScreen} />
            <Drawer.Screen name="About Us" component={AboutUs} />
            <Drawer.Screen name="Contact Us" component={ContactUs} />
            <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
            <Drawer.Screen name="Terms and Conditions" component={TermsandConditions} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}


<>

import OrdersScreen from "./OrdersScreen"; 
import CartScreen from "./CartScreen";
import Products from "./Products";
