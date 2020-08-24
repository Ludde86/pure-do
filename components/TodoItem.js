import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

const TodoItem = () => {
	const actions = [
		{
			text: 'Edit',
			name: 'bt_edit',
			position: 2
		},
		{
			text: 'Delete',
			name: 'bt_delete',
			position: 1
		}
	];

	const [ isToggle, setIsToggle ] = useState(true);

	const toggle = () => {
		if (isToggle === true) {
			setIsToggle(false);
			return false;
		} else {
			setIsToggle(true);
			return true;
		}
	};

	return (
		<View style={styles.todoContainer}>
			<View style={styles.infoContainer}>
				<Text style={styles.description}>Description</Text>
				<Text style={styles.addedDate}>Date</Text>
			</View>

			{/* <FloatingAction
				actions={actions}
				actionsPaddingTopBottom={1}
				onPressBackdrop={toggle}
				visible={isToggle}
				onPressMain={toggle}
			/> */}

			{/*<View style={styles.buttons}>
				<Button title="Edit" color="#841584" />
				<Button title="Delete" color="#841584" />
	</View>*/}
		</View>
	);
};

const styles = StyleSheet.create({
	todoContainer: {
		height: 250,
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
	buttonContainer: { backgroundColor: 'red' },
	button: { backgroundColor: 'red' },
	floatingContainer: {
		flexDirection: 'column'
	}
});

export default TodoItem;
