import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

const AddTodoScreen = () => {
	return (
		<View style={styles.form}>
			<Formik
				initialValues={{
					description: ''
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(props) => (
					<View>
						<View style={styles.formGroup}>
							<TextInput
								style={styles.input}
								placeholder="..."
								onChangeText={props.handleChange('description')}
								value={props.values.description}
							/>
						</View>
						<View style={styles.buttonContainer}>
							<Button title="Add Todo" onPress={props.handleSubmit} />
						</View>
					</View>
				)}
			</Formik>
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
