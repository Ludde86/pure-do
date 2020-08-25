import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import TodoItem from '../components/TodoItem';
import { FloatingAction } from 'react-native-floating-action';

const TodoListScreen = (props) => {
	const actions = [
		{
			text: 'Add',
			name: 'bt_add',
			color: 'green',
			position: 2
		},
		{
			text: 'Clear',
			name: 'bt_clear',
			color: 'red',
			position: 1
		}
	];

	const checkActions = (item) => {
		switch (item) {
			case 'bt_add':
				props.navigation.navigate('AddTodo');
			case 'bt_clear':
				console.log('Clear');
			default:
				return;
		}
	};

	return (
		<View style={styles.listContainer}>
			<ScrollView>
				<TodoItem />
				<TodoItem />
			</ScrollView>
			<FloatingAction
				actions={actions}
				onPressItem={(item) => {
					checkActions(item);
				}}
			/>
			{/* <View style={styles.clearBtn}>
				<Button title="Clear" color="#841584" />
			</View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flex: 1
		// justifyContent: 'space-between'
	},
	clearBtn: {}
});

export default TodoListScreen;
