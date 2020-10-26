/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Dimensions, StatusBar, StyleSheet, View, ScrollView} from 'react-native';
import Video from 'react-native-video';
import Carousel from 'react-native-snap-carousel';
import {Text, Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SwipeablePanel} from 'rn-swipeable-panel';

const {width, height} = Dimensions.get('window');

class Videos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			items: [
				{
					'description': 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttps://www.bigbuckbunny.org',
					'sources': require('../../videos/butterfly.mp4'),
					'subtitle': 'By Blender Foundation',
					'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
					'title': 'Big Buck Bunny',
				},
				{
					'description': 'The first Blender Open Movie from 2006',
					'sources': require('../../videos/1250100585883406336.mp4'),
					'subtitle': 'By Blender Foundation',
					'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
					'title': 'Elephant Dream',
				},
				{
					'description': 'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
					'sources': require('../../videos/IcantSeeThisAlone.mp4'),
					'subtitle': 'By Google',
					'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
					'title': 'For Bigger Blazes',
				},
				{
					'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman\'s escapes aren\'t quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.',
					'sources': require('../../videos/small.mp4'),
					'subtitle': 'By Google',
					'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
					'title': 'For Bigger Escape',
				},
				//{
				//	'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'],
				//	'subtitle': 'By Google',
				//	'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
				//	'title': 'For Bigger Fun',
				//},
				//{
				//	'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'],
				//	'subtitle': 'By Google',
				//	'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
				//	'title': 'For Bigger Joyrides',
				//},
				//{
				//	'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster\'s big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
				//	'subtitle': 'By Google',
				//	'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
				//	'title': 'For Bigger Meltdowns',
				//},
				//{
				//	'description': 'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'],
				//	'subtitle': 'By Blender Foundation',
				//	'thumb': 'images/Sintel.jpg',
				//	'title': 'Sintel',
				//},
				//{
				//	'description': 'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'],
				//	'subtitle': 'By Garage419',
				//	'thumb': 'images/SubaruOutbackOnStreetAndDirt.jpg',
				//	'title': 'Subaru Outback On Street And Dirt',
				//},
				//{
				//	'description': 'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - https://www.tearsofsteel.org',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'],
				//	'subtitle': 'By Blender Foundation',
				//	'thumb': 'images/TearsOfSteel.jpg',
				//	'title': 'Tears of Steel',
				//},
				//{
				//	'description': 'The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3\'s standard-setting lap time? Watch and see...',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'],
				//	'subtitle': 'By Garage419',
				//	'thumb': 'images/VolkswagenGTIReview.jpg',
				//	'title': 'Volkswagen GTI Review',
				//},
				//{
				//	'description': 'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'],
				//	'subtitle': 'By Garage419',
				//	'thumb': 'images/WeAreGoingOnBullrun.jpg',
				//	'title': 'We Are Going On Bullrun',
				//},
				//{
				//	'description': 'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
				//	'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'],
				//	'subtitle': 'By Garage419',
				//	'thumb': 'images/WhatCarCanYouGetForAGrand.jpg',
				//	'title': 'What care can you get for a grand?',
				//},
			],
			swipeablePanelActive: false,

		};
		this.players = [];
	}

	componentDidMount(): * {
		//this.carousel.snapToItem(0, true, true);
	}

	closePanel = () => {
		this.setState({swipeablePanelActive: false});
	};

	openPanel = () => {
		this.setState({swipeablePanelActive: true});
	};

	renderItem = ({item, index}) => {
		return (
			<>
				<View style={styles.videoDescription}>
					<Text style={styles.videoInfo}>@{item.subtitle}</Text>
					<Text style={[styles.videoInfo, {lineHeight: 15}]}>
						{item.description}
					</Text>
					<Text style={[styles.videoInfo]}><Ionicons name={'ios-musical-notes-sharp'} color={'#ccc'} size={14}/> {item.title}</Text>
				</View>
				<View style={styles.sideBar}>
					<View style={styles.iconsSpaced}><Avatar.Image size={43} source={{uri: 'https://callstack.github.io/react-native-paper/screenshots/avatar-image.png'}}/></View>
					<View style={styles.iconsSpaced}><MaterialCommunityIcons color={'#ccc'} size={43} name={'heart'}/><Text style={[styles.videoInfo, styles.iconInfo]}>200K</Text></View>
					<View style={styles.iconsSpaced}><Ionicons onPress={() => this.openPanel()} color={'#ccc'} size={43} name={'ios-chatbubble-ellipses-sharp'}/><Text style={[styles.videoInfo, styles.iconInfo]}>200K</Text></View>
					<View style={styles.iconsSpaced}><Entypo color={'#ccc'} size={43} name={'forward'}/><Text style={[styles.videoInfo, styles.iconInfo]}>Share</Text></View>
					<View style={styles.iconsSpaced}><Avatar.Image size={43} source={{uri: 'https://callstack.github.io/react-native-paper/screenshots/avatar-image.png'}}/></View>
				</View>
				<Video
					source={item.sources}   // Can be a URL or a local file.
					ref={(ref) => {
						this.players[index] = ref;
					}}                             // Store reference
					poster={item.thumb}
					controls={false}
					posterResizeMode={'cover'}
					rate={1.0}
					volume={1.0}
					muted={false}
					paused={index !== this.carousel.currentIndex}
					resizeMode={'cover'}
					repeat={true}
					style={styles.backgroundVideo}
				/>
				<SwipeablePanel
					fullWidth={true}
					showCloseButton={true}
					closeOnTouchOutside={true}
					openLarge={true}
					isActive={this.state.swipeablePanelActive}
					onClose={() => this.closePanel()}
					onPressCloseButton={() => this.closePanel()}
					closeIconStyle={{backgroundColor: '#000'}}
					closeRootStyle={{backgroundColor: '#fff'}}
				>
					<ScrollView>
						<View style={styles.bottomSheetContainer}>
							<Text>... Loading Comments ...</Text>
						</View>
					</ScrollView>
				</SwipeablePanel>
			</>
		);
	};

	_changeIndex = ({index, prevIndex}) => {
		this.setState({currentIndex: index});
		//alert('thi');
	};

	render() {
		return (
			<>
				<StatusBar barStyle="light-content" translucent backgroundColor={'rgba(0,0,0,0)'}/>
				<Carousel
					layout={'default'}
					ref={(ref) => (this.carousel = ref)}
					data={this.state.items}
					sliderHeight={height}
					itemHeight={height}
					vertical={true}
					enableSnap={true}
					renderItem={this.renderItem}
					enableMomentum={false}
					onSnapToItem={this._changeIndex}
					containerCustomStyle={{
						backgroundColor: 'rgba(0,0,0,1)',
					}}
				/>
			</>
		);
	}
}

let styles = StyleSheet.create({
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width,
		height,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	videoDescription: {
		position: 'absolute',
		bottom: 100,
		left: 15,
		zIndex: 1,
		width: '65%',
	},
	sideBar: {
		position: 'absolute',
		bottom: 100,
		right: 10,
		zIndex: 1,
		elevation: 0,
		//flex: 1,
		//flexDirection: 'column'
	},
	videoInfo: {
		color: '#fff',
		lineHeight: 30,
		fontSize: 10,
		textShadowColor: 'rgba(0, 0, 0, 0.9)',
		textShadowOffset: {width: (-1), height: (1)},
		textShadowRadius: (10),
	},
	iconsSpaced: {
		marginVertical: 10,
	},
	iconInfo: {fontSize: 8, textAlign: 'center', lineHeight: 10},
	bottomSheetContainer: {
		flex: 1,
		padding: 10,
		zIndex: 3,
	},
});

export default Videos;
