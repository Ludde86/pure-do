import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const AddTodoScreen = () => {
	const [ input, setInput ] = useState('');

	return (
		<View style={styles.form}>
			<View style={styles.formGroup}>
				<TextInput style={styles.input} value={input} placeholder="..." />
			</View>
			<View style={styles.buttonContainer}>
				<Button title="Add Todo" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		margin: 20,
		backgroundColor: '#ffffff',
		padding: 20,
		borderRadius: 10
	},
	formGroup: {
		width: '100%'
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 8,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	buttonContainer: {
		marginTop: 20
	}
});

export default AddTodoScreen;
