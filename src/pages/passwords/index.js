import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, LogBox } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { PasswordItem } from '../../components/passwords/passwordItem-components';
import { useStorage } from '../../hooks/useStorage';
import { styles } from './styles';

export function Password() {
	const [listPasswords, setListPasswords] = useState([]);
	const focused = useIsFocused();
	const { getItem, removeItem } = useStorage();

	useEffect(() => {
		async function loadPasswords() {
			const passwords = await getItem('@pass');
			console.log('Loaded passwords:', passwords);
			setListPasswords(passwords || []);
			console.log('passwords:', passwords);
		}
		loadPasswords();
	}, [focused]);

	async function handleDeletePassword(item) {
		const passwords = await removeItem('@pass', item);
		setListPasswords(passwords);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Minhas senhas</Text>
			</View>
			<View style={styles.content}>
				<PasswordItem 
					data={listPasswords} 
					removePassword={handleDeletePassword} 
				/>
			</View>
		</View>
	);
}
