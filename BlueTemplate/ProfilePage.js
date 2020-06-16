import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { styles } from './styles/globalStyles';

export default function App() {
	const [ details, setDetails ] = useState([
		{ det: 'Dashboard', key: '1' },
		{ det: 'Payment History', key: '2' },
		{ det: 'Statics', key: '3' },
		{ det: 'Reward', key: '4' },
		{ det: 'Logout', key: '5' }
	]);

	const pressHandler = (id) => {
		console.log(id);
	};
	return (
		<View style={styles.body}>
			<View style={styles.sectionHeader} backgroundColor="rgb(3, 107, 252)">
				<Text style={styles.sectionTitle}>PROFILE</Text>
			</View>
			<View style={styles.card}>
				<Text style={{ alignSelf: 'flex-end', color: 'blue', marginRight: 20, marginStart: 20 }}>Edit</Text>
				<Image source={require('./img/propic.jpg')} style={styles.img} />
				<Text style={{ fontWeight: 'bold', alignSelf: 'center', padding: 10 }}>Beard Boy</Text>
				<Text style={{ fontWeight: 'bold', alignSelf: 'center', color: 'gray' }}>@BeardBoy</Text>
			</View>
			<View style={{ flex: 2 }}>
				<ScrollView>
					{details.map((detail) => {
						return (
							<TouchableOpacity onPress={() => pressHandler(detail.key)}>
								<View key={detail.key} style={styles.sectionContainer} backgroundColor="white">
									<View style={styles.icons} />
									<Text style={styles.row}>{detail.det}</Text>
								</View>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
		</View>
	);
}
