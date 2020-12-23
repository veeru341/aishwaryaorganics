import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from "./SplashScreen";
import OrdersScreen from "./OrdersScreen";
import Products from "./Products";
import CartScreen from "./CartScreen";

const Tab = createMaterialBottomTabNavigator();
const SplashStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const ProductsStack = createStackNavigator();
const CartStack = createStackNavigator();


const MaintabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={SplashStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={ProductsStackNavigator}
        options={{
          tabBarLabel: 'Categories',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="cart" color={color} size={26} />
          ),
        }}
      />
     </Tab.Navigator>
      
);

export default MaintabScreen;



function SplashStackNavigator({ navigation }) {
  return (
    <SplashStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <SplashStack.Screen name="Home"
        component={SplashScreen} options={{
          headerLeft: () => (
            <Icon.Button name="menu-sharp" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/>
      </SplashStack.Navigator>
  );
}

function OrdersStackNavigator({ navigation }) {
  return (
    <OrdersStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <OrdersStack.Screen name="Orders"
        component={OrdersScreen} options={{
          headerLeft: () => (
            <Icon.Button name="menu-sharp" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/>
      </OrdersStack.Navigator>
  );
}


function ProductsStackNavigator({ navigation }) {
  return (
    <ProductsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <ProductsStack.Screen name="Categories"
        component={Products} options={{
          headerLeft: () => (
            <Icon.Button name="menu-sharp" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/>
      </ProductsStack.Navigator>
  );
}

function CartStackNavigator({ navigation }) {
  return (
    <CartStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <CartStack.Screen name="Categories"
        component={CartScreen} options={{
          headerLeft: () => (
            <Icon.Button name="menu-sharp" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/>
      </CartStack.Navigator>
  );
}
