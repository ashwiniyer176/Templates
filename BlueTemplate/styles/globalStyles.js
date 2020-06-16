import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	body: {
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'space-evenly',
		position: 'relative',
		backgroundColor: 'white'
	},
	sectionHeader: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		zIndex: 1,
		backgroundColor: 'red'
	},
	sectionContainer: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		flexDirection: 'row',
		zIndex: 1
	},
	row: {
		fontSize: 18,
		color: 'black',
		alignSelf: 'flex-start',
		flexDirection: 'row',
		marginHorizontal: 10,
		marginTop: 10
	},

	sectionTitle: {
		fontSize: 30,
		color: 'white',
		padding: 20
		// fontFamily: 'nunito-bold'
	},
	footer: {
		color: 'gray',
		fontSize: 12,
		fontWeight: '600',
		textAlign: 'right'
	},
	footerContainer: {
		padding: 4,
		paddingRight: 12
	},
	icons: {
		justifyContent: 'center',
		alignSelf: 'flex-start',
		backgroundColor: 'royalblue',
		height: 50,
		width: 50,
		borderRadius: 50
		// padding: 50
	},
	card: {
		height: 180,
		width: 350,
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderColor: 'transparent',
		elevation: 20,
		alignSelf: 'center',
		zIndex: 2,
		bottom: 80,
		flex: 1,
		marginBottom: -70
	},
	img: {
		height: 100,
		width: 100,
		borderRadius: 50,
		alignSelf: 'center'
	}
});
