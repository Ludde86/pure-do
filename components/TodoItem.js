import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const TodoItem = () => {
	return (
		<View style={styles.todoContainer}>
			<View style={styles.infoContainer}>
				<Text style={styles.description}>Description</Text>
				<Text style={styles.addedDate}>Date</Text>
			</View>
			<View style={styles.buttons}>
				<Button title="Edit" color="#841584" />
				<Button title="Delete" color="#841584" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	todoContainer: {
		borderBottomWidth: 2,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	infoContainer: {
		borderBottomWidth: 2,
		margin: 10
	},
	description: {
		fontSize: 22
	},
	addedDate: {
		fontSize: 12
	},
	buttons: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default TodoItem;
