/** @format */

import React, { useState, useCallback } from 'react';
import {
	View,
	TextInput,
	Button,
	Alert,
	TouchableOpacity,
	Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { attemptSignup } from '../../../state/actions/auth';
import { useNavigateRoute } from '../../../utils/hooks';
import { isLoading } from '../../../state/selectors/features/auth';
import styles from '../login/styled';
import { AppLoader } from '../../../components';
import { staticText } from '../../../utils/staticTexts';

const Signup = ({ navigation }: INavigationRequiredProps) => {
	const [email, setEmail] = useState<isTypeString>(
		__DEV__ ? 'nilson@email.com' : ''
	);
	const [password, setPassword] = useState<isTypeString>(
		__DEV__ ? 'nilson' : ''
	);
	const loader = useSelector<isTypeBoolen>(isLoading);

	const { navigateToSignIn }: isTypeObject = useNavigateRoute({ navigation });

	const dispatch: allAnyTypes = useDispatch();

	const handleSignup = useCallback(() => {
		if (!email || !password) {
			Alert.alert('Error', 'Please fill in all fields.');
			return;
		}

		const requestData = {
			email: email?.toLocaleLowerCase(),
			password: password?.toLocaleLowerCase(),
		};

		dispatch(attemptSignup(requestData, navigation));
	}, [email, password]);

	return (
		<View style={styles.container}>
			<TextInput
				testID='Email'
				placeholder='Email'
				onChangeText={(text) => setEmail(text)}
				value={email}
				keyboardType='email-address'
				autoCapitalize='none'
				style={styles.input}
			/>
			<TextInput
				testID='Password'
				placeholder='Password'
				onChangeText={(text) => setPassword(text)}
				value={password}
				secureTextEntry
				style={styles.input}
			/>
			{loader ? (
				<View testID='activity-loader'>
					<AppLoader isActive />
				</View>
			) : (
				<Button
					testID='signupButton'
					title='Register'
					onPress={handleSignup}
				/>
			)}
			<TouchableOpacity
				testID='already-have-account-text'
				onPress={navigateToSignIn}>
				<Text style={styles.signupText}>
					{' '}
					{staticText.ALREADY_HAVE_ACCOUNT}{' '}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default React.memo(Signup);
