import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const propTypes = {
	children: PropTypes.node,
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

class Container extends Component {
	static propTypes = propTypes;
	static defaultProps = {
		backgroundColor: 'rgba(0,0,0,0.5)',
	};

	constructor(props) {
		super(props);
	};

	render() {
		return (
			<View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
				{this.props.children}
			</View>
		);
	}
}

export default Container;
