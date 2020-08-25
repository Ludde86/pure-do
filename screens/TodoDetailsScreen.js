import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const TodoDetailsScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.heading}>
					<Text style={styles.description}>Description</Text>
				</View>
				<View style={styles.group}>
					<View style={styles.startDate}>
						<Text style={styles.label}>Start Date: </Text>
						<Text style={styles.value}>Start Date</Text>
					</View>
				</View>
				<View style={styles.group}>
					<View style={styles.endDate}>
						<Text style={styles.label}>End Date: </Text>
						<Text style={styles.value}>End Date</Text>
					</View>
				</View>
				<View style={styles.group}>
					<View style={styles.createdBy}>
						<Text style={styles.label}>Created By: </Text>
						<Text style={styles.value}>User</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 20
	},
	group: {
		marginHorizontal: 20,
		marginVertical: 10
	},
	heading: {
		marginHorizontal: 20,
		marginBottom: 10
	},
	description: {
		fontSize: 24
	},
	startDate: {},
	endDate: {},
	createdBy: {},
	label: {
		fontSize: 18
	},
	value: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default TodoDetailsScreen;
