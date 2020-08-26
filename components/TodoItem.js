import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

const TodoItem = (props) => {
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
		<TouchableOpacity onPress={() => console.log('Todo clicked')}>
			<View style={styles.todoContainer}>
				<View style={styles.infoContainer}>
					<Text style={styles.description}>
						{props.description.length > 30 ? props.description.sclice(0, 30) + '...' : props.description}
					</Text>
					<Text style={styles.addedDate}>{props.date}</Text>
				</View>

				{/* <FloatingAction
				actions={actions}
				actionsPaddingTopBottom={1}
				onPressBackdrop={toggle}
				visible={isToggle}
				onPressMain={toggle}
			/> */}

				<View style={styles.buttons}>
					<Button
						style={styles.detailBtn}
						title="D"
						color="#841584"
						onPress={() => props.navigation.navigate('TodoDetails')}
					/>
					<Button style={styles.editBtn} title="E" color="#841584" />
					<Button style={styles.delBtn} title="-" color="#841584" />
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	todoContainer: {
		// height: 250,
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
	buttons: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	editBtn: {
		minHeight: 50,
		minWidth: 50
	},
	delBtn: {},
	detailBtn: {},
	floatingContainer: {
		flexDirection: 'column'
	}
});

export default TodoItem;
