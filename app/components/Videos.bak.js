/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Container from './Container'; //import Video from 'react-native-video-fullscreen';
import Video from 'react-native-video';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');
const items = [
	{
		'description': 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttps://www.bigbuckbunny.org',
		'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'],
		'subtitle': 'By Blender Foundation',
		'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
		'title': 'Big Buck Bunny',
	},
	{
		'description': 'The first Blender Open Movie from 2006',
		'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'],
		'subtitle': 'By Blender Foundation',
		'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
		'title': 'Elephant Dream',
	},
	{
		'description': 'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
		'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
		'subtitle': 'By Google',
		'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
		'title': 'For Bigger Blazes',
	},
	{
		'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman\'s escapes aren\'t quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.',
		'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
		'subtitle': 'By Google',
		'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
		'title': 'For Bigger Escape',
	},
	{
		'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
		'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'],
		'subtitle': 'By Google',
		'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
		'title': 'For Bigger Fun',
	},
	{
		'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
		'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'],
		'subtitle': 'By Google',
		'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
		'title': 'For Bigger Joyrides',
	},
	{
		'description': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster\'s big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.',
		'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
		'subtitle': 'By Google',
		'thumb': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
		'title': 'For Bigger Meltdowns',
	},
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
];
class Videos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0
		};
		this.players = [];
	}

	render() {
		return (
			<Container style={{backgroundColor: 'red'}}>
				<Carousel
					itemHeight={height}
					sliderHeight={height}
					autoplay={false}
					//autoplayDelay={2}
					//autoplayLoop
					showPagination={false}
					data={items}
					vertical={true}
					firstItem={0}
					loop={false}
					enableSnap={true}
					onChangeIndex={(index, prevIndex) => {
						this.setState({currentIndex: index});
					}}
					renderItem={(item, index) => (
						<Video
							source={{uri: item.sources[0]}}   // Can be a URL or a local file.
							ref={(ref) => {
								this.players[key] = ref;
							}}                             // Store reference
							poster={item.thumb}
							posterResizeMode={'cover'}
							rate={1.0}                     // 0 is paused, 1 is normal.
							volume={1.0}                   // 0 is muted, 1 is normal.
							muted={false}                  // Mutes the audio entirely.
							//paused={false}                 // Pauses playback entirely.
							paused={index !== this.state.currentIndex}
							resizeMode={'cover'}           // Fill the whole screen at aspect ratio.
							repeat={true}                  // Repeat forever.
							//playInBackground={false}       // Audio continues to play when app entering background.
							//playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
							//progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
							//onLoadStart={this.loadStart}   // Callback when video starts to load
							//onLoad={this.setDuration}      // Callback when video loads
							//onProgress={this.setTime}      // Callback every ~250ms with currentTime
							//onEnd={this.onEnd}             // Callback when playback finishes
							//onError={this.videoError}      // Callback when video cannot be loaded
							//onBuffer={this.onBuffer} // Callback when remote video is buffering
							style={styles.backgroundVideo}
						/>
					)}
				/>

			</Container>
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
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
});

export default Videos;
