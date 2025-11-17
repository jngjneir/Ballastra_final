// import React, { useEffect, useRef } from 'react';
// import {
//   View,
//   StyleSheet,
//   Animated,
//   StatusBar,
//   Dimensions,
//   Platform,
// } from 'react-native';
// import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

// const { width, height } = Dimensions.get('window');

// const SplashScreen = ({ onFinish }) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(0.8)).current;
//   const floatAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Initial fade in and scale animation
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1200,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         tension: 50,
//         friction: 7,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     // Floating animation
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(floatAnim, {
//           toValue: -10,
//           duration: 1500,
//           useNativeDriver: true,
//         }),
//         Animated.timing(floatAnim, {
//           toValue: 0,
//           duration: 1500,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();

//     // Auto navigate after 3 seconds
//     const timer = setTimeout(() => {
//       if (onFinish) onFinish();
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0a0e1a" />
      
//       {/* Logo Container */}
//       <Animated.View
//         style={[
//           styles.logoContainer,
//           {
//             opacity: fadeAnim,
//             transform: [
//               { scale: scaleAnim },
//               { translateY: floatAnim },
//             ],
//           },
//         ]}
//       >
//         <Svg width={120} height={120} viewBox="0 0 200 200">
//           <Defs>
//             <LinearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <Stop offset="0%" stopColor="#4ECDC4" stopOpacity="1" />
//               <Stop offset="50%" stopColor="#6B5FD9" stopOpacity="1" />
//               <Stop offset="100%" stopColor="#B24BFF" stopOpacity="1" />
//             </LinearGradient>
//           </Defs>

//           {/* Top ribbon (cyan) */}
//           <Path
//             d="M 80 50 L 120 35 L 145 50 L 145 85 L 120 75 L 80 85 Z"
//             fill="#4ECDC4"
//           />

//           {/* Top ribbon side face */}
//           <Path
//             d="M 120 35 L 145 50 L 145 85 L 120 75 Z"
//             fill="#3BB5B0"
//             opacity="0.8"
//           />

//           {/* Middle transition (purple gradient area) */}
//           <Path
//             d="M 80 85 L 120 75 L 145 85 L 145 115 L 120 125 L 80 115 Z"
//             fill="url(#logoGradient)"
//           />

//           {/* Middle side face */}
//           <Path
//             d="M 120 75 L 145 85 L 145 115 L 120 125 Z"
//             fill="#7B5FD9"
//             opacity="0.7"
//           />

//           {/* Bottom ribbon (purple) */}
//           <Path
//             d="M 80 115 L 120 125 L 145 115 L 145 150 L 120 165 L 80 150 Z"
//             fill="#B24BFF"
//           />

//           {/* Bottom ribbon side face */}
//           <Path
//             d="M 120 125 L 145 115 L 145 150 L 120 165 Z"
//             fill="#9030DD"
//             opacity="0.8"
//           />

//           {/* Left connecting face */}
//           <Path
//             d="M 55 65 L 80 50 L 80 85 L 55 95 Z"
//             fill="#4ECDC4"
//             opacity="0.6"
//           />

//           {/* Left middle face */}
//           <Path
//             d="M 55 95 L 80 85 L 80 115 L 55 125 Z"
//             fill="#7B5FD9"
//             opacity="0.5"
//           />

//           {/* Left bottom face */}
//           <Path
//             d="M 55 125 L 80 115 L 80 150 L 55 165 Z"
//             fill="#B24BFF"
//             opacity="0.6"
//           />
//         </Svg>
//       </Animated.View>

//       {/* Home Indicator (iOS style) */}
//       {Platform.OS === 'ios' && (
//         <View style={styles.homeIndicator} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0a0e1a',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     shadowColor: '#64C8FF',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 30,
//     elevation: 10,
//   },
//   homeIndicator: {
//     position: 'absolute',
//     bottom: 10,
//     width: 134,
//     height: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     borderRadius: 100,
//   },
// });

// export default SplashScreen;
import React, { useEffect, useRef } from 'react';
import { View, Text, PanResponder, Animated, StyleSheet } from 'react-native';

export default function Logoscreen({ navigation }) {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 20, // detect horizontal swipe
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50) {
          // swipe left → go to v2
          navigation.navigate('v2');
        }
      },
    })
  ).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Auto navigate after 2s (optional)
      navigation.navigate('v2');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Text style={styles.text}>Logo Screen</Text>
      <Text style={styles.swipeText}>Swipe → to continue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 28, fontWeight: 'bold' },
  swipeText: { fontSize: 16, marginTop: 10, color: '#777' },
});
