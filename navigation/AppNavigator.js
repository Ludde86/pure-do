import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutScreen from '../screens/AboutScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import TodoListScreen from '../screens/TodoListScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function stackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="TodoList" component={TodoListScreen} options={{ title: 'WhatTodo' }} />
			<Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
			<Stack.Screen name="AddTodo" component={AddTodoScreen} />
		</Stack.Navigator>
	);
}

function AppNavigator() {
	return (
		<NavigationContainer>
			<Tabs.Navigator>
				<Tabs.Screen name="Home" component={stackNavigator} />
				<Tabs.Screen name="About" component={AboutScreen} />
			</Tabs.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;
