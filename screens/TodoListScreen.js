import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Button, FlatList } from 'react-native';
import TodoItem from '../components/TodoItem';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch, useSelector } from 'react-redux';
import * as todoAction from '../redux/actions/todoAction';

const TodoListScreen = (props) => {
	const dispatch = useDispatch();

	// console.log(props);
	const { todos } = useSelector((state) => state.todo);
	console.log(todos);

	useEffect(
		() => {
			dispatch(todoAction.fetchTodos());
		},
		[ dispatch ]
	);

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
					console.log('onPress', item);
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
