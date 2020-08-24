import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import TodoItem from '../components/TodoItem';
import { ScrollView } from 'react-native-gesture-handler';

const TodoListScreen = () => {
	return (
		<View style={styles.listContainer}>
			<ScrollView>
				<TodoItem />
				<TodoItem />
			</ScrollView>

			<View style={styles.clearBtn}>
				<Button title="Clear" color="#841584" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		justifyContent: 'space-between'
	},
	clearBtn: {}
});

export default TodoListScreen;
