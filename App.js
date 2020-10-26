/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Provider, DefaultTheme} from 'react-native-paper';
import Start from './app/components/Start';

//const theme = {
//	...DefaultTheme,
//};

export default class App extends Component {
	render() {
		return (
			<Provider theme={DefaultTheme}>
				<Start/>
			</Provider>
		);
	}
}
