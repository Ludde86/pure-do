import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, FlatList, ActivityIndicator } from 'react-native';
import TodoItem from '../components/TodoItem';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch, useSelector } from 'react-redux';
import * as todoAction from '../redux/actions/todoAction';

const TodoListScreen = (props) => {
	const [ isLoading, setIsLoading ] = useState(false);

	const dispatch = useDispatch();

	// console.log(props);
	const { todos } = useSelector((state) => state.todo);
	// console.log(todos);

	useEffect(
		() => {
			setIsLoading(true);
			dispatch(todoAction.fetchTodos()).then(() => setIsLoading(false)).catch(() => setIsLoading(false));
		},
		[ dispatch ]
	);

	if (isLoading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (todos.length === 0 && !isLoading) {
		return (
			<View style={styles.centered}>
				<Text>No todo found</Text>
			</View>
		);
	}

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
				return props.navigation.navigate('AddTodo');
			case 'bt_clear':
				return console.log('Check actions, Clear');
			default:
				return;
		}
	};

	return (
		<View style={styles.listContainer}>
			<FlatList
				data={todos}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<TodoItem navigation={props.navigation} description={item.description} date={item.date} />
				)}
			/>

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
	clearBtn: {},
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default TodoListScreen;
