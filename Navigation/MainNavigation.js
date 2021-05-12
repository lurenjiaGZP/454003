import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Comment from '../Screens/Comment';


const Stack=createStackNavigator(); 
const Tab=createBottomTabNavigator();

function HomeScreenStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Comment" component={Comment} />
        </Stack.Navigator>
    );

}

function MyBottomTabNavigator(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreenStack} />
        </Tab.Navigator>
    );

}

export{HomeScreenStack,MyBottomTabNavigator}
