import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// create validation schema for our form
const formSchema = yup.object({
	description: yup.string().required().min(3).max(50)
});

const AddTodoScreen = () => {
	return (
		<View style={styles.form}>
			<Formik
				initialValues={{
					description: ''
				}}
				validationSchema={formSchema}
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
							<Text style={styles.error}>{props.errors.description}</Text>
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
	},
	error: {
		color: 'red'
	}
});

export default AddTodoScreen;
