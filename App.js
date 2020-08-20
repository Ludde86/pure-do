import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
	return (
		<View>
			<AppNavigator />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({});
