import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from "./screens/SplashScreen"; 
import SigninScreen from "./screens/SigninScreen"; 
import SignupScreen from "./screens/SignupScreen";
import Products from "./screens/Products";
import CartScreen from "./screens/CartScreen";
import MaintabScreen from "./screens/MaintabScreen";
import Drawercontent from "./screens/Drawercontent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <Drawercontent {...props} />}>
            <Drawer.Screen name="Main" component={MaintabScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}