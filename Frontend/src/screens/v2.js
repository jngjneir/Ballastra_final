// // // // import React, { useState } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   Dimensions,
// // // //   TouchableOpacity,
// // // //   Image,
// // // //   ScrollView,
// // // // } from 'react-native';
// // // // import { LinearGradient } from 'expo-linear-gradient';

// // // // const { width, height } = Dimensions.get('window');

// // // // const OnboardingScreen = ({ navigation }) => {
// // // //   const [currentSlide, setCurrentSlide] = useState(0);

// // // //   const handleNext = () => {
// // // //     // Navigate to next screen or slide
// // // //     console.log('Next pressed');
// // // //     // navigation.navigate('NextScreen');
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#0a0e1a" />

// // // //       {/* Grid Background Pattern */}
// // // //       <View style={styles.gridPattern} />

// // // //       {/* Status Bar */}
// // // //       <View style={styles.statusBar}>
// // // //         <Text style={styles.time}>9:41</Text>
// // // //         <View style={styles.statusIcons}>
// // // //           {/* Signal, WiFi, Battery icons would go here */}
// // // //           <View style={styles.iconPlaceholder} />
// // // //         </View>
// // // //       </View>

// // // //       {/* Welcome Badge */}
// // // //       <View style={styles.welcomeBadgeContainer}>
// // // //         <View style={styles.welcomeBadge}>
// // // //           <Text style={styles.welcomeText}>Welcome To Ballstra</Text>
// // // //         </View>
// // // //       </View>

// // // //       <ScrollView 
// // // //         contentContainerStyle={styles.scrollContent}
// // // //         showsVerticalScrollIndicator={false}
// // // //       >
// // // //         {/* Phone Mockup Section */}
// // // //         <View style={styles.mockupContainer}>
// // // //           {/* Left Side Image */}
// // // //           <View style={[styles.sideImage, styles.leftImage]}>
// // // //             <View style={styles.sideImageGradient} />
// // // //           </View>

// // // //           {/* Center Phone Card */}
// // // //           <View style={styles.centerCard}>
// // // //             <LinearGradient
// // // //               colors={['#FF6B35', '#F7B731', '#5F27CD', '#00D2FF']}
// // // //               start={{ x: 0, y: 0 }}
// // // //               end={{ x: 1, y: 1 }}
// // // //               style={styles.cardGradient}
// // // //             >
// // // //               {/* Image Placeholder - Replace with your actual image */}
// // // //               <View style={styles.imageContainer}>
// // // //                 {/* You can add your actual image here */}
// // // //                 <View style={styles.imagePlaceholder} />
// // // //               </View>

// // // //               {/* Icon Row */}
// // // //               <View style={styles.iconRow}>
// // // //                 <View style={[styles.iconCircle, { backgroundColor: '#FFC107' }]}>
// // // //                   <Text style={styles.emoji}>😊</Text>
// // // //                 </View>
// // // //                 <View style={[styles.iconCircle, { backgroundColor: '#E91E63' }]}>
// // // //                   <Text style={styles.emoji}>💬</Text>
// // // //                 </View>
// // // //                 <View style={[styles.iconCircle, { backgroundColor: '#00BCD4' }]}>
// // // //                   <Text style={styles.emoji}>👤</Text>
// // // //                 </View>
// // // //               </View>

// // // //               {/* White Card */}
// // // //               <View style={styles.whiteCard}>
// // // //                 <Text style={styles.cardTitle}>Chat</Text>
// // // //                 <Text style={styles.cardDescription}>
// // // //                   Smarter chats with text, voice, and video by Ballstra AI.
// // // //                 </Text>
// // // //               </View>
// // // //             </LinearGradient>
// // // //           </View>

// // // //           {/* Right Side Image */}
// // // //           <View style={[styles.sideImage, styles.rightImage]}>
// // // //             <View style={styles.sideImageGradient} />
// // // //           </View>
// // // //         </View>

// // // //         {/* Bottom Content */}
// // // //         <View style={styles.bottomContent}>
// // // //           {/* Chat Icon and Title */}
// // // //           <View style={styles.titleRow}>
// // // //             <View style={styles.chatIconContainer}>
// // // //               <Text style={styles.chatIcon}>💬</Text>
// // // //             </View>
// // // //             <Text style={styles.mainTitle}>Chat</Text>
// // // //           </View>

// // // //           {/* Description */}
// // // //           <Text style={styles.description}>
// // // //             Converse seamlessly with{' '}
// // // //             <Text style={styles.highlight}>friends and teams</Text>
// // // //             {'\n'}through text, voice, and video{' '}
// // // //             <Text style={styles.highlight}>powered by Ballstra AI</Text>
// // // //             {'\n'}for smarter, faster conversations.
// // // //           </Text>

// // // //           {/* Next Button */}
// // // //           <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
// // // //             <Text style={styles.nextButtonText}>Next</Text>
// // // //             <Text style={styles.arrow}>→</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </ScrollView>

// // // //       {/* Home Indicator */}
// // // //       <View style={styles.homeIndicator} />
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#0a0e1a',
// // // //   },
// // // //   gridPattern: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     opacity: 0.15,
// // // //     // Grid pattern would need a custom implementation or library
// // // //   },
// // // //   statusBar: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: 20,
// // // //     paddingTop: 12,
// // // //     paddingBottom: 8,
// // // //   },
// // // //   time: {
// // // //     color: '#fff',
// // // //     fontSize: 15,
// // // //     fontWeight: '600',
// // // //   },
// // // //   statusIcons: {
// // // //     flexDirection: 'row',
// // // //     gap: 6,
// // // //   },
// // // //   iconPlaceholder: {
// // // //     width: 60,
// // // //     height: 12,
// // // //   },
// // // //   welcomeBadgeContainer: {
// // // //     alignItems: 'center',
// // // //     marginTop: 16,
// // // //     marginBottom: 20,
// // // //   },
// // // //   welcomeBadge: {
// // // //     paddingHorizontal: 24,
// // // //     paddingVertical: 10,
// // // //     borderWidth: 2,
// // // //     borderColor: '#fff',
// // // //     borderRadius: 30,
// // // //   },
// // // //   welcomeText: {
// // // //     color: '#fff',
// // // //     fontSize: 14,
// // // //     fontWeight: '300',
// // // //     letterSpacing: 0.5,
// // // //   },
// // // //   scrollContent: {
// // // //     alignItems: 'center',
// // // //     paddingBottom: 30,
// // // //   },
// // // //   mockupContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     marginTop: 20,
// // // //     marginBottom: 30,
// // // //     height: 420,
// // // //   },
// // // //   sideImage: {
// // // //     width: 60,
// // // //     height: 280,
// // // //     borderRadius: 12,
// // // //     overflow: 'hidden',
// // // //     opacity: 0.3,
// // // //   },
// // // //   leftImage: {
// // // //     marginRight: -20,
// // // //   },
// // // //   rightImage: {
// // // //     marginLeft: -20,
// // // //   },
// // // //   sideImageGradient: {
// // // //     flex: 1,
// // // //     backgroundColor: '#4a5568',
// // // //   },
// // // //   centerCard: {
// // // //     width: 280,
// // // //     height: 400,
// // // //     borderRadius: 24,
// // // //     overflow: 'hidden',
// // // //     elevation: 20,
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 10 },
// // // //     shadowOpacity: 0.5,
// // // //     shadowRadius: 20,
// // // //     zIndex: 10,
// // // //   },
// // // //   cardGradient: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     padding: 20,
// // // //   },
// // // //   imageContainer: {
// // // //     flex: 1,
// // // //     width: '100%',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   imagePlaceholder: {
// // // //     width: '100%',
// // // //     height: '60%',
// // // //     backgroundColor: 'rgba(255,255,255,0.1)',
// // // //     borderRadius: 12,
// // // //   },
// // // //   iconRow: {
// // // //     flexDirection: 'row',
// // // //     gap: 12,
// // // //     marginBottom: 16,
// // // //   },
// // // //   iconCircle: {
// // // //     width: 48,
// // // //     height: 48,
// // // //     borderRadius: 24,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     elevation: 8,
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 4 },
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 8,
// // // //   },
// // // //   emoji: {
// // // //     fontSize: 24,
// // // //   },
// // // //   whiteCard: {
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.95)',
// // // //     borderRadius: 20,
// // // //     padding: 20,
// // // //     width: '90%',
// // // //     alignItems: 'center',
// // // //     elevation: 10,
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 5 },
// // // //     shadowOpacity: 0.2,
// // // //     shadowRadius: 10,
// // // //   },
// // // //   cardTitle: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     color: '#1a202c',
// // // //     marginBottom: 8,
// // // //   },
// // // //   cardDescription: {
// // // //     fontSize: 13,
// // // //     color: '#4a5568',
// // // //     textAlign: 'center',
// // // //     lineHeight: 20,
// // // //   },
// // // //   bottomContent: {
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: 30,
// // // //     maxWidth: 400,
// // // //   },
// // // //   titleRow: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: 12,
// // // //     gap: 8,
// // // //   },
// // // //   chatIconContainer: {
// // // //     width: 24,
// // // //     height: 24,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   chatIcon: {
// // // //     fontSize: 20,
// // // //   },
// // // //   mainTitle: {
// // // //     fontSize: 20,
// // // //     fontWeight: '600',
// // // //     color: '#fff',
// // // //   },
// // // //   description: {
// // // //     fontSize: 14,
// // // //     color: '#a0aec0',
// // // //     textAlign: 'center',
// // // //     lineHeight: 22,
// // // //     marginBottom: 30,
// // // //   },
// // // //   highlight: {
// // // //     color: '#fff',
// // // //     fontWeight: '500',
// // // //   },
// // // //   nextButton: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: 32,
// // // //     paddingVertical: 14,
// // // //     borderWidth: 2,
// // // //     borderColor: '#3b82f6',
// // // //     borderRadius: 30,
// // // //     gap: 8,
// // // //   },
// // // //   nextButtonText: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: '500',
// // // //   },
// // // //   arrow: {
// // // //     color: '#fff',
// // // //     fontSize: 18,
// // // //   },
// // // //   homeIndicator: {
// // // //     width: 134,
// // // //     height: 5,
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.3)',
// // // //     borderRadius: 100,
// // // //     alignSelf: 'center',
// // // //     marginBottom: 10,
// // // //   },
// // // // });

// // // // export default OnboardingScreen;

// // // // /* 
// // // // INSTALLATION INSTRUCTIONS:

// // // // 1. Install required dependency:
// // // //    npm install expo-linear-gradient
// // // //    or
// // // //    npx expo install expo-linear-gradient

// // // // 2. For plain React Native (without Expo):
// // // //    npm install react-native-linear-gradient
// // // //    Then link it: npx react-native link react-native-linear-gradient

// // // // 3. Import and use in your App.js or navigation:
// // // //    import OnboardingScreen from './OnboardingScreen';

// // // // 4. Add your actual images:
// // // //    - Replace imagePlaceholder with actual Image component
// // // //    - Example: <Image source={require('./assets/chat-image.jpg')} style={styles.actualImage} />

// // // // 5. For grid pattern background, consider using:
// // // //    - react-native-svg for custom patterns
// // // //    - Or a pre-made grid pattern image as background

// // // // USAGE:
// // // // <OnboardingScreen navigation={navigation} />
// // // // */



// // // // src/screens/v2.js
// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   StatusBar,
// // //   Dimensions,
// // //   TouchableOpacity,
// // //   Image,
// // //   ImageBackground,
// // //   ScrollView,
// // // } from 'react-native';
// // // import { LinearGradient } from 'expo-linear-gradient';

// // // const { width, height } = Dimensions.get('window');

// // // // Online image (Option 2 from the provided list)
// // // const IMAGE_URL = 'https://i.ibb.co/GM5x1H1/people-blur-mockup.png';

// // // const OnboardingScreenExact = ({ navigation }) => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   const handleNext = () => {
// // //     // navigation.navigate('NextScreen');
// // //     console.log('Next pressed');
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#0a0e1a" />

// // //       {/* Background grid/image */}
// // //       <Image
// // //         source={{ uri: IMAGE_URL }}
// // //         style={styles.gridBackground}
// // //         resizeMode="cover"
// // //       />

// // //       {/* Top status area */}
// // //       <View style={styles.statusBar}>
// // //         <Text style={styles.time}>9:41</Text>
// // //         <View style={styles.statusIcons}>
// // //           <View style={styles.iconPlaceholder} />
// // //         </View>
// // //       </View>

// // //       {/* Welcome badge */}
// // //       <View style={styles.welcomeBadgeContainer}>
// // //         <View style={styles.welcomeBadge}>
// // //           <Text style={styles.welcomeText}>Welcome To Ballastra</Text>
// // //         </View>
// // //       </View>

// // //       <ScrollView
// // //         contentContainerStyle={styles.scrollContent}
// // //         showsVerticalScrollIndicator={false}
// // //       >
// // //         {/* Phone mockup row */}
// // //         <View style={styles.mockupContainer}>
// // //           {/* Left side blurred image */}
// // //           <View style={[styles.sideImage, styles.leftImage]}>
// // //             <Image
// // //               source={{ uri: IMAGE_URL }}
// // //               style={styles.sideImageInner}
// // //               resizeMode="cover"
// // //             />
// // //             <View style={styles.sideOverlay} />
// // //           </View>

// // //           {/* Center card using remote image */}
// // //           <View style={styles.centerCardWrapper}>
// // //             <ImageBackground
// // //               source={{ uri: IMAGE_URL }}
// // //               style={styles.centerCard}
// // //               imageStyle={styles.centerCardImage}
// // //               resizeMode="cover"
// // //             >
// // //               <LinearGradient
// // //                 colors={['rgba(255,107,53,0.12)', 'transparent', 'rgba(0,210,255,0.08)']}
// // //                 start={{ x: 0, y: 0 }}
// // //                 end={{ x: 1, y: 1 }}
// // //                 style={styles.gradientOverlay}
// // //               />

// // //               <View style={styles.activeBadge}>
// // //                 <View style={styles.activeDot} />
// // //                 <Text style={styles.activeText}>Active</Text>
// // //               </View>

// // //               <View style={styles.avatarRow}>
// // //                 <View style={[styles.smallCircle, { backgroundColor: '#FFD8A8' }]}>
// // //                   <Text style={styles.smallEmoji}>😊</Text>
// // //                 </View>
// // //                 <View style={[styles.smallCircle, { backgroundColor: '#D8B4FE' }]}>
// // //                   <Text style={styles.smallEmoji}>🗣️</Text>
// // //                 </View>
// // //                 <View style={[styles.smallCircle, { backgroundColor: '#A7F3D0' }]}>
// // //                   <Text style={styles.smallEmoji}>🎥</Text>
// // //                 </View>
// // //                 <View style={[styles.smallCircle, { backgroundColor: '#FBCFE8' }]}>
// // //                   <Text style={styles.smallEmoji}>👥</Text>
// // //                 </View>
// // //               </View>

// // //               <View style={styles.whiteCard}>
// // //                 <Text style={styles.cardTitle}>Chat</Text>
// // //                 <Text style={styles.cardDescription}>
// // //                   Smarter chats with text, voice, and video by Ballastra AI.
// // //                 </Text>
// // //               </View>
// // //             </ImageBackground>
// // //           </View>

// // //           {/* Right side blurred image */}
// // //           <View style={[styles.sideImage, styles.rightImage]}>
// // //             <Image
// // //               source={{ uri: IMAGE_URL }}
// // //               style={styles.sideImageInner}
// // //               resizeMode="cover"
// // //             />
// // //             <View style={styles.sideOverlay} />
// // //           </View>
// // //         </View>

// // //         {/* Bottom content */}
// // //         <View style={styles.bottomContent}>
// // //           <View style={styles.titleRow}>
// // //             <View style={styles.chatIconContainer}>
// // //               <Text style={styles.chatIcon}>💬</Text>
// // //             </View>
// // //             <Text style={styles.mainTitle}>Chat</Text>
// // //           </View>

// // //           <Text style={styles.description}>
// // //             Converse seamlessly with{' '}
// // //             <Text style={styles.highlight}>friends and teams</Text>
// // //             {'\n'}through text, voice, and video{' '}
// // //             <Text style={styles.highlight}>powered by Ballstra AI</Text>
// // //             {'\n'}for smarter, faster conversations.
// // //           </Text>

// // //           <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
// // //             <Text style={styles.nextButtonText}>Next</Text>
// // //             <Text style={styles.arrow}>→</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </ScrollView>

// // //       {/* Home indicator */}
// // //       <View style={styles.homeIndicator} />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: '#0a0e1a' },
// // //   gridBackground: {
// // //     position: 'absolute',
// // //     width,
// // //     height,
// // //     opacity: 0.12,
// // //     top: 0,
// // //     left: 0,
// // //   },
// // //   statusBar: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 20,
// // //     paddingTop: 12,
// // //     paddingBottom: 8,
// // //     zIndex: 20,
// // //   },
// // //   time: { color: '#fff', fontSize: 15, fontWeight: '600' },
// // //   statusIcons: { flexDirection: 'row' },
// // //   iconPlaceholder: { width: 60, height: 12 },
// // //   welcomeBadgeContainer: { alignItems: 'center', marginTop: 12, zIndex: 20 },
// // //   welcomeBadge: {
// // //     paddingHorizontal: 24,
// // //     paddingVertical: 8,
// // //     borderWidth: 1.8,
// // //     borderColor: '#ffffff88',
// // //     borderRadius: 30,
// // //     backgroundColor: 'transparent',
// // //   },
// // //   welcomeText: { color: '#fff', fontSize: 13, fontWeight: '300', letterSpacing: 0.6 },
// // //   scrollContent: { alignItems: 'center', paddingBottom: 30 },
// // //   mockupContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     marginTop: 18,
// // //     marginBottom: 30,
// // //     height: 420,
// // //     zIndex: 10,
// // //   },
// // //   sideImage: {
// // //     width: 64,
// // //     height: 300,
// // //     borderRadius: 14,
// // //     overflow: 'hidden',
// // //     opacity: 0.45,
// // //   },
// // //   sideImageInner: { width: '100%', height: '100%', transform: [{ scale: 1.1 }] },
// // //   sideOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: '#ffffff20',
// // //     opacity: 0.18,
// // //   },
// // //   leftImage: { marginRight: -22 },
// // //   rightImage: { marginLeft: -22 },
// // //   centerCardWrapper: {
// // //     width: 288,
// // //     height: 408,
// // //     borderRadius: 26,
// // //     overflow: 'hidden',
// // //     zIndex: 30,
// // //     elevation: 24,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 12 },
// // //     shadowOpacity: 0.6,
// // //     shadowRadius: 22,
// // //   },
// // //   centerCard: {
// // //     flex: 1,
// // //     justifyContent: 'flex-end',
// // //     alignItems: 'center',
// // //     padding: 18,
// // //   },
// // //   centerCardImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   gradientOverlay: { ...StyleSheet.absoluteFillObject },
// // //   activeBadge: {
// // //     position: 'absolute',
// // //     top: 14,
// // //     left: 14,
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(10,14,26,0.6)',
// // //     paddingHorizontal: 8,
// // //     paddingVertical: 4,
// // //     borderRadius: 14,
// // //   },
// // //   activeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#2ee6a6', marginRight: 6 },
// // //   activeText: { color: '#e6f7ef', fontSize: 12 },
// // //   avatarRow: {
// // //     position: 'absolute',
// // //     top: '34%',
// // //     alignSelf: 'center',
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     gap: 10,
// // //   },
// // //   smallCircle: {
// // //     width: 52,
// // //     height: 52,
// // //     borderRadius: 26,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginHorizontal: 6,
// // //     elevation: 6,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 6 },
// // //     shadowOpacity: 0.25,
// // //     shadowRadius: 10,
// // //   },
// // //   smallEmoji: { fontSize: 22 },
// // //   whiteCard: {
// // //     width: '92%',
// // //     backgroundColor: 'rgba(255,255,255,0.96)',
// // //     borderRadius: 18,
// // //     paddingVertical: 16,
// // //     paddingHorizontal: 18,
// // //     alignItems: 'center',
// // //     marginBottom: 6,
// // //   },
// // //   cardTitle: { fontSize: 24, fontWeight: '700', color: '#0f1724', marginBottom: 6 },
// // //   cardDescription: { fontSize: 13, color: '#475569', textAlign: 'center', lineHeight: 20 },
// // //   bottomContent: {
// // //     alignItems: 'center',
// // //     paddingHorizontal: 30,
// // //     maxWidth: 420,
// // //     marginTop: 6,
// // //   },
// // //   titleRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
// // //   chatIconContainer: { width: 28, height: 28, justifyContent: 'center', alignItems: 'center' },
// // //   chatIcon: { fontSize: 20 },
// // //   mainTitle: { fontSize: 20, fontWeight: '600', color: '#fff', marginLeft: 8 },
// // //   description: { fontSize: 14, color: '#a0aec0', textAlign: 'center', lineHeight: 22, marginBottom: 24 },
// // //   highlight: { color: '#fff', fontWeight: '600' },
// // //   nextButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 32,
// // //     paddingVertical: 14,
// // //     borderWidth: 2,
// // //     borderColor: '#3b82f6',
// // //     borderRadius: 30,
// // //   },
// // //   nextButtonText: { color: '#fff', fontSize: 16, fontWeight: '600', marginRight: 8 },
// // //   arrow: { color: '#fff', fontSize: 18 },
// // //   homeIndicator: {
// // //     width: 134,
// // //     height: 5,
// // //     backgroundColor: 'rgba(255,255,255,0.24)',
// // //     borderRadius: 100,
// // //     alignSelf: 'center',
// // //     marginBottom: 10,
// // //     marginTop: 6,
// // //   },
// // // });

// // // export default OnboardingScreenExact;
// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Dimensions,
// //   ScrollView,
// //   StatusBar,
// //   PanResponder,
// //   Animated
// // } from 'react-native';

// // const { width, height } = Dimensions.get('window');

// // export default function App() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [touchStart, setTouchStart] = useState(0);
// //   const [touchEnd, setTouchEnd] = useState(0);
// //   const [autoPlay, setAutoPlay] = useState(true);
// //   const [lastScrollTime, setLastScrollTime] = useState(0);
// //   const [isSliding, setIsSliding] = useState(false);
// //   const [slideDirection, setSlideDirection] = useState('none');

// //   // Animation values
// //   const slideAnim = useRef(new Animated.Value(0)).current;

// //   const SCROLL_COOLDOWN = 800;

// //   // Dummy images array
// //   const images = [
// //     {
// //       main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(255,107,107);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(255,193,7);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad1)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E1%3C/text%3E%3C/svg%3E',
// //       left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL1)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 1%3C/text%3E%3C/svg%3E',
// //       right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR1)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 1%3C/text%3E%3C/svg%3E',
// //       title: 'Chat',
// //       description: 'Smarter chats with text, voice, and video by Ballastra AI.'
// //     },
// //     {
// //       main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,150,255);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,100,200);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad2)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E2%3C/text%3E%3C/svg%3E',
// //       left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL2)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 2%3C/text%3E%3C/svg%3E',
// //       right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR2)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 2%3C/text%3E%3C/svg%3E',
// //       title: 'Call',
// //       description: 'Connect with HD voice and video calls powered by Ballastra AI.'
// //     },
// //     {
// //       main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,200,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,150,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad3)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E3%3C/text%3E%3C/svg%3E',
// //       left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL3)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 3%3C/text%3E%3C/svg%3E',
// //       right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR3)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 3%3C/text%3E%3C/svg%3E',
// //       title: 'Messages',
// //       description: 'Instant messaging with read receipts and typing indicators.'
// //     }
// //   ];

// //   // Auto-play effect with horizontal slide
// //   useEffect(() => {
// //     if (!autoPlay) return;

// //     const interval = setInterval(() => {
// //       nextSlide();
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, [autoPlay, currentSlide, images.length]);


// //   // Handle swipe
// //   const handleSwipe = () => {
// //     if (isSliding) return;

// //     const distance = touchStart - touchEnd;
// //     const isLeftSwipe = distance > 50;
// //     const isRightSwipe = distance < -50;

// //     if (isLeftSwipe) {
// //       nextSlide();
// //     }
// //     if (isRightSwipe) {
// //       prevSlide();
// //     }
// //   };

// //   // Create PanResponder for swipe gestures
// //   const panResponder = useRef(
// //     PanResponder.create({
// //       onStartShouldSetPanResponder: () => true,
// //       onPanResponderGrant: (evt, gestureState) => {
// //         setTouchStart(gestureState.x0);
// //         setAutoPlay(false);
// //       },
// //       onPanResponderRelease: (evt, gestureState) => {
// //         setTouchEnd(gestureState.moveX);
// //         handleSwipe();
// //       },
// //     })
// //   ).current;

// //   const nextSlide = () => {
// //     if (isSliding) return;
// //     setIsSliding(true);
// //     setSlideDirection('right');

// //     // Animate slide out to right
// //     Animated.timing(slideAnim, {
// //       toValue: 1,
// //       duration: 400,
// //       useNativeDriver: true,
// //     }).start(() => {
// //       // Update slide
// //       setCurrentSlide((prev) => (prev + 1) % images.length);
// //       slideAnim.setValue(0);
// //       setIsSliding(false);
// //       setSlideDirection('none');
// //     });
// //   };

// //   const prevSlide = () => {
// //     if (isSliding) return;
// //     setIsSliding(true);
// //     setSlideDirection('left');

// //     // Animate slide out to left
// //     Animated.timing(slideAnim, {
// //       toValue: -1,
// //       duration: 400,
// //       useNativeDriver: true,
// //     }).start(() => {
// //       // Update slide
// //       setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
// //       slideAnim.setValue(0);
// //       setIsSliding(false);
// //       setSlideDirection('none');
// //     });
// //   };

// //   const toggleAutoPlay = () => {
// //     setAutoPlay(!autoPlay);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#0A0F1E" />
// //       <ScrollView
// //         style={styles.scrollView}
// //         contentContainerStyle={styles.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Status Bar */}
// //         <View style={styles.statusBar}>
// //           <Text style={styles.time}>9:41</Text>
// //           <View style={styles.statusIcons}>
// //             <Text style={styles.statusIcon}>📶</Text>
// //             <Text style={styles.statusIcon}>📡</Text>
// //             <Text style={styles.statusIcon}>🔋</Text>
// //           </View>
// //         </View>

// //       {/* Grid Background */}
// //       <View style={styles.gridBackground}>
// //         {Array.from({ length: 30 }).map((_, i) => (
// //           <View
// //             key={`h-${i}`}
// //             style={[styles.gridLine, styles.horizontalLine, { top: i * 30 }]}
// //           />
// //         ))}
// //         {Array.from({ length: 15 }).map((_, i) => (
// //           <View
// //             key={`v-${i}`}
// //             style={[styles.gridLine, styles.verticalLine, { left: i * 26 }]}
// //           />
// //         ))}
// //       </View>

// //       {/* Header */}
// //       <View style={styles.header}>
// //         <View style={styles.logoContainer}>
// //           <Text style={styles.logoText}>Welcome To Ballastra</Text>
// //         </View>
// //       </View>

// //       {/* Main Content with Cards */}
// //       <View style={styles.content} {...panResponder.panHandlers}>
// //         {/* Left Side Card */}
// //         <View style={styles.sideCardLeft}>
// //           <Image
// //             source={{ uri: images[currentSlide].left }}
// //             style={styles.sideImg}
// //           />
// //         </View>

// //         {/* Center Main Card with Animation */}
// //         <Animated.View
// //           style={[
// //             styles.mainCard,
// //             {
// //               transform: [
// //                 {
// //                   translateX: slideAnim.interpolate({
// //                     inputRange: [-1, 0, 1],
// //                     outputRange: [-width, 0, width],
// //                   }),
// //                 },
// //               ],
// //               opacity: slideAnim.interpolate({
// //                 inputRange: [-1, 0, 1],
// //                 outputRange: [0.3, 1, 0.3],
// //               }),
// //             },
// //           ]}
// //         >
// //           <View style={styles.cardInner}>
// //             {/* Ballastra Label */}
// //             <View style={styles.labelBadge}>
// //               <Text style={styles.labelText}>Ballastra</Text>
// //             </View>

// //             {/* Main Image */}
// //             <Image
// //               source={{ uri: images[currentSlide].main }}
// //               style={styles.mainImage}
// //             />

// //             {/* Dark Gradient Overlay */}
// //             <View style={styles.darkGradient} />

// //             {/* Icon Bubbles */}
// //             <View style={styles.iconBubbles}>
// //               <View style={[styles.bubble, { backgroundColor: '#FFF176', top: 130, left: 35 }]}>
// //                 <Text style={styles.bubbleIcon}>😊</Text>
// //               </View>
// //               <View style={[styles.bubble, { backgroundColor: '#E91E63', top: 155, left: width * 0.4 }]}>
// //                 <Text style={styles.bubbleIcon}>🔒</Text>
// //               </View>
// //               <View style={[styles.bubble, { backgroundColor: '#00E5FF', top: 130, right: 35 }]}>
// //                 <Text style={styles.bubbleIcon}>💬</Text>
// //               </View>
// //             </View>

// //             {/* Bottom Text */}
// //             <View style={styles.bottomText}>
// //               <Text style={styles.mainTitle}>{images[currentSlide].title}</Text>
// //               <Text style={styles.subtitle}>
// //                 {images[currentSlide].description}
// //               </Text>
// //             </View>
// //           </View>
// //         </Animated.View>

// //         {/* Right Side Card */}
// //         <View style={styles.sideCardRight}>
// //           <Image
// //             source={{ uri: images[currentSlide].right }}
// //             style={styles.sideImg}
// //           />
// //         </View>
// //       </View>

// //       {/* Bottom Description Section */}
// //       <View style={styles.bottomSection}>
// //         <View style={styles.iconRing}>
// //           <Text style={styles.ringIcon}>💬</Text>
// //         </View>

// //         <Text style={styles.sectionTitle}>{images[currentSlide].title}</Text>

// //         <Text style={styles.description}>
// //           {images[currentSlide].description}
// //         </Text>

// //         {/* Navigation Buttons */}
// //         <View style={styles.buttonsContainer}>
// //           <TouchableOpacity
// //             style={styles.buttonNav}
// //             onPress={prevSlide}
// //             disabled={isSliding}
// //           >
// //             <Text style={styles.arrow}>←</Text>
// //           </TouchableOpacity>

// //           {/* Auto-Play Toggle Button */}
// //           <TouchableOpacity
// //             style={[styles.button, styles.playButton]}
// //             onPress={toggleAutoPlay}
// //           >
// //             <Text style={styles.buttonText}>{autoPlay ? '⏸' : '▶'}</Text>
// //           </TouchableOpacity>

// //           {/* Next Button */}
// //           <TouchableOpacity
// //             style={styles.button}
// //             onPress={nextSlide}
// //             disabled={isSliding}
// //           >
// //             <Text style={styles.buttonText}>Next</Text>
// //             <Text style={styles.arrow}>→</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* Progress Bar */}
// //         <View style={styles.progressBarContainer}>
// //           {images.map((_, index) => (
// //             <View
// //               key={index}
// //               style={[
// //                 styles.progressBar,
// //                 {
// //                   opacity: index === currentSlide ? 1 : 0.3,
// //                   width: index === currentSlide ? 40 : 25,
// //                 }
// //               ]}
// //             />
// //           ))}
// //         </View>

// //         {/* Slide Counter */}
// //         <Text style={styles.slideCounter}>{currentSlide + 1} / {images.length}</Text>

// //         {/* Auto-play Status */}
// //         <Text style={styles.autoPlayStatus}>
// //           {autoPlay ? '🔄 Auto-playing' : '⏸ Paused'}
// //         </Text>

// //         {/* Scroll Hint */}
// //         <Text style={styles.scrollHint}>
// //           💡 Swipe to Navigate
// //         </Text>
// //       </View>
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0A0F1E',
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   scrollContent: {
// //     flexGrow: 1,
// //   },
// //   statusBar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingTop: StatusBar.currentHeight || 40,
// //     paddingBottom: 10,
// //     paddingHorizontal: 24,
// //     zIndex: 100,
// //   },
// //   time: {
// //     color: '#fff',
// //     fontSize: 15,
// //     fontWeight: '600',
// //     letterSpacing: -0.5,
// //   },
// //   statusIcons: {
// //     flexDirection: 'row',
// //     gap: 6,
// //   },
// //   statusIcon: {
// //     fontSize: 11,
// //   },
// //   gridBackground: {
// //     position: 'absolute',
// //     width: '100%',
// //     height: '100%',
// //     opacity: 0.15,
// //   },
// //   gridLine: {
// //     position: 'absolute',
// //     backgroundColor: '#2563eb',
// //   },
// //   horizontalLine: {
// //     width: '100%',
// //     height: 1,
// //   },
// //   verticalLine: {
// //     height: '100%',
// //     width: 1,
// //   },
// //   header: {
// //     paddingTop: 12,
// //     paddingBottom: 20,
// //     alignItems: 'center',
// //   },
// //   logoContainer: {
// //     borderWidth: 2,
// //     borderColor: '#fff',
// //     borderRadius: 50,
// //     paddingVertical: 8,
// //     paddingHorizontal: 22,
// //   },
// //   logoText: {
// //     color: '#fff',
// //     fontSize: 13,
// //     fontWeight: '400',
// //     letterSpacing: 0.5,
// //   },
// //   content: {
// //     height: 600,
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: 20,
// //     marginVertical: 20,
// //   },
// //   mainCard: {
// //     width: 320,
// //     height: 580,
// //     zIndex: 10,
// //   },
// //   cardInner: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 45,
// //     overflow: 'hidden',
// //     backgroundColor: 'rgba(255,255,255,0.09)',
// //     borderWidth: 2.5,
// //     borderColor: 'rgba(255,255,255,0.18)',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 35 },
// //     shadowOpacity: 0.75,
// //     shadowRadius: 95,
// //     elevation: 20,
// //   },
// //   labelBadge: {
// //     position: 'absolute',
// //     top: 22,
// //     left: 22,
// //     backgroundColor: 'rgba(255,255,255,0.38)',
// //     paddingVertical: 8,
// //     paddingHorizontal: 18,
// //     borderRadius: 20,
// //     zIndex: 20,
// //   },
// //   labelText: {
// //     color: '#fff',
// //     fontSize: 12,
// //     fontWeight: '600',
// //     letterSpacing: 0.4,
// //   },
// //   mainImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //   },
// //   darkGradient: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     height: '50%',
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //     zIndex: 5,
// //   },
// //   iconBubbles: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     zIndex: 10,
// //   },
// //   bubble: {
// //     position: 'absolute',
// //     width: 56,
// //     height: 56,
// //     borderRadius: 28,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 8 },
// //     shadowOpacity: 0.4,
// //     shadowRadius: 20,
// //     elevation: 8,
// //     borderWidth: 3,
// //     borderColor: 'rgba(255,255,255,0.5)',
// //   },
// //   bubbleIcon: {
// //     fontSize: 28,
// //   },
// //   bottomText: {
// //     position: 'absolute',
// //     bottom: 40,
// //     left: 0,
// //     right: 0,
// //     alignItems: 'center',
// //     zIndex: 15,
// //   },
// //   mainTitle: {
// //     color: '#fff',
// //     fontSize: 36,
// //     fontWeight: '700',
// //     marginBottom: 10,
// //     letterSpacing: -0.5,
// //     textAlign: 'center',
// //   },
// //   subtitle: {
// //     color: '#fff',
// //     fontSize: 14,
// //     lineHeight: 20,
// //     fontWeight: '400',
// //     opacity: 0.95,
// //     textAlign: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   sideCardLeft: {
// //     width: 120,
// //     height: 400,
// //     borderRadius: 24,
// //     overflow: 'hidden',
// //     opacity: 0.4,
// //     zIndex: 1,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 15 },
// //     shadowOpacity: 0.6,
// //     shadowRadius: 40,
// //     elevation: 10,
// //   },
// //   sideCardRight: {
// //     width: 120,
// //     height: 400,
// //     borderRadius: 24,
// //     overflow: 'hidden',
// //     opacity: 0.4,
// //     zIndex: 1,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 15 },
// //     shadowOpacity: 0.6,
// //     shadowRadius: 40,
// //     elevation: 10,
// //   },
// //   sideImg: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   bottomSection: {
// //     paddingVertical: 20,
// //     paddingHorizontal: 30,
// //     paddingBottom: 40,
// //     alignItems: 'center',
// //   },
// //   iconRing: {
// //     width: 32,
// //     height: 32,
// //     borderRadius: 16,
// //     borderWidth: 2,
// //     borderColor: '#fff',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   ringIcon: {
// //     fontSize: 14,
// //   },
// //   sectionTitle: {
// //     color: '#fff',
// //     fontSize: 26,
// //     fontWeight: '600',
// //     marginBottom: 12,
// //     letterSpacing: -0.3,
// //     textAlign: 'center',
// //   },
// //   description: {
// //     color: '#fff',
// //     fontSize: 14.5,
// //     lineHeight: 22,
// //     opacity: 0.85,
// //     marginBottom: 30,
// //     fontWeight: '400',
// //     textAlign: 'center',
// //   },
// //   buttonsContainer: {
// //     flexDirection: 'row',
// //     gap: 15,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   button: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'transparent',
// //     borderWidth: 2.5,
// //     borderColor: '#4a6fa5',
// //     borderRadius: 32,
// //     paddingVertical: 15,
// //     paddingHorizontal: 30,
// //   },
// //   buttonNav: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: 'transparent',
// //     borderWidth: 2.5,
// //     borderColor: '#4a6fa5',
// //     borderRadius: 32,
// //     paddingVertical: 15,
// //     paddingHorizontal: 25,
// //     minWidth: 60,
// //   },
// //   playButton: {
// //     paddingVertical: 15,
// //     paddingHorizontal: 30,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 17,
// //     fontWeight: '600',
// //     marginRight: 10,
// //     letterSpacing: 0.2,
// //   },
// //   arrow: {
// //     color: '#fff',
// //     fontSize: 20,
// //     fontWeight: '600',
// //   },
// //   progressBarContainer: {
// //     flexDirection: 'row',
// //     gap: 8,
// //     justifyContent: 'center',
// //     marginTop: 8,
// //     marginBottom: 12,
// //   },
// //   progressBar: {
// //     height: 5,
// //     backgroundColor: '#fff',
// //     borderRadius: 3,
// //   },
// //   slideCounter: {
// //     color: '#fff',
// //     fontSize: 12,
// //     opacity: 0.7,
// //     marginTop: 8,
// //   },
// //   autoPlayStatus: {
// //     color: '#fff',
// //     fontSize: 11,
// //     opacity: 0.6,
// //     marginTop: 6,
// //   },
// //   scrollHint: {
// //     color: '#fff',
// //     fontSize: 11,
// //     opacity: 0.5,
// //     marginTop: 6,
// //     fontStyle: 'italic',
// //   },
// // });



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
//   StatusBar,
//   PanResponder,
//   Animated
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// export default function App() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const [lastScrollTime, setLastScrollTime] = useState(0);
//   const [isSliding, setIsSliding] = useState(false);
//   const [slideDirection, setSlideDirection] = useState('none');

//   // Animation values
//   const slideAnim = useRef(new Animated.Value(0)).current;

//   const SCROLL_COOLDOWN = 800;

//   // Dummy images array
//   const images = [
//     {
//       main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(255,107,107);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(255,193,7);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad1)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E1%3C/text%3E%3C/svg%3E',
//       left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL1)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 1%3C/text%3E%3C/svg%3E',
//       right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR1)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 1%3C/text%3E%3C/svg%3E',
//       title: 'Chat',
//       description: 'Smarter chats with text, voice, and video by Ballastra AI.'
//     },
//     {
//       main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,150,255);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,100,200);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad2)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E2%3C/text%3E%3C/svg%3E',
//       left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL2)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 2%3C/text%3E%3C/svg%3E',
//       right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR2)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 2%3C/text%3E%3C/svg%3E',
//       title: 'Call',
//       description: 'Connect with HD voice and video calls powered by Ballastra AI.'
//     },
//     {
//       main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,200,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,150,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad3)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E3%3C/text%3E%3C/svg%3E',
//       left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL3)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 3%3C/text%3E%3C/svg%3E',
//       right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR3)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 3%3C/text%3E%3C/svg%3E',
//       title: 'Messages',
//       description: 'Instant messaging with read receipts and typing indicators.'
//     }
//   ];

//   // Auto-play effect with horizontal slide
//   useEffect(() => {
//     if (!autoPlay) return;

//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [autoPlay, currentSlide, images.length]);


//   // Handle swipe
//   const handleSwipe = () => {
//     if (isSliding) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     }
//     if (isRightSwipe) {
//       prevSlide();
//     }
//   };

//   // Create PanResponder for swipe gestures
//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderGrant: (evt, gestureState) => {
//         setTouchStart(gestureState.x0);
//         setAutoPlay(false);
//       },
//       onPanResponderRelease: (evt, gestureState) => {
//         setTouchEnd(gestureState.moveX);
//         handleSwipe();
//       },
//     })
//   ).current;

//   const nextSlide = () => {
//     if (isSliding) return;
//     setIsSliding(true);
//     setSlideDirection('right');

//     // Animate slide out to right
//     Animated.timing(slideAnim, {
//       toValue: 1,
//       duration: 400,
//       useNativeDriver: true,
//     }).start(() => {
//       // Update slide
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//       slideAnim.setValue(0);
//       setIsSliding(false);
//       setSlideDirection('none');
//     });
//   };

//   const prevSlide = () => {
//     if (isSliding) return;
//     setIsSliding(true);
//     setSlideDirection('left');

//     // Animate slide out to left
//     Animated.timing(slideAnim, {
//       toValue: -1,
//       duration: 400,
//       useNativeDriver: true,
//     }).start(() => {
//       // Update slide
//       setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//       slideAnim.setValue(0);
//       setIsSliding(false);
//       setSlideDirection('none');
//     });
//   };

//   const toggleAutoPlay = () => {
//     setAutoPlay(!autoPlay);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0A0F1E" />
//       <ScrollView
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Status Bar */}
//         <View style={styles.statusBar}>
//           <Text style={styles.time}>9:41</Text>
//           <View style={styles.statusIcons}>
//             <Text style={styles.statusIcon}>📶</Text>
//             <Text style={styles.statusIcon}>📡</Text>
//             <Text style={styles.statusIcon}>🔋</Text>
//           </View>
//         </View>

//       {/* Grid Background */}
//       <View style={styles.gridBackground}>
//         {Array.from({ length: 30 }).map((_, i) => (
//           <View
//             key={`h-${i}`}
//             style={[styles.gridLine, styles.horizontalLine, { top: i * 30 }]}
//           />
//         ))}
//         {Array.from({ length: 15 }).map((_, i) => (
//           <View
//             key={`v-${i}`}
//             style={[styles.gridLine, styles.verticalLine, { left: i * 26 }]}
//           />
//         ))}
//       </View>

//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.logoContainer}>
//           <Text style={styles.logoText}>Welcome To Ballastra</Text>
//         </View>
//       </View>

//       {/* Main Content with Cards */}
//       <View style={styles.content} {...panResponder.panHandlers}>
//         {/* Left Side Card */}
//         <View style={styles.sideCardLeft}>
//           <Image
//             source={{ uri: images[currentSlide].left }}
//             style={styles.sideImg}
//           />
//         </View>

//         {/* Center Main Card with Animation */}
//         <Animated.View
//           style={[
//             styles.mainCard,
//             {
//               transform: [
//                 {
//                   translateX: slideAnim.interpolate({
//                     inputRange: [-1, 0, 1],
//                     outputRange: [-width, 0, width],
//                   }),
//                 },
//               ],
//               opacity: slideAnim.interpolate({
//                 inputRange: [-1, 0, 1],
//                 outputRange: [0.3, 1, 0.3],
//               }),
//             },
//           ]}
//         >
//           <View style={styles.cardInner}>
//             {/* Ballastra Label */}
//             <View style={styles.labelBadge}>
//               <Text style={styles.labelText}>Ballastra</Text>
//             </View>

//             {/* Main Image */}
//             <Image
//               source={{ uri: images[currentSlide].main }}
//               style={styles.mainImage}
//             />

//             {/* Dark Gradient Overlay */}
//             <View style={styles.darkGradient} />

//             {/* Icon Bubbles */}
//             <View style={styles.iconBubbles}>
//               <View style={[styles.bubble, { backgroundColor: '#FFF176', top: 130, left: 35 }]}>
//                 <Text style={styles.bubbleIcon}>😊</Text>
//               </View>
//               <View style={[styles.bubble, { backgroundColor: '#E91E63', top: 155, left: width * 0.4 }]}>
//                 <Text style={styles.bubbleIcon}>🔒</Text>
//               </View>
//               <View style={[styles.bubble, { backgroundColor: '#00E5FF', top: 130, right: 35 }]}>
//                 <Text style={styles.bubbleIcon}>💬</Text>
//               </View>
//             </View>

//             {/* Bottom Text */}
//             <View style={styles.bottomText}>
//               <Text style={styles.mainTitle}>{images[currentSlide].title}</Text>
//               <Text style={styles.subtitle}>
//                 {images[currentSlide].description}
//               </Text>
//             </View>
//           </View>
//         </Animated.View>

//         {/* Right Side Card */}
//         <View style={styles.sideCardRight}>
//           <Image
//             source={{ uri: images[currentSlide].right }}
//             style={styles.sideImg}
//           />
//         </View>
//       </View>

//       {/* Bottom Description Section */}
//       <View style={styles.bottomSection}>
//         <View style={styles.iconRing}>
//           <Text style={styles.ringIcon}>💬</Text>
//         </View>

//         <Text style={styles.sectionTitle}>{images[currentSlide].title}</Text>

//         <Text style={styles.description}>
//           {images[currentSlide].description}
//         </Text>

//         {/* Navigation Buttons */}
//         <View style={styles.buttonsContainer}>
//           <TouchableOpacity
//             style={styles.buttonNav}
//             onPress={prevSlide}
//             disabled={isSliding}
//           >
//             <Text style={styles.arrow}>←</Text>
//           </TouchableOpacity>

//           {/* Auto-Play Toggle Button */}
//           <TouchableOpacity
//             style={[styles.button, styles.playButton]}
//             onPress={toggleAutoPlay}
//           >
//             <Text style={styles.buttonText}>{autoPlay ? '⏸' : '▶'}</Text>
//           </TouchableOpacity>

//           {/* Next Button */}
//           <TouchableOpacity
//             style={styles.button}
//             onPress={nextSlide}
//             disabled={isSliding}
//           >
//             <Text style={styles.buttonText}>Next</Text>
//             <Text style={styles.arrow}>→</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Progress Bar */}
//         <View style={styles.progressBarContainer}>
//           {images.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.progressBar,
//                 {
//                   opacity: index === currentSlide ? 1 : 0.3,
//                   width: index === currentSlide ? 40 : 25,
//                 }
//               ]}
//             />
//           ))}
//         </View>

//         {/* Slide Counter */}
//         <Text style={styles.slideCounter}>{currentSlide + 1} / {images.length}</Text>

//         {/* Auto-play Status */}
//         <Text style={styles.autoPlayStatus}>
//           {autoPlay ? '🔄 Auto-playing' : '⏸ Paused'}
//         </Text>

//         {/* Scroll Hint */}
//         <Text style={styles.scrollHint}>
//           💡 Swipe to Navigate
//         </Text>
//       </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0A0F1E',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//   },
//   statusBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: StatusBar.currentHeight || 40,
//     paddingBottom: 10,
//     paddingHorizontal: 24,
//     zIndex: 100,
//   },
//   time: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '600',
//     letterSpacing: -0.5,
//   },
//   statusIcons: {
//     flexDirection: 'row',
//     gap: 6,
//   },
//   statusIcon: {
//     fontSize: 11,
//   },
//   gridBackground: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     opacity: 0.15,
//   },
//   gridLine: {
//     position: 'absolute',
//     backgroundColor: '#2563eb',
//   },
//   horizontalLine: {
//     width: '100%',
//     height: 1,
//   },
//   verticalLine: {
//     height: '100%',
//     width: 1,
//   },
//   header: {
//     paddingTop: 12,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   logoContainer: {
//     borderWidth: 2,
//     borderColor: '#fff',
//     borderRadius: 50,
//     paddingVertical: 8,
//     paddingHorizontal: 22,
//   },
//   logoText: {
//     color: '#fff',
//     fontSize: 13,
//     fontWeight: '400',
//     letterSpacing: 0.5,
//   },
//   content: {
//     height: 600,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 20,
//     marginVertical: 20,
//   },
//   mainCard: {
//     width: 320,
//     height: 580,
//     zIndex: 10,
//   },
//   cardInner: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 45,
//     overflow: 'hidden',
//     backgroundColor: 'rgba(255,255,255,0.09)',
//     borderWidth: 2.5,
//     borderColor: 'rgba(255,255,255,0.18)',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 35 },
//     shadowOpacity: 0.75,
//     shadowRadius: 95,
//     elevation: 20,
//   },
//   labelBadge: {
//     position: 'absolute',
//     top: 22,
//     left: 22,
//     backgroundColor: 'rgba(255,255,255,0.38)',
//     paddingVertical: 8,
//     paddingHorizontal: 18,
//     borderRadius: 20,
//     zIndex: 20,
//   },
//   labelText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '600',
//     letterSpacing: 0.4,
//   },
//   mainImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   darkGradient: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: '50%',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 5,
//   },
//   iconBubbles: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 10,
//   },
//   bubble: {
//     position: 'absolute',
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.4,
//     shadowRadius: 20,
//     elevation: 8,
//     borderWidth: 3,
//     borderColor: 'rgba(255,255,255,0.5)',
//   },
//   bubbleIcon: {
//     fontSize: 28,
//   },
//   bottomText: {
//     position: 'absolute',
//     bottom: 40,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//     zIndex: 15,
//   },
//   mainTitle: {
//     color: '#fff',
//     fontSize: 36,
//     fontWeight: '700',
//     marginBottom: 10,
//     letterSpacing: -0.5,
//     textAlign: 'center',
//   },
//   subtitle: {
//     color: '#fff',
//     fontSize: 14,
//     lineHeight: 20,
//     fontWeight: '400',
//     opacity: 0.95,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
//   sideCardLeft: {
//     width: 120,
//     height: 400,
//     borderRadius: 24,
//     overflow: 'hidden',
//     opacity: 0.4,
//     zIndex: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 15 },
//     shadowOpacity: 0.6,
//     shadowRadius: 40,
//     elevation: 10,
//   },
//   sideCardRight: {
//     width: 120,
//     height: 400,
//     borderRadius: 24,
//     overflow: 'hidden',
//     opacity: 0.4,
//     zIndex: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 15 },
//     shadowOpacity: 0.6,
//     shadowRadius: 40,
//     elevation: 10,
//   },
//   sideImg: {
//     width: '100%',
//     height: '100%',
//   },
//   bottomSection: {
//     paddingVertical: 20,
//     paddingHorizontal: 30,
//     paddingBottom: 40,
//     alignItems: 'center',
//   },
//   iconRing: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     borderWidth: 2,
//     borderColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   ringIcon: {
//     fontSize: 14,
//   },
//   sectionTitle: {
//     color: '#fff',
//     fontSize: 26,
//     fontWeight: '600',
//     marginBottom: 12,
//     letterSpacing: -0.3,
//     textAlign: 'center',
//   },
//   description: {
//     color: '#fff',
//     fontSize: 14.5,
//     lineHeight: 22,
//     opacity: 0.85,
//     marginBottom: 30,
//     fontWeight: '400',
//     textAlign: 'center',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     gap: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     borderWidth: 2.5,
//     borderColor: '#4a6fa5',
//     borderRadius: 32,
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//   },
//   buttonNav: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderWidth: 2.5,
//     borderColor: '#4a6fa5',
//     borderRadius: 32,
//     paddingVertical: 15,
//     paddingHorizontal: 25,
//     minWidth: 60,
//   },
//   playButton: {
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 17,
//     fontWeight: '600',
//     marginRight: 10,
//     letterSpacing: 0.2,
//   },
//   arrow: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   progressBarContainer: {
//     flexDirection: 'row',
//     gap: 8,
//     justifyContent: 'center',
//     marginTop: 8,
//     marginBottom: 12,
//   },
//   progressBar: {
//     height: 5,
//     backgroundColor: '#fff',
//     borderRadius: 3,
//   },
//   slideCounter: {
//     color: '#fff',
//     fontSize: 12,
//     opacity: 0.7,
//     marginTop: 8,
//   },
//   autoPlayStatus: {
//     color: '#fff',
//     fontSize: 11,
//     opacity: 0.6,
//     marginTop: 6,
//   },
//   scrollHint: {
//     color: '#fff',
//     fontSize: 11,
//     opacity: 0.5,
//     marginTop: 6,
//     fontStyle: 'italic',
//   },
// });


import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  PanResponder,
  Animated
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function v2({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('none');

  // Animation values
  const slideAnim = useRef(new Animated.Value(0)).current;

  const SCROLL_COOLDOWN = 800;

  // Dummy images array
  const images = [
    {
      main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(255,107,107);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(255,193,7);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad1)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E1%3C/text%3E%3C/svg%3E',
      left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL1)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 1%3C/text%3E%3C/svg%3E',
      right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR1)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 1%3C/text%3E%3C/svg%3E',
      title: 'Chat',
      description: 'Smarter chats with text, voice, and video by Ballastra AI.'
    },
    {
      main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,150,255);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,100,200);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad2)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E2%3C/text%3E%3C/svg%3E',
      left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL2)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 2%3C/text%3E%3C/svg%3E',
      right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR2)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 2%3C/text%3E%3C/svg%3E',
      title: 'Call',
      description: 'Connect with HD voice and video calls powered by Ballastra AI.'
    },
    {
      main: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,200,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,150,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23grad3)%22/%3E%3Ccircle cx=%22200%22 cy=%22400%22 r=%22100%22 fill=%22rgba(255,255,255,0.2)%22/%3E%3Ctext x=%22200%22 y=%22410%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22%3E3%3C/text%3E%3C/svg%3E',
      left: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradL3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradL3)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 3%3C/text%3E%3C/svg%3E',
      right: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22800%22%3E%3Cdefs%3E%3ClinearGradient id=%22gradR3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(100,100,100);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(50,50,50);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22800%22 fill=%22url(%23gradR3)%22/%3E%3Ctext x=%22200%22 y=%22400%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPerson 3%3C/text%3E%3C/svg%3E',
      title: 'Messages',
      description: 'Instant messaging with read receipts and typing indicators.'
    }
  ];

  // Auto-play effect with horizontal slide
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, currentSlide, images.length]);

  // Handle swipe
  const handleSwipe = () => {
    if (isSliding) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Create PanResponder for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        setTouchStart(gestureState.x0);
        setAutoPlay(false);
      },
      onPanResponderRelease: (evt, gestureState) => {
        setTouchEnd(gestureState.moveX);
        handleSwipe();
      },
    })
  ).current;

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('right');

    // Animate slide out to right
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      // Update slide
      setCurrentSlide((prev) => (prev + 1) % images.length);
      slideAnim.setValue(0);
      setIsSliding(false);
      setSlideDirection('none');
    });
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('left');

    // Animate slide out to left
    Animated.timing(slideAnim, {
      toValue: -1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      // Update slide
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      slideAnim.setValue(0);
      setIsSliding(false);
      setSlideDirection('none');
    });
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  // 👉 NEXT button press: last slide असेल तर v3 ला जा, नाहीतर पुढची slide
  const handleNextPress = () => {
    if (currentSlide === images.length - 1) {
      navigation.navigate('v3');
    } else {
      nextSlide();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0F1E" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.statusIcons}>
            <Text style={styles.statusIcon}>📶</Text>
            <Text style={styles.statusIcon}>📡</Text>
            <Text style={styles.statusIcon}>🔋</Text>
          </View>
        </View>

        {/* Grid Background */}
        <View style={styles.gridBackground}>
          {Array.from({ length: 30 }).map((_, i) => (
            <View
              key={`h-${i}`}
              style={[styles.gridLine, styles.horizontalLine, { top: i * 30 }]}
            />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <View
              key={`v-${i}`}
              style={[styles.gridLine, styles.verticalLine, { left: i * 26 }]}
            />
          ))}
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Welcome To Ballastra</Text>
          </View>
        </View>

        {/* Main Content with Cards */}
        <View style={styles.content} {...panResponder.panHandlers}>
          {/* Left Side Card */}
          <View style={styles.sideCardLeft}>
            <Image
              source={{ uri: images[currentSlide].left }}
              style={styles.sideImg}
            />
          </View>

          {/* Center Main Card with Animation */}
          <Animated.View
            style={[
              styles.mainCard,
              {
                transform: [
                  {
                    translateX: slideAnim.interpolate({
                      inputRange: [-1, 0, 1],
                      outputRange: [-width, 0, width],
                    }),
                  },
                ],
                opacity: slideAnim.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.3, 1, 0.3],
                }),
              },
            ]}
          >
            <View style={styles.cardInner}>
              {/* Ballastra Label */}
              <View style={styles.labelBadge}>
                <Text style={styles.labelText}>Ballastra</Text>
              </View>

              {/* Main Image */}
              <Image
                source={{ uri: images[currentSlide].main }}
                style={styles.mainImage}
              />

              {/* Dark Gradient Overlay */}
              <View style={styles.darkGradient} />

              {/* Icon Bubbles */}
              <View style={styles.iconBubbles}>
                <View style={[styles.bubble, { backgroundColor: '#FFF176', top: 130, left: 35 }]}>
                  <Text style={styles.bubbleIcon}>😊</Text>
                </View>
                <View style={[styles.bubble, { backgroundColor: '#E91E63', top: 155, left: width * 0.4 }]}>
                  <Text style={styles.bubbleIcon}>🔒</Text>
                </View>
                <View style={[styles.bubble, { backgroundColor: '#00E5FF', top: 130, right: 35 }]}>
                  <Text style={styles.bubbleIcon}>💬</Text>
                </View>
              </View>

              {/* Bottom Text */}
              <View style={styles.bottomText}>
                <Text style={styles.mainTitle}>{images[currentSlide].title}</Text>
                <Text style={styles.subtitle}>
                  {images[currentSlide].description}
                </Text>
              </View>
            </View>
          </Animated.View>

          {/* Right Side Card */}
          <View style={styles.sideCardRight}>
            <Image
              source={{ uri: images[currentSlide].right }}
              style={styles.sideImg}
            />
          </View>
        </View>

        {/* Bottom Description Section */}
        <View style={styles.bottomSection}>
          <View style={styles.iconRing}>
            <Text style={styles.ringIcon}>💬</Text>
          </View>

          <Text style={styles.sectionTitle}>{images[currentSlide].title}</Text>

          <Text style={styles.description}>
            {images[currentSlide].description}
          </Text>

          {/* Navigation Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonNav}
              onPress={prevSlide}
              disabled={isSliding}
            >
              <Text style={styles.arrow}>←</Text>
            </TouchableOpacity>

            {/* Auto-Play Toggle Button */}
            <TouchableOpacity
              style={[styles.button, styles.playButton]}
              onPress={toggleAutoPlay}
            >
              <Text style={styles.buttonText}>{autoPlay ? '⏸' : '▶'}</Text>
            </TouchableOpacity>

            {/* Next / Continue Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleNextPress}
              disabled={isSliding}
            >
              <Text style={styles.buttonText}>
                {currentSlide === images.length - 1 ? 'Continue' : 'Next'}
              </Text>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressBar,
                  {
                    opacity: index === currentSlide ? 1 : 0.3,
                    width: index === currentSlide ? 40 : 25,
                  }
                ]}
              />
            ))}
          </View>

          {/* Slide Counter */}
          <Text style={styles.slideCounter}>{currentSlide + 1} / {images.length}</Text>

          {/* Auto-play Status */}
          <Text style={styles.autoPlayStatus}>
            {autoPlay ? '🔄 Auto-playing' : '⏸ Paused'}
          </Text>

          {/* Scroll Hint */}
          <Text style={styles.scrollHint}>
            💡 Swipe to Navigate
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1E',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 40,
    paddingBottom: 10,
    paddingHorizontal: 24,
    zIndex: 100,
  },
  time: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 6,
  },
  statusIcon: {
    fontSize: 11,
  },
  gridBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.15,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: '#2563eb',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
  },
  verticalLine: {
    height: '100%',
    width: 1,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 20,
    alignItems: 'center',
  },
  logoContainer: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  logoText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  content: {
    height: 600,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 20,
  },
  mainCard: {
    width: 320,
    height: 580,
    zIndex: 10,
  },
  cardInner: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderWidth: 2.5,
    borderColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 35 },
    shadowOpacity: 0.75,
    shadowRadius: 95,
    elevation: 20,
  },
  labelBadge: {
    position: 'absolute',
    top: 22,
    left: 22,
    backgroundColor: 'rgba(255,255,255,0.38)',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    zIndex: 20,
  },
  labelText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  darkGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 5,
  },
  iconBubbles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  bubble: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  bubbleIcon: {
    fontSize: 28,
  },
  bottomText: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 15,
  },
  mainTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    opacity: 0.95,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  sideCardLeft: {
    width: 120,
    height: 400,
    borderRadius: 24,
    overflow: 'hidden',
    opacity: 0.4,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.6,
    shadowRadius: 40,
    elevation: 10,
  },
  sideCardRight: {
    width: 120,
    height: 400,
    borderRadius: 24,
    overflow: 'hidden',
    opacity: 0.4,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.6,
    shadowRadius: 40,
    elevation: 10,
  },
  sideImg: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  iconRing: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  ringIcon: {
    fontSize: 14,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 12,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 14.5,
    lineHeight: 22,
    opacity: 0.85,
    marginBottom: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2.5,
    borderColor: '#4a6fa5',
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2.5,
    borderColor: '#4a6fa5',
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 25,
    minWidth: 60,
  },
  playButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    marginRight: 10,
    letterSpacing: 0.2,
  },
  arrow: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  progressBarContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  slideCounter: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.7,
    marginTop: 8,
  },
  autoPlayStatus: {
    color: '#fff',
    fontSize: 11,
    opacity: 0.6,
    marginTop: 6,
  },
  scrollHint: {
    color: '#fff',
    fontSize: 11,
    opacity: 0.5,
    marginTop: 6,
    fontStyle: 'italic',
  },
});
