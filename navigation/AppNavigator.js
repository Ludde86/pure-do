import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutScreen from '../screens/AboutScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import TodoListScreen from '../screens/TodoListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="TodoList" component={TodoListScreen} options={{ title: 'WhatTodo' }} />
			<Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
			<Stack.Screen name="AddTodo" component={AddTodoScreen} />
		</Stack.Navigator>
	);
}

// we need to create about screen as a stack navigator
function AboutStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="About" component={AboutScreen} />
		</Stack.Navigator>
	);
}

function AppNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={stackNavigator} />
				<Tab.Screen name="About" component={AboutStackNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;
