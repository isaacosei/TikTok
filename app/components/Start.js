/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Videos from './Videos';
import Container from './Container';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeRoute = () => <Container><Text>Home</Text></Container>;
const DiscoverRoute = () => <Container><Text>Discover</Text></Container>;
const InboxRoute = () => <Container><Text>Inbox</Text></Container>;
const MeRoute = () => <Container><Text>Me</Text></Container>;

export default class Start extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 2,
			routes: [
				{key: 'home', title: 'Home', icon: 'home'}, //Octicons
				{key: 'discover', title: 'Discover', icon: 'search'}, // Feather
				{key: 'videos', title: '', icon: 'plussquare'}, //AntDesign
				{key: 'inbox', title: 'Inbox', icon: 'message-minus-outline'}, //MaterialCommunityIcons
				{key: 'me', title: 'Me', icon: 'user'}, //AntDesign
			],
		};
	}

	_handleIndexChange = (index) => {
		this.setState({index});
	};

	renderScene = ({route, jumpTo}) => {
		const {props} = this;
		switch (route.key) {
			case 'home':
				return <HomeRoute jumpTo={jumpTo} {...props} />;
			case 'discover':
				return <DiscoverRoute jumpTo={jumpTo} {...props} error={this.state.error}/>;
			case 'videos':
				return <Videos jumpTo={jumpTo} {...props} />;
			case 'inbox':
				return <InboxRoute jumpTo={jumpTo} {...props} />;
			case 'me':
				return <MeRoute jumpTo={jumpTo} {...props} />;
		}
	};

	renderLabel = ({route, focused, color}) => {
		return <Text style={{fontSize: 8, color, textAlign: 'center', fontWeight: focused ? 'bold':'normal' }}>{route.title}</Text>
	};

	renderIcon = ({route, focused, color}) => {
		if (route.key === 'home') {
			return <Octicons name={route.icon} size={22} color={color}/>;
		} else if (route.key === 'discover') {
			return <Feather name={route.icon} size={22} color={color}/>;
		} else if (route.key === 'videos') {
			return <AntDesign name={route.icon} size={22} color={color}/>;
		} else if (route.key === 'inbox') {
			return <MaterialCommunityIcons name={route.icon} size={22} color={color}/>;
		} else if (route.key === 'me') {
			return <AntDesign name={route.icon} size={22} color={color}/>;
		}
	};

	render() {
		return (
			<BottomNavigation
				navigationState={this.state}
				onIndexChange={this._handleIndexChange}
				renderScene={this.renderScene}
				renderIcon={this.renderIcon}
				renderLabel={this.renderLabel}
				labeled={true}
				shifting={false}
				activeColor={'#fff'}
				inactiveColor={'#fff'}
				barStyle={{
					backgroundColor: 'rgba(0, 0, 0, 0)',
					elevation: 0,
					position: 'absolute',
					bottom: 0,
					left: 0,
				}}
			/>

		);
	}
}
