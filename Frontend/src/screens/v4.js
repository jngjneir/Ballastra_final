
// // // import React from 'react';
// // // import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// // // export default function V4({ navigation }) {
// // //   return (
// // //     <View style={styles.container}>

// // //       {/* Background Pattern */}
// // //       <ImageBackground
// // //         source={{ uri: "https://i.ibb.co/4f4P3VK/blue-grid.png" }}
// // //         style={styles.bg}
// // //         resizeMode="cover"
// // //       >

// // //         {/* Top Language Bubble */}
// // //         <Text style={styles.welcomeText}>Welcome To Ballastra</Text>

// // //         {/* Right Side Character */}
// // //         <Image
// // //           source={{ uri: "https://i.ibb.co/6Hq0p7m/boy-right.png" }}
// // //           style={styles.rightCharacter}
// // //         />
// // //         <Text style={styles.rightBubble}>Sprache</Text>

// // //         {/* Left Side Character */}
// // //         <Image
// // //           source={{ uri: "https://i.ibb.co/4KYh3Cd/boy-left.png" }}
// // //           style={styles.leftCharacter}
// // //         />
// // //         <Text style={styles.leftBubble}>Lenguaje</Text>

// // //         {/* Next Button */}
// // //         <TouchableOpacity
// // //           style={styles.nextButton}
// // //           onPress={() => navigation.navigate("signin_up")}   // 👉 UPDATED HERE
// // //         >
// // //           <Text style={styles.nextText}>Next   →</Text>
// // //         </TouchableOpacity>

// // //       </ImageBackground>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#061228",
// // //   },
// // //   bg: {
// // //     width: "100%",
// // //     height: "100%",
// // //     justifyContent: "center",
// // //   },

// // //   // Top Title
// // //   welcomeText: {
// // //     position: "absolute",
// // //     top: 90,
// // //     alignSelf: "center",
// // //     color: "white",
// // //     fontSize: 18,
// // //     borderWidth: 1,
// // //     paddingVertical: 5,
// // //     paddingHorizontal: 20,
// // //     borderRadius: 40,
// // //     borderColor: "#ffffff90",
// // //   },

// // //   // Right Character
// // //   rightCharacter: {
// // //     width: 130,
// // //     height: 180,
// // //     position: "absolute",
// // //     top: 140,
// // //     right: -10,
// // //   },
// // //   rightBubble: {
// // //     position: "absolute",
// // //     top: 210,
// // //     right: 120,
// // //     backgroundColor: "#182B54",
// // //     color: "white",
// // //     paddingHorizontal: 15,
// // //     paddingVertical: 6,
// // //     borderRadius: 20,
// // //   },

// // //   // Left Character
// // //   leftCharacter: {
// // //     width: 130,
// // //     height: 180,
// // //     position: "absolute",
// // //     bottom: 130,
// // //     left: -10,
// // //   },
// // //   leftBubble: {
// // //     position: "absolute",
// // //     bottom: 220,
// // //     left: 110,
// // //     backgroundColor: "#182B54",
// // //     color: "white",
// // //     paddingHorizontal: 15,
// // //     paddingVertical: 6,
// // //     borderRadius: 20,
// // //   },

// // //   // Next Button
// // //   nextButton: {
// // //     position: "absolute",
// // //     bottom: 120,
// // //     alignSelf: "center",
// // //     backgroundColor: "#0C2A6C",
// // //     paddingHorizontal: 40,
// // //     paddingVertical: 15,
// // //     borderRadius: 30,
// // //     borderWidth: 1,
// // //     borderColor: "#1C4CFF",
// // //   },
// // //   nextText: {
// // //     color: "white",
// // //     fontSize: 16,
// // //   },
// // // });
// // import React, { useEffect, useRef } from 'react';

// // export default function LanguageSelection() {
// //   const characterRightRef = useRef(null);
// //   const characterLeftRef = useRef(null);
// //   const languageItemsRef = useRef([]);

// //   useEffect(() => {
// //     // Animate characters on mount
// //     const rightChar = characterRightRef.current;
// //     const leftChar = characterLeftRef.current;

// //     if (rightChar) {
// //       rightChar.style.animation = 'slideInRight 0.8s ease-out';
// //     }
// //     if (leftChar) {
// //       leftChar.style.animation = 'slideInLeft 0.8s ease-out';
// //     }

// //     // Animate language items with stagger
// //     languageItemsRef.current.forEach((item, index) => {
// //       if (item) {
// //         item.style.animation = `fadeInUp 0.5s ease-out ${0.3 + index * 0.1}s forwards`;
// //         item.style.opacity = '0';
// //       }
// //     });
// //   }, []);

// //   const handleLanguageSelect = (language) => {
// //     console.log('Selected language:', language);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <style>{keyframes}</style>
      
// //       {/* Background Pattern */}
// //       <div style={styles.gridPattern}></div>

// //       {/* Status Bar */}
// //       <div style={styles.statusBar}>
// //         <span style={styles.time}>9:41</span>
// //         <div style={styles.statusIcons}>
// //           <span style={styles.signal}>📶</span>
// //           <span style={styles.wifi}>📡</span>
// //           <span style={styles.battery}>🔋</span>
// //         </div>
// //       </div>

// //       {/* Welcome Header */}
// //       <div style={styles.welcomeContainer}>
// //         <div style={styles.welcomeBadge}>
// //           <span style={styles.welcomeText}>Welcome To Ballastra</span>
// //         </div>
// //       </div>

// //       {/* Right Character with Speech Bubble */}
// //       <div ref={characterRightRef} style={styles.rightCharacter}>
// //         <div style={styles.rightBubble}>Sprache</div>
// //         <div style={styles.characterRight}>👦</div>
// //       </div>

// //       {/* Language Selection List */}
// //       <div style={styles.languageList}>
// //         {[
// //           { flag: '🇬🇧', name: 'English', code: 'uk', native: '(English)' },
// //           { flag: '🇪🇬', name: 'Egypt', code: 'Syria', native: '(العربية)' },
// //           { flag: '🇮🇳', name: 'India', code: '', native: '(हिंदी)' },
// //           { flag: '🇵🇰', name: 'Pakistan', code: '', native: '(اردو)' },
// //           { flag: '🇧🇩', name: 'Bangladesh', code: '', native: '(বাংলাদেশ)' }
// //         ].map((lang, index) => (
// //           <button
// //             key={index}
// //             ref={el => languageItemsRef.current[index] = el}
// //             style={styles.languageItem}
// //             onClick={() => handleLanguageSelect(lang.name)}
// //             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
// //             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
// //           >
// //             <div style={styles.languageLeft}>
// //               <span style={styles.flag}>{lang.flag}</span>
// //               <span style={styles.languageName}>{lang.name}</span>
// //               {lang.code && <span style={styles.languageCode}>({lang.code})</span>}
// //             </div>
// //             <span style={styles.languageNative}>{lang.native}</span>
// //           </button>
// //         ))}
// //       </div>

// //       {/* Left Character with Speech Bubble */}
// //       <div ref={characterLeftRef} style={styles.leftCharacter}>
// //         <div style={styles.leftBubble}>Lenguaje</div>
// //         <div style={styles.characterLeft}>👦</div>
// //       </div>

// //       {/* Next Button */}
// //       <button 
// //         style={styles.nextButton}
// //         onMouseEnter={(e) => {
// //           e.currentTarget.style.transform = 'scale(1.05)';
// //           e.currentTarget.style.boxShadow = '0 0 20px rgba(28, 76, 255, 0.5)';
// //         }}
// //         onMouseLeave={(e) => {
// //           e.currentTarget.style.transform = 'scale(1)';
// //           e.currentTarget.style.boxShadow = '0 4px 15px rgba(28, 76, 255, 0.3)';
// //         }}
// //       >
// //         <span style={styles.nextText}>Next</span>
// //         <span style={styles.arrow}>→</span>
// //       </button>

// //       {/* Home Indicator */}
// //       <div style={styles.homeIndicator}></div>
// //     </div>
// //   );
// // }

// // const keyframes = `
// //   @keyframes slideInRight {
// //     from {
// //       transform: translateX(100px);
// //       opacity: 0;
// //     }
// //     to {
// //       transform: translateX(0);
// //       opacity: 1;
// //     }
// //   }

// //   @keyframes slideInLeft {
// //     from {
// //       transform: translateX(-100px);
// //       opacity: 0;
// //     }
// //     to {
// //       transform: translateX(0);
// //       opacity: 1;
// //     }
// //   }

// //   @keyframes fadeInUp {
// //     from {
// //       transform: translateY(20px);
// //       opacity: 0;
// //     }
// //     to {
// //       transform: translateY(0);
// //       opacity: 1;
// //     }
// //   }

// //   @keyframes pulse {
// //     0%, 100% {
// //       transform: scale(1);
// //     }
// //     50% {
// //       transform: scale(1.05);
// //     }
// //   }
// // `;

// // const styles = {
// //   container: {
// //     width: '375px',
// //     height: '812px',
// //     margin: '0 auto',
// //     backgroundColor: '#0a1628',
// //     position: 'relative',
// //     overflow: 'hidden',
// //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// //   },
// //   gridPattern: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundImage: `
// //       linear-gradient(rgba(28, 76, 255, 0.1) 1px, transparent 1px),
// //       linear-gradient(90deg, rgba(28, 76, 255, 0.1) 1px, transparent 1px)
// //     `,
// //     backgroundSize: '30px 30px',
// //   },
// //   statusBar: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     height: '44px',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '0 20px',
// //     zIndex: 100,
// //   },
// //   time: {
// //     color: 'white',
// //     fontSize: '15px',
// //     fontWeight: '600',
// //   },
// //   statusIcons: {
// //     display: 'flex',
// //     gap: '5px',
// //     fontSize: '14px',
// //   },
// //   signal: { filter: 'grayscale(1) brightness(2)' },
// //   wifi: { filter: 'grayscale(1) brightness(2)' },
// //   battery: { filter: 'grayscale(1) brightness(2)' },
// //   welcomeContainer: {
// //     position: 'absolute',
// //     top: '80px',
// //     left: 0,
// //     right: 0,
// //     display: 'flex',
// //     justifyContent: 'center',
// //     zIndex: 10,
// //   },
// //   welcomeBadge: {
// //     border: '1.5px solid rgba(255, 255, 255, 0.3)',
// //     borderRadius: '25px',
// //     padding: '8px 24px',
// //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// //     backdropFilter: 'blur(10px)',
// //   },
// //   welcomeText: {
// //     color: 'white',
// //     fontSize: '16px',
// //     fontWeight: '400',
// //     letterSpacing: '0.5px',
// //   },
// //   rightCharacter: {
// //     position: 'absolute',
// //     top: '140px',
// //     right: '20px',
// //     zIndex: 5,
// //   },
// //   rightBubble: {
// //     position: 'absolute',
// //     top: '50px',
// //     right: '80px',
// //     backgroundColor: '#1a3a6b',
// //     color: 'white',
// //     padding: '8px 18px',
// //     borderRadius: '18px',
// //     fontSize: '14px',
// //     whiteSpace: 'nowrap',
// //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
// //   },
// //   characterRight: {
// //     fontSize: '80px',
// //     filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
// //   },
// //   languageList: {
// //     position: 'absolute',
// //     top: '240px',
// //     left: '20px',
// //     right: '20px',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //     zIndex: 20,
// //   },
// //   languageItem: {
// //     backgroundColor: 'rgba(26, 58, 107, 0.4)',
// //     border: '1.5px solid rgba(28, 76, 255, 0.3)',
// //     borderRadius: '16px',
// //     padding: '16px 20px',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     backdropFilter: 'blur(10px)',
// //   },//
// //   languageLeft: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   flag: {
// //     fontSize: '24px',
// //   },
// //   languageName: {
// //     color: 'white',
// //     fontSize: '16px',
// //     fontWeight: '400',
// //   },
// //   languageCode: {
// //     color: 'rgba(255, 255, 255, 0.6)',
// //     fontSize: '14px',
// //   },
// //   languageNative: {
// //     color: 'rgba(255, 255, 255, 0.7)',
// //     fontSize: '15px',
// //   },
// //   leftCharacter: {
// //     position: 'absolute',
// //     bottom: '140px',
// //     left: '10px',
// //     zIndex: 5,
// //   },
// //   leftBubble: {
// //     position: 'absolute',
// //     bottom: '80px',
// //     left: '90px',
// //     backgroundColor: '#1a3a6b',
// //     color: 'white',
// //     padding: '8px 18px',
// //     borderRadius: '18px',
// //     fontSize: '14px',
// //     whiteSpace: 'nowrap',
// //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
// //   },
// //   characterLeft: {
// //     fontSize: '80px',
// //     filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
// //     transform: 'scaleX(-1)',
// //   },
// //   nextButton: {
// //     position: 'absolute',
// //     bottom: '100px',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     backgroundColor: '#1c4cff',
// //     border: 'none',
// //     borderRadius: '28px',
// //     padding: '14px 50px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '10px',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     boxShadow: '0 4px 15px rgba(28, 76, 255, 0.3)',
// //     zIndex: 30,
// //   },
// //   nextText: {
// //     color: 'white',
// //     fontSize: '16px',
// //     fontWeight: '500',
// //   },
// //   arrow: {
// //     color: 'white',
// //     fontSize: '18px',
// //     fontWeight: '400',
// //   },
// //   homeIndicator: {
// //     position: 'absolute',
// //     bottom: '8px',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     width: '134px',
// //     height: '5px',
// //     backgroundColor: 'white',
// //     borderRadius: '3px',
// //     opacity: 0.3,
// //   },
// // };


// import React, { useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
//   ScrollView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function LanguageSelection() {
//   const navigation = useNavigation();

//   const rightAnim = useRef(new Animated.Value(100)).current;
//   const leftAnim = useRef(new Animated.Value(-100)).current;

//   useEffect(() => {
//     Animated.timing(rightAnim, {
//       toValue: 0,
//       duration: 800,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(leftAnim, {
//       toValue: 0,
//       duration: 800,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const languages = [
//     { flag: "🇬🇧", name: "English", native: "(English)" },
//     { flag: "🇪🇬", name: "Egypt", native: "(العربية)" },
//     { flag: "🇮🇳", name: "India", native: "(हिंदी)" },
//     { flag: "🇵🇰", name: "Pakistan", native: "(اردو)" },
//     { flag: "🇧🇩", name: "Bangladesh", native: "(বাংলাদেশ)" },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Status bar */}
//       <View style={styles.statusBar}>
//         <Text style={styles.time}>9:41</Text>
//         <View style={styles.statusIcons}>
//           <Text style={styles.icon}>📶</Text>
//           <Text style={styles.icon}>📡</Text>
//           <Text style={styles.icon}>🔋</Text>
//         </View>
//       </View>

//       {/* Welcome */}
//       <View style={styles.welcomeContainer}>
//         <View style={styles.welcomeBadge}>
//           <Text style={styles.welcomeText}>Welcome To Ballastra</Text>
//         </View>
//       </View>

//       {/* Right character */}
//       <Animated.View
//         style={[
//           styles.rightCharacter,
//           { transform: [{ translateX: rightAnim }] },
//         ]}
//       >
//         <Text style={styles.rightBubble}>Sprache</Text>
//         <Text style={styles.character}>👦</Text>
//       </Animated.View>

//       {/* Language list */}
//       <ScrollView style={styles.languageList}>
//         {languages.map((item, index) => (
//           <TouchableOpacity key={index} style={styles.languageItem}>
//             <View style={styles.languageLeft}>
//               <Text style={styles.flag}>{item.flag}</Text>
//               <Text style={styles.languageName}>{item.name}</Text>
//             </View>
//             <Text style={styles.languageNative}>{item.native}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Left character */}
//       <Animated.View
//         style={[
//           styles.leftCharacter,
//           { transform: [{ translateX: leftAnim }] },
//         ]}
//       >
//         <Text style={styles.leftBubble}>Lenguaje</Text>
//         <Text style={styles.character}>👦</Text>
//       </Animated.View>

//       {/* Next button */}
//       <TouchableOpacity
//         style={styles.nextButton}
//         onPress={() => navigation.navigate("signin_up")}
//       >
//         <Text style={styles.nextText}>Next</Text>
//         <Text style={styles.arrow}>→</Text>
//       </TouchableOpacity>

//       {/* Home indicator */}
//       <View style={styles.homeIndicator}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 375,
//     height: 812,
//     backgroundColor: "#0a1628",
//     alignSelf: "center",
//     position: "relative",
//   },

//   /* STATUS BAR */
//   statusBar: {
//     height: 44,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   time: {
//     color: "white",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   statusIcons: {
//     flexDirection: "row",
//     gap: 5,
//   },
//   icon: {
//     color: "white",
//     fontSize: 14,
//   },

//   /* WELCOME */
//   welcomeContainer: {
//     alignItems: "center",
//     marginTop: 40,
//   },
//   welcomeBadge: {
//     borderWidth: 1.5,
//     borderColor: "rgba(255,255,255,0.3)",
//     borderRadius: 25,
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
//   welcomeText: {
//     color: "white",
//     fontSize: 16,
//   },

//   /* RIGHT CHARACTER */
//   rightCharacter: {
//     position: "absolute",
//     top: 140,
//     right: 20,
//     alignItems: "center",
//   },
//   rightBubble: {
//     position: "absolute",
//     top: 50,
//     right: 80,
//     backgroundColor: "#1a3a6b",
//     color: "white",
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//     borderRadius: 18,
//     fontSize: 14,
//   },

//   /* LEFT CHARACTER */
//   leftCharacter: {
//     position: "absolute",
//     bottom: 140,
//     left: 10,
//     alignItems: "center",
//   },
//   leftBubble: {
//     position: "absolute",
//     bottom: 80,
//     left: 90,
//     backgroundColor: "#1a3a6b",
//     color: "white",
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//     borderRadius: 18,
//     fontSize: 14,
//   },

//   /* CHARACTER */
//   character: {
//     fontSize: 80,
//     textShadowColor: "rgba(0,0,0,0.3)",
//     textShadowRadius: 8,
//   },

//   /* LANGUAGES */
//   languageList: {
//     marginTop: 260,
//     paddingHorizontal: 20,
//   },

//   languageItem: {
//     backgroundColor: "rgba(26, 58, 107, 0.4)",
//     borderWidth: 1.5,
//     borderColor: "rgba(28, 76, 255, 0.3)",
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 12,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   languageLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   flag: { fontSize: 24 },
//   languageName: { color: "white", fontSize: 16 },
//   languageNative: { color: "rgba(255,255,255,0.7)", fontSize: 15 },

//   /* NEXT BUTTON */
//   nextButton: {
//     position: "absolute",
//     bottom: 100,
//     left: "50%",
//     transform: [{ translateX: -90 }],
//     backgroundColor: "#1c4cff",
//     paddingVertical: 14,
//     paddingHorizontal: 50,
//     borderRadius: 28,
//     flexDirection: "row",
//     gap: 10,
//   },
//   nextText: { color: "white", fontSize: 16, fontWeight: "500" },
//   arrow: { color: "white", fontSize: 18 },

//   /* HOME INDICATOR */
//   homeIndicator: {
//     position: "absolute",
//     bottom: 8,
//     left: "50%",
//     transform: [{ translateX: -67 }],
//     width: 134,
//     height: 5,
//     backgroundColor: "white",
//     opacity: 0.3,
//     borderRadius: 3,
//   },
// });


import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LanguageSelection() {
  const navigation = useNavigation();

  const rightAnim = useRef(new Animated.Value(100)).current;
  const leftAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(rightAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(leftAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const languages = [
    { flag: "🇬🇧", name: "English", native: "(English)" },
    { flag: "🇪🇬", name: "Egypt", native: "(العربية)" },
    { flag: "🇮🇳", name: "India", native: "(हिंदी)" },
    { flag: "🇵🇰", name: "Pakistan", native: "(اردو)" },
    { flag: "🇧🇩", name: "Bangladesh", native: "(বাংলাদেশ)" },
  ];

  return (
    <View style={styles.container}>
      {/* Status bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Text style={styles.icon}>📶</Text>
          <Text style={styles.icon}>📡</Text>
          <Text style={styles.icon}>🔋</Text>
        </View>
      </View>

      {/* Welcome */}
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeBadge}>
          <Text style={styles.welcomeText}>Welcome To Ballastra</Text>
        </View>
      </View>

      {/* Right character */}
      <Animated.View
        style={[
          styles.rightCharacter,
          { transform: [{ translateX: rightAnim }] },
        ]}
      >

        <Image
          source={require("../../assets/Frame 68.png")}
          style={styles.characterImg}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Language list */}
      <ScrollView style={styles.languageList}>
        {languages.map((item, index) => (
          <TouchableOpacity key={index} style={styles.languageItem}>
            <View style={styles.languageLeft}>
              <Text style={styles.flag}>{item.flag}</Text>
              <Text style={styles.languageName}>{item.name}</Text>
            </View>
            <Text style={styles.languageNative}>{item.native}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Left character */}
      <Animated.View
        style={[
          styles.leftCharacter,
          { transform: [{ translateX: leftAnim }] },
        ]}
      >

        <Image
          source={require("../../assets/Frame 67.png")}
          style={styles.characterImg}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Next button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("signin_up")}
      >
        <Text style={styles.nextText}>Next</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>

      {/* Home indicator */}
      <View style={styles.homeIndicator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 865,
    backgroundColor: "#0a1628",
    alignSelf: "center",
    position: "relative",
  },

  /* STATUS BAR */
  statusBar: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  },
  time: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  statusIcons: {
    flexDirection: "row",
    gap: 5,
  },
  icon: {
    color: "white",
    fontSize: 14,
  },

  /* WELCOME */
  welcomeContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  welcomeBadge: {
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  welcomeText: {
    color: "white",
    fontSize: 16,
  },

  /* RIGHT CHARACTER */
  rightCharacter: {
    position: "absolute",
    top: 140,
    right: 15,
    alignItems: "center",
  },
  rightBubble: {
    position: "absolute",
    top: -10,
    right: 100,
    backgroundColor: "#1a3a6b",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
    fontSize: 14,
    zIndex: 2,
  },

  /* LEFT CHARACTER */
  leftCharacter: {
    position: "absolute",
    bottom: 150,
    left: 0,
    alignItems: "center",
  },
  leftBubble: {
    position: "absolute",
    top: -10,
    left: 100,
    backgroundColor: "#1a3a6b",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
    fontSize: 14,
    zIndex: 2,
  },

  /* CHARACTER IMAGE */
  characterImg: {
    width: 140,
    height: 140,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },

  /* LANGUAGES */
  languageList: {
    marginTop: 140,
    paddingHorizontal: 30,
  },

  languageItem: {
    backgroundColor: "rgba(26, 58, 107, 0.4)",
    borderWidth: 1.1,
    borderColor: "rgba(28, 76, 255, 0.3)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  flag: { fontSize: 24 },
  languageName: { color: "white", fontSize: 16 },
  languageNative: { color: "rgba(255,255,255,0.7)", fontSize: 15 },

  /* NEXT BUTTON */
  nextButton: {
    position: "absolute",
    bottom: 100,
    left: "50%",
    transform: [{ translateX: -90 }],
    backgroundColor: "#1c4cff",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 28,
    flexDirection: "row",
    gap: 10,
  },
  nextText: { color: "white", fontSize: 16, fontWeight: "500" },
  arrow: { color: "white", fontSize: 18 },

  /* HOME INDICATOR */
  homeIndicator: {
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: [{ translateX: -67 }],
    width: 134,
    height: 5,
    backgroundColor: "white",
    borderRadius: 3,
  },
});
