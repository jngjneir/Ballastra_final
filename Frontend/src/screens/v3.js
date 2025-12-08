// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Mic, Camera, Bell, ArrowRight } from 'lucide-react';

// // // // // export default function PermissionsScreen() {
// // // // //   const [permissions, setPermissions] = useState({
// // // // //     mic: false,
// // // // //     camera: false,
// // // // //     notification: false
// // // // //   });

// // // // //   const togglePermission = (type) => {
// // // // //     setPermissions(prev => ({
// // // // //       ...prev,
// // // // //       [type]: !prev[type]
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative min-h-screen bg-[#0a0e27] overflow-hidden flex flex-col">
// // // // //       {/* Animated Grid Background */}
// // // // //       <div className="absolute inset-0 opacity-30">
// // // // //         <div className="absolute inset-0" style={{
// // // // //           backgroundImage: `
// // // // //             linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
// // // // //             linear-gradient(180deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
// // // // //           `,
// // // // //           backgroundSize: '40px 40px',
// // // // //           animation: 'grid-move 20s linear infinite'
// // // // //         }}></div>
// // // // //       </div>

// // // // //       {/* Status Bar */}
// // // // //       <div className="relative z-10 flex justify-between items-center px-6 pt-3 pb-2 text-white text-sm">
// // // // //         <span className="font-semibold">9:41</span>
// // // // //         <div className="flex items-center gap-1">
// // // // //           <div className="flex flex-col gap-0.5">
// // // // //             <div className="w-0.5 h-1 bg-white"></div>
// // // // //             <div className="w-0.5 h-1.5 bg-white"></div>
// // // // //             <div className="w-0.5 h-2 bg-white"></div>
// // // // //             <div className="w-0.5 h-2.5 bg-white"></div>
// // // // //           </div>
// // // // //           <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
// // // // //             <path d="M1 3.5C1 2.67 1.67 2 2.5 2h11c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-11C1.67 10 1 9.33 1 8.5v-5z"/>
// // // // //             <path d="M0 4.5C0 4.22 0.22 4 0.5 4h.5v4h-.5C0.22 8 0 7.78 0 7.5v-3z" opacity="0.4"/>
// // // // //           </svg>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Main Content */}
// // // // //       <div className="relative z-10 flex-1 flex flex-col items-center px-6 pt-12">
// // // // //         {/* Logo */}
// // // // //         <div className="mb-16">
// // // // //           <div className="border-2 border-white rounded-full px-8 py-3">
// // // // //             <h1 className="text-white text-lg font-light tracking-wide">Welcome To Ballastra</h1>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Permission Cards */}
// // // // //         <div className="w-full max-w-md space-y-4 flex-1">
// // // // //           {/* Mic Permission */}
// // // // //           <div className="bg-[#1a2847] rounded-3xl p-5 border border-[#2a3f6f] backdrop-blur-sm transition-all duration-300 hover:border-[#3b5998]">
// // // // //             <div className="flex items-start justify-between">
// // // // //               <div className="flex items-start gap-4 flex-1">
// // // // //                 <div className="mt-1">
// // // // //                   <Mic className="w-5 h-5 text-white" />
// // // // //                 </div>
// // // // //                 <div className="flex-1">
// // // // //                   <h3 className="text-white text-base font-semibold mb-1">Mic</h3>
// // // // //                   <p className="text-gray-400 text-xs leading-relaxed">
// // // // //                     Enable mic access to talk and share your voice in real time.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <button
// // // // //                 onClick={() => togglePermission('mic')}
// // // // //                 className="ml-4 mt-1"
// // // // //               >
// // // // //                 <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
// // // // //                   permissions.mic ? 'bg-blue-500' : 'bg-gray-600'
// // // // //                 }`}>
// // // // //                   <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
// // // // //                     permissions.mic ? 'translate-x-6' : 'translate-x-0.5'
// // // // //                   }`}></div>
// // // // //                 </div>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Camera Permission */}
// // // // //           <div className="bg-[#1a2847] rounded-3xl p-5 border border-[#2a3f6f] backdrop-blur-sm transition-all duration-300 hover:border-[#3b5998]">
// // // // //             <div className="flex items-start justify-between">
// // // // //               <div className="flex items-start gap-4 flex-1">
// // // // //                 <div className="mt-1">
// // // // //                   <Camera className="w-5 h-5 text-white" />
// // // // //                 </div>
// // // // //                 <div className="flex-1">
// // // // //                   <h3 className="text-white text-base font-semibold mb-1">Camera</h3>
// // // // //                   <p className="text-gray-400 text-xs leading-relaxed">
// // // // //                     Allow camera use for video calls and face-to-face moments.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <button
// // // // //                 onClick={() => togglePermission('camera')}
// // // // //                 className="ml-4 mt-1"
// // // // //               >
// // // // //                 <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
// // // // //                   permissions.camera ? 'bg-blue-500' : 'bg-gray-600'
// // // // //                 }`}>
// // // // //                   <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
// // // // //                     permissions.camera ? 'translate-x-6' : 'translate-x-0.5'
// // // // //                   }`}></div>
// // // // //                 </div>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Notification Permission */}
// // // // //           <div className="bg-[#1a2847] rounded-3xl p-5 border border-[#2a3f6f] backdrop-blur-sm transition-all duration-300 hover:border-[#3b5998]">
// // // // //             <div className="flex items-start justify-between">
// // // // //               <div className="flex items-start gap-4 flex-1">
// // // // //                 <div className="mt-1">
// // // // //                   <Bell className="w-5 h-5 text-white" />
// // // // //                 </div>
// // // // //                 <div className="flex-1">
// // // // //                   <h3 className="text-white text-base font-semibold mb-1">Notification</h3>
// // // // //                   <p className="text-gray-400 text-xs leading-relaxed">
// // // // //                     Stay updated with messages, calls, and Nexus alerts instantly.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <button
// // // // //                 onClick={() => togglePermission('notification')}
// // // // //                 className="ml-4 mt-1"
// // // // //               >
// // // // //                 <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
// // // // //                   permissions.notification ? 'bg-blue-500' : 'bg-gray-600'
// // // // //                 }`}>
// // // // //                   <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
// // // // //                     permissions.notification ? 'translate-x-6' : 'translate-x-0.5'
// // // // //                   }`}></div>
// // // // //                 </div>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Next Button */}
// // // // //         <div className="w-full max-w-md py-8 pb-12">
// // // // //           <button className="w-full bg-[#1a2847] hover:bg-[#243a5e] border border-[#2a3f6f] text-white rounded-full py-4 px-8 flex items-center justify-center gap-3 transition-all duration-300 hover:border-blue-500 group">
// // // // //             <span className="text-base font-medium">Next</span>
// // // // //             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Bottom Indicator */}
// // // // //       <div className="relative z-10 flex justify-center pb-2">
// // // // //         <div className="w-32 h-1 bg-white rounded-full"></div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         @keyframes grid-move {
// // // // //           0% {
// // // // //             transform: translate(0, 0);
// // // // //           }
// // // // //           100% {
// // // // //             transform: translate(40px, 40px);
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useState } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // // } from 'react-native';
// // // // // 👇 IMPORTANT: React Native साठी हा package
// // // // import { Mic, Camera, Bell, ArrowRight } from 'lucide-react-native';

// // // // export default function V3({ navigation }) {
// // // //   const [permissions, setPermissions] = useState({
// // // //     mic: false,
// // // //     camera: false,
// // // //     notification: false,
// // // //   });

// // // //   const togglePermission = (type) => {
// // // //     setPermissions((prev) => ({
// // // //       ...prev,
// // // //       [type]: !prev[type],
// // // //     }));
// // // //   };

// // // //   const handleNext = () => {
// // // //     // इथे पुढची स्क्रीन दे – Login / Home वगैरे
// // // //     navigation.navigate('Login'); // हवं असेल तर 'Home' करा
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#0a0e27" />

// // // //       {/* Fake status bar */}
// // // //       <View style={styles.topBar}>
// // // //         <Text style={styles.timeText}>9:41</Text>
// // // //         <View style={styles.statusRight}>
// // // //           <View style={styles.signalWrapper}>
// // // //             <View style={[styles.signalBar, { height: 4 }]} />
// // // //             <View style={[styles.signalBar, { height: 6 }]} />
// // // //             <View style={[styles.signalBar, { height: 8 }]} />
// // // //             <View style={[styles.signalBar, { height: 10 }]} />
// // // //           </View>
// // // //           <View style={styles.battery}>
// // // //             <View style={styles.batteryBody} />
// // // //             <View style={styles.batteryCap} />
// // // //           </View>
// // // //         </View>
// // // //       </View>

// // // //       {/* Simple grid background using lines */}
// // // //       <View style={styles.gridBackground}>
// // // //         {Array.from({ length: 20 }).map((_, i) => (
// // // //           <View
// // // //             key={`h-${i}`}
// // // //             style={[styles.gridLine, styles.horizontalLine, { top: i * 40 }]}
// // // //           />
// // // //         ))}
// // // //         {Array.from({ length: 10 }).map((_, i) => (
// // // //           <View
// // // //             key={`v-${i}`}
// // // //             style={[styles.gridLine, styles.verticalLine, { left: i * 40 }]}
// // // //           />
// // // //         ))}
// // // //       </View>

// // // //       {/* Logo */}
// // // //       <View style={styles.logoWrapper}>
// // // //         <View style={styles.logoBorder}>
// // // //           <Text style={styles.logoText}>Welcome To Ballastra</Text>
// // // //         </View>
// // // //       </View>

// // // //       {/* Permission cards */}
// // // //       <View style={styles.cardsWrapper}>
// // // //         {/* Mic */}
// // // //         <View style={styles.card}>
// // // //           <View style={styles.cardRow}>
// // // //             <View style={styles.iconAndText}>
// // // //               <View style={styles.iconWrapper}>
// // // //                 <Mic size={20} color="#ffffff" />
// // // //               </View>
// // // //               <View style={styles.textWrapper}>
// // // //                 <Text style={styles.cardTitle}>Mic</Text>
// // // //                 <Text style={styles.cardDesc}>
// // // //                   Enable mic access to talk and share your voice in real time.
// // // //                 </Text>
// // // //               </View>
// // // //             </View>
// // // //             <TouchableOpacity
// // // //               onPress={() => togglePermission('mic')}
// // // //               style={styles.switchWrapper}
// // // //               activeOpacity={0.8}
// // // //             >
// // // //               <View
// // // //                 style={[
// // // //                   styles.switch,
// // // //                   permissions.mic && styles.switchOn,
// // // //                 ]}
// // // //               >
// // // //                 <View
// // // //                   style={[
// // // //                     styles.knob,
// // // //                     permissions.mic && styles.knobOn,
// // // //                   ]}
// // // //                 />
// // // //               </View>
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         </View>

// // // //         {/* Camera */}
// // // //         <View style={styles.card}>
// // // //           <View style={styles.cardRow}>
// // // //             <View style={styles.iconAndText}>
// // // //               <View style={styles.iconWrapper}>
// // // //                 <Camera size={20} color="#ffffff" />
// // // //               </View>
// // // //               <View style={styles.textWrapper}>
// // // //                 <Text style={styles.cardTitle}>Camera</Text>
// // // //                 <Text style={styles.cardDesc}>
// // // //                   Allow camera use for video calls and face-to-face moments.
// // // //                 </Text>
// // // //               </View>
// // // //             </View>
// // // //             <TouchableOpacity
// // // //               onPress={() => togglePermission('camera')}
// // // //               style={styles.switchWrapper}
// // // //               activeOpacity={0.8}
// // // //             >
// // // //               <View
// // // //                 style={[
// // // //                   styles.switch,
// // // //                   permissions.camera && styles.switchOn,
// // // //                 ]}
// // // //               >
// // // //                 <View
// // // //                   style={[
// // // //                     styles.knob,
// // // //                     permissions.camera && styles.knobOn,
// // // //                   ]}
// // // //                 />
// // // //               </View>
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         </View>

// // // //         {/* Notification */}
// // // //         <View style={styles.card}>
// // // //           <View style={styles.cardRow}>
// // // //             <View style={styles.iconAndText}>
// // // //               <View style={styles.iconWrapper}>
// // // //                 <Bell size={20} color="#ffffff" />
// // // //               </View>
// // // //               <View style={styles.textWrapper}>
// // // //                 <Text style={styles.cardTitle}>Notification</Text>
// // // //                 <Text style={styles.cardDesc}>
// // // //                   Stay updated with messages, calls, and Nexus alerts instantly.
// // // //                 </Text>
// // // //               </View>
// // // //             </View>
// // // //             <TouchableOpacity
// // // //               onPress={() => togglePermission('notification')}
// // // //               style={styles.switchWrapper}
// // // //               activeOpacity={0.8}
// // // //             >
// // // //               <View
// // // //                 style={[
// // // //                   styles.switch,
// // // //                   permissions.notification && styles.switchOn,
// // // //                 ]}
// // // //               >
// // // //                 <View
// // // //                   style={[
// // // //                     styles.knob,
// // // //                     permissions.notification && styles.knobOn,
// // // //                   ]}
// // // //                 />
// // // //               </View>
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         </View>
// // // //       </View>

// // // //       {/* Next Button */}
// // // //       <View style={styles.nextWrapper}>
// // // //         <TouchableOpacity
// // // //           style={styles.nextButton}
// // // //           onPress={handleNext}
// // // //           activeOpacity={0.9}
// // // //         >
// // // //           <Text style={styles.nextText}>Next</Text>
// // // //           <ArrowRight size={20} color="#ffffff" />
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       {/* Bottom indicator */}
// // // //       <View style={styles.bottomIndicatorWrapper}>
// // // //         <View style={styles.bottomIndicator} />
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#0a0e27',
// // // //     paddingHorizontal: 24,
// // // //     paddingTop: 10,
// // // //   },
// // // //   topBar: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: 12,
// // // //     zIndex: 10,
// // // //   },
// // // //   timeText: {
// // // //     color: 'white',
// // // //     fontSize: 14,
// // // //     fontWeight: '600',
// // // //   },
// // // //   statusRight: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   signalWrapper: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'flex-end',
// // // //     marginRight: 8,
// // // //   },
// // // //   signalBar: {
// // // //     width: 2,
// // // //     backgroundColor: 'white',
// // // //     marginHorizontal: 1,
// // // //     borderRadius: 1,
// // // //   },
// // // //   battery: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   batteryBody: {
// // // //     width: 18,
// // // //     height: 10,
// // // //     borderWidth: 1,
// // // //     borderColor: 'white',
// // // //     borderRadius: 2,
// // // //   },
// // // //   batteryCap: {
// // // //     width: 2,
// // // //     height: 6,
// // // //     backgroundColor: 'white',
// // // //     marginLeft: 1,
// // // //     borderRadius: 1,
// // // //   },
// // // //   gridBackground: {
// // // //     position: 'absolute',
// // // //     top: 40,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 80,
// // // //     opacity: 0.18,
// // // //   },
// // // //   gridLine: {
// // // //     position: 'absolute',
// // // //     backgroundColor: '#3b82f6',
// // // //   },
// // // //   horizontalLine: {
// // // //     height: 1,
// // // //     width: '100%',
// // // //   },
// // // //   verticalLine: {
// // // //     width: 1,
// // // //     height: '100%',
// // // //   },
// // // //   logoWrapper: {
// // // //     alignItems: 'center',
// // // //     marginTop: 24,
// // // //     marginBottom: 40,
// // // //     zIndex: 5,
// // // //   },
// // // //   logoBorder: {
// // // //     borderWidth: 2,
// // // //     borderColor: 'white',
// // // //     borderRadius: 999,
// // // //     paddingVertical: 10,
// // // //     paddingHorizontal: 32,
// // // //   },
// // // //   logoText: {
// // // //     color: 'white',
// // // //     fontSize: 18,
// // // //     fontWeight: '300',
// // // //     letterSpacing: 1,
// // // //   },
// // // //   cardsWrapper: {
// // // //     flex: 1,
// // // //     width: '100%',
// // // //     zIndex: 5,
// // // //   },
// // // //   card: {
// // // //     backgroundColor: '#1a2847',
// // // //     borderRadius: 24,
// // // //     padding: 16,
// // // //     borderWidth: 1,
// // // //     borderColor: '#2a3f6f',
// // // //     marginBottom: 12,
// // // //   },
// // // //   cardRow: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'flex-start',
// // // //   },
// // // //   iconAndText: {
// // // //     flexDirection: 'row',
// // // //     flex: 1,
// // // //   },
// // // //   iconWrapper: {
// // // //     marginRight: 12,
// // // //     marginTop: 4,
// // // //   },
// // // //   textWrapper: {
// // // //     flex: 1,
// // // //   },
// // // //   cardTitle: {
// // // //     color: 'white',
// // // //     fontSize: 14,
// // // //     fontWeight: '600',
// // // //     marginBottom: 4,
// // // //   },
// // // //   cardDesc: {
// // // //     color: '#9ca3af',
// // // //     fontSize: 11,
// // // //     lineHeight: 16,
// // // //   },
// // // //   switchWrapper: {
// // // //     marginLeft: 12,
// // // //     marginTop: 4,
// // // //   },
// // // //   switch: {
// // // //     width: 48,
// // // //     height: 24,
// // // //     borderRadius: 999,
// // // //     backgroundColor: '#4b5563',
// // // //     justifyContent: 'center',
// // // //     paddingHorizontal: 2,
// // // //   },
// // // //   switchOn: {
// // // //     backgroundColor: '#3b82f6',
// // // //   },
// // // //   knob: {
// // // //     width: 20,
// // // //     height: 20,
// // // //     borderRadius: 999,
// // // //     backgroundColor: 'white',
// // // //     transform: [{ translateX: 0 }],
// // // //   },
// // // //   knobOn: {
// // // //     transform: [{ translateX: 22 }],
// // // //   },
// // // //   nextWrapper: {
// // // //     width: '100%',
// // // //     paddingVertical: 16,
// // // //     zIndex: 5,
// // // //   },
// // // //   nextButton: {
// // // //     width: '100%',
// // // //     backgroundColor: '#1a2847',
// // // //     borderRadius: 999,
// // // //     paddingVertical: 14,
// // // //     paddingHorizontal: 24,
// // // //     borderWidth: 1,
// // // //     borderColor: '#2a3f6f',
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   nextText: {
// // // //     color: 'white',
// // // //     fontSize: 15,
// // // //     fontWeight: '500',
// // // //     marginRight: 8,
// // // //   },
// // // //   bottomIndicatorWrapper: {
// // // //     alignItems: 'center',
// // // //     marginBottom: 8,
// // // //     zIndex: 5,
// // // //   },
// // // //   bottomIndicator: {
// // // //     width: 120,
// // // //     height: 4,
// // // //     backgroundColor: 'white',
// // // //     borderRadius: 999,
// // // //   },
// // // // });


// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   StatusBar,
// // // } from 'react-native';
// // // import { Ionicons } from '@expo/vector-icons';

// // // export default function V3({ navigation }) {
// // //   const [permissions, setPermissions] = useState({
// // //     mic: false,
// // //     camera: false,
// // //     notification: false,
// // //   });

// // //   const togglePermission = (type) => {
// // //     setPermissions((prev) => ({
// // //       ...prev,
// // //       [type]: !prev[type],
// // //     }));
// // //   };

// // //   const handleNext = () => {
// // //     navigation.navigate('Login');
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#0a0e27" />

// // //       {/* Status bar mimic */}
// // //       <View style={styles.topBar}>
// // //         <Text style={styles.timeText}>9:41</Text>
// // //         <View style={styles.statusRight}>
// // //           <Ionicons name="cellular" size={18} color="white" />
// // //           <Ionicons name="wifi" size={18} color="white" />
// // //           <Ionicons name="battery-full" size={20} color="white" />
// // //         </View>
// // //       </View>

// // //       {/* Logo */}
// // //       <View style={styles.logoWrapper}>
// // //         <View style={styles.logoBorder}>
// // //           <Text style={styles.logoText}>Welcome To Ballastra</Text>
// // //         </View>
// // //       </View>

// // //       {/* Permission Cards */}
// // //       <View style={styles.cardsWrapper}>
        
// // //         {/* Mic */}
// // //         <View style={styles.card}>
// // //           <View style={styles.cardRow}>
// // //             <View style={styles.iconAndText}>
// // //               <Ionicons name="mic" size={20} color="white" style={styles.icon} />
// // //               <View style={{ flex: 1 }}>
// // //                 <Text style={styles.cardTitle}>Mic</Text>
// // //                 <Text style={styles.cardDesc}>
// // //                   Enable mic access for real-time voice interaction.
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             <TouchableOpacity
// // //               onPress={() => togglePermission('mic')}
// // //               style={styles.switchWrapper}
// // //             >
// // //               <View
// // //                 style={[
// // //                   styles.switch,
// // //                   permissions.mic && styles.switchOn,
// // //                 ]}
// // //               >
// // //                 <View
// // //                   style={[
// // //                     styles.knob,
// // //                     permissions.mic && styles.knobOn,
// // //                   ]}
// // //                 />
// // //               </View>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Camera */}
// // //         <View style={styles.card}>
// // //           <View style={styles.cardRow}>
// // //             <View style={styles.iconAndText}>
// // //               <Ionicons name="camera" size={20} color="white" style={styles.icon} />
// // //               <View style={{ flex: 1 }}>
// // //                 <Text style={styles.cardTitle}>Camera</Text>
// // //                 <Text style={styles.cardDesc}>
// // //                   Allow camera for video calls and face-to-face moments.
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             <TouchableOpacity
// // //               onPress={() => togglePermission('camera')}
// // //               style={styles.switchWrapper}
// // //             >
// // //               <View
// // //                 style={[
// // //                   styles.switch,
// // //                   permissions.camera && styles.switchOn,
// // //                 ]}
// // //               >
// // //                 <View
// // //                   style={[
// // //                     styles.knob,
// // //                     permissions.camera && styles.knobOn,
// // //                   ]}
// // //                 />
// // //               </View>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Notification */}
// // //         <View style={styles.card}>
// // //           <View style={styles.cardRow}>
// // //             <View style={styles.iconAndText}>
// // //               <Ionicons name="notifications" size={20} color="white" style={styles.icon} />
// // //               <View style={{ flex: 1 }}>
// // //                 <Text style={styles.cardTitle}>Notifications</Text>
// // //                 <Text style={styles.cardDesc}>
// // //                   Stay updated with alerts, messages, and calls.
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             <TouchableOpacity
// // //               onPress={() => togglePermission('notification')}
// // //               style={styles.switchWrapper}
// // //             >
// // //               <View
// // //                 style={[
// // //                   styles.switch,
// // //                   permissions.notification && styles.switchOn,
// // //                 ]}
// // //               >
// // //                 <View
// // //                   style={[
// // //                     styles.knob,
// // //                     permissions.notification && styles.knobOn,
// // //                   ]}
// // //                 />
// // //               </View>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //       </View>

// // //       {/* NEXT BUTTON */}
// // //       <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
// // //         <Text style={styles.nextText}>Next</Text>
// // //         <Ionicons name="arrow-forward" size={20} color="white" />
// // //       </TouchableOpacity>

// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#0a0e27',
// // //     padding: 20,
// // //   },
// // //   topBar: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     paddingVertical: 10,
// // //   },
// // //   timeText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //   },
// // //   statusRight: {
// // //     flexDirection: 'row',
// // //     gap: 8,
// // //   },

// // //   logoWrapper: { alignItems: 'center', marginTop: 20, marginBottom: 40 },
// // //   logoBorder: {
// // //     borderWidth: 2,
// // //     borderColor: 'white',
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 30,
// // //     borderRadius: 50,
// // //   },
// // //   logoText: { color: 'white', fontSize: 18 },

// // //   cardsWrapper: { gap: 16 },

// // //   card: {
// // //     backgroundColor: '#1a2847',
// // //     padding: 16,
// // //     borderRadius: 20,
// // //     borderWidth: 1,
// // //     borderColor: '#2a3f6f',
// // //   },
// // //   cardRow: { flexDirection: 'row', justifyContent: 'space-between' },
// // //   iconAndText: { flexDirection: 'row', flex: 1 },
// // //   icon: { marginRight: 12, marginTop: 4 },
// // //   cardTitle: { color: 'white', fontSize: 16, fontWeight: '600' },
// // //   cardDesc: { color: '#9ca3af', fontSize: 12, marginTop: 4 },

// // //   switchWrapper: {},
// // //   switch: {
// // //     width: 50,
// // //     height: 26,
// // //     backgroundColor: '#555',
// // //     borderRadius: 20,
// // //     justifyContent: 'center',
// // //     paddingHorizontal: 2,
// // //   },
// // //   switchOn: {
// // //     backgroundColor: '#3b82f6',
// // //   },
// // //   knob: {
// // //     width: 22,
// // //     height: 22,
// // //     backgroundColor: 'white',
// // //     borderRadius: 20,
// // //   },
// // //   knobOn: {
// // //     transform: [{ translateX: 24 }],
// // //   },

// // //   nextButton: {
// // //     marginTop: 40,
// // //     backgroundColor: '#1a2847',
// // //     paddingVertical: 14,
// // //     borderRadius: 50,
// // //     borderWidth: 1,
// // //     borderColor: '#2a3f6f',
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     gap: 10,
// // //   },
// // //   nextText: { color: 'white', fontSize: 17 },
// // // });


// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   StatusBar,
// // // } from 'react-native';
// // // import { Ionicons } from '@expo/vector-icons';

// // // export default function V3({ navigation }) {
// // //   const [permissions, setPermissions] = useState({
// // //     mic: false,
// // //     camera: false,
// // //     notification: false,
// // //   });

// // //   const togglePermission = (type) => {
// // //     setPermissions((prev) => ({
// // //       ...prev,
// // //       [type]: !prev[type],
// // //     }));
// // //   };

// // //   const handleNext = () => {
// // //     navigation.navigate('Login');
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#0a0e27" />

// // //       {/* Top Status Bar */}
// // //       <View style={styles.topBar}>
// // //         <Text style={styles.timeText}>9:41</Text>

// // //         <View style={styles.statusRight}>
// // //           <Ionicons name="cellular" size={18} color="white" style={styles.statusIcon}/>
// // //           <Ionicons name="wifi" size={18} color="white" style={styles.statusIcon}/>
// // //           <Ionicons name="battery-full" size={22} color="white" />
// // //         </View>
// // //       </View>

// // //       {/* App Logo */}
// // //       <View style={styles.logoWrapper}>
// // //         <View style={styles.logoBorder}>
// // //           <Text style={styles.logoText}>Welcome To Ballastra</Text>
// // //         </View>
// // //       </View>

// // //       {/* Permission Cards */}
// // //       <View style={styles.cardsWrapper}>

// // //         {/* Mic Card */}
// // //         <View style={styles.card}>
// // //           <View style={styles.cardRow}>
// // //             <View style={styles.iconAndText}>
// // //               <Ionicons name="mic" size={22} color="white" style={styles.icon} />
// // //               <View style={{ flex: 1 }}>
// // //                 <Text style={styles.cardTitle}>Mic</Text>
// // //                 <Text style={styles.cardDesc}>
// // //                   Enable mic access for real-time voice interaction.
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             {/* Switch */}
// // //             <TouchableOpacity onPress={() => togglePermission('mic')} style={styles.switchWrapper}>
// // //               <View style={[styles.switch, permissions.mic && styles.switchOn]}>
// // //                 <View style={[styles.knob, permissions.mic && styles.knobOn]} />
// // //               </View>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Camera Card */}
// // //         <View style={styles.card}>
// // //           <View style={styles.cardRow}>
// // //             <View style={styles.iconAndText}>
// // //               <Ionicons name="camera" size={22} color="white" style={styles.icon} />
// // //               <View style={{ flex: 1 }}>
// // //                 <Text style={styles.cardTitle}>Camera</Text>
// // //                 <Text style={styles.cardDesc}>
// // //                   Allow camera access for video calls and face-to-face moments.
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             <TouchableOpacity onPress={() => togglePermission('camera')} style={styles.switchWrapper}>
// // //               <View style={[styles.switch, permissions.camera && styles.switchOn]}>
// // //                 <View style={[styles.knob, permissions.camera && styles.knobOn]} />
// // //               </View>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Notification Card */}
// // //         <View style={styles.card}>
// // //           <View style={styles.cardRow}>
// // //             <View style={styles.iconAndText}>
// // //               <Ionicons name="notifications" size={22} color="white" style={styles.icon} />
// // //               <View style={{ flex: 1 }}>
// // //                 <Text style={styles.cardTitle}>Notification</Text>
// // //                 <Text style={styles.cardDesc}>
// // //                   Stay updated with messages, calls, and Nexus alerts instantly.
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             <TouchableOpacity onPress={() => togglePermission('notification')} style={styles.switchWrapper}>
// // //               <View style={[styles.switch, permissions.notification && styles.switchOn]}>
// // //                 <View style={[styles.knob, permissions.notification && styles.knobOn]} />
// // //               </View>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>
// // //       </View>

// // //       {/* NEXT Button */}
// // //       <View style={styles.nextWrapper}>
// // //         <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
// // //           <Text style={styles.nextText}>Next</Text>
// // //           <Ionicons name="arrow-forward" size={20} color="white" />
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* Bottom Bar */}
// // //       <View style={styles.bottomIndicatorWrapper}>
// // //         <View style={styles.bottomIndicator} />
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // /* ------------------ STYLES ------------------ */

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#0a0e27',
// // //     paddingHorizontal: 24,
// // //     paddingTop: 10,
// // //   },

// // //   /* Top Bar */
// // //   topBar: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   timeText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //   },
// // //   statusRight: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   statusIcon: {
// // //     marginRight: 6,
// // //   },

// // //   /* Logo */
// // //   logoWrapper: {
// // //     alignItems: 'center',
// // //     marginTop: 20,
// // //     marginBottom: 40,
// // //   },
// // //   logoBorder: {
// // //     borderWidth: 2,
// // //     borderColor: 'white',
// // //     borderRadius: 999,
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 32,
// // //   },
// // //   logoText: {
// // //     color: 'white',
// // //     fontSize: 18,
// // //     fontWeight: '300',
// // //     letterSpacing: 1,
// // //   },

// // //   /* Cards */
// // //   cardsWrapper: {
// // //     flex: 1,
// // //     width: '100%',
// // //   },
// // //   card: {
// // //     backgroundColor: '#1a2847',
// // //     borderRadius: 22,
// // //     padding: 18,
// // //     borderWidth: 1,
// // //     borderColor: '#2a3f6f',
// // //     marginBottom: 14,
// // //   },
// // //   cardRow: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //   },
// // //   iconAndText: {
// // //     flexDirection: 'row',
// // //     flex: 1,
// // //   },
// // //   icon: {
// // //     marginRight: 14,
// // //     marginTop: 4,
// // //   },
// // //   cardTitle: {
// // //     color: 'white',
// // //     fontSize: 15,
// // //     fontWeight: '600',
// // //     marginBottom: 4,
// // //   },
// // //   cardDesc: {
// // //     color: '#9ca3af',
// // //     fontSize: 12,
// // //     lineHeight: 18,
// // //   },

// // //   /* Switch */
// // //   switchWrapper: {
// // //     marginLeft: 12,
// // //     justifyContent: 'center',
// // //   },
// // //   switch: {
// // //     width: 50,
// // //     height: 26,
// // //     borderRadius: 20,
// // //     backgroundColor: '#4b5563',
// // //     paddingHorizontal: 3,
// // //     justifyContent: 'center',
// // //   },
// // //   switchOn: {
// // //     backgroundColor: '#3b82f6',
// // //   },
// // //   knob: {
// // //     width: 20,
// // //     height: 20,
// // //     backgroundColor: 'white',
// // //     borderRadius: 999,
// // //     transform: [{ translateX: 0 }],
// // //   },
// // //   knobOn: {
// // //     transform: [{ translateX: 22 }],
// // //   },

// // //   /* Next Button */
// // //   nextWrapper: {
// // //     marginTop: 20,
// // //     width: '100%',
// // //   },
// // //   nextButton: {
// // //     backgroundColor: '#1a2847',
// // //     borderRadius: 999,
// // //     borderWidth: 1,
// // //     borderColor: '#2a3f6f',
// // //     paddingVertical: 15,
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   nextText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //     fontWeight: '500',
// // //     marginRight: 6,
// // //   },

// // //   /* Bottom Bar */
// // //   bottomIndicatorWrapper: {
// // //     alignItems: 'center',
// // //     marginVertical: 10,
// // //   },
// // //   bottomIndicator: {
// // //     width: 120,
// // //     height: 4,
// // //     backgroundColor: 'white',
// // //     borderRadius: 999,
// // //   },
// // // });
// // import React from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';

// // export default function v3() {
// //   const navigation = useNavigation();

// //   // ✅ UPDATED HERE ONLY
// //   const handleNext = () => {
// //     navigation.navigate('v4');   // previously "Login"
// //   };

// //   return (
// //     <View style={styles.container}>

// //       <Image
// //         source={require('../assets/v3.png')}
// //         style={styles.image}
// //         resizeMode="contain"
// //       />

// //       <Text style={styles.title}>Instant Chat, Instant Connect</Text>

// //       <Text style={styles.subtitle}>
// //         Share moments, express emotions & stay connected — all in one place.
// //       </Text>

// //       <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
// //         <Text style={styles.nextText}>Next →</Text>
// //       </TouchableOpacity>

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   image: {
// //     width: 300,
// //     height: 300,
// //     marginTop: 40,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: '700',
// //     textAlign: 'center',
// //     marginTop: 20,
// //     color: '#111',
// //   },
// //   subtitle: {
// //     fontSize: 15,
// //     textAlign: 'center',
// //     marginTop: 10,
// //     color: '#666',
// //     paddingHorizontal: 20,
// //   },
// //   nextButton: {
// //     backgroundColor: '#4A90E2',
// //     paddingVertical: 12,
// //     paddingHorizontal: 40,
// //     borderRadius: 30,
// //     position: 'absolute',
// //     bottom: 60,
// //   },
// //   nextText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: '600',
// //   },
// // });
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function V3({ navigation }) {
//   const [permissions, setPermissions] = useState({
//     mic: false,
//     camera: false,
//     notification: false,
//   });

//   const togglePermission = (type) => {
//     setPermissions((prev) => ({
//       ...prev,
//       [type]: !prev[type],
//     }));
//   };

//   // ✅ Updated this only
//   const handleNext = () => {
//     navigation.navigate('v4');
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0a0e27" />

//       {/* Top Status Bar */}
//       <View style={styles.topBar}>
//         <Text style={styles.timeText}>9:41</Text>

//         <View style={styles.statusRight}>
//           <Ionicons name="cellular" size={18} color="white" style={styles.statusIcon}/>
//           <Ionicons name="wifi" size={18} color="white" style={styles.statusIcon}/>
//           <Ionicons name="battery-full" size={22} color="white" />
//         </View>
//       </View>

//       {/* App Logo */}
//       <View style={styles.logoWrapper}>
//         <View style={styles.logoBorder}>
//           <Text style={styles.logoText}>Welcome To Ballastra</Text>
//         </View>
//       </View>

//       {/* Permission Cards */}
//       <View style={styles.cardsWrapper}>

//         {/* Mic Card */}
//         <View style={styles.card}>
//           <View style={styles.cardRow}>
//             <View style={styles.iconAndText}>
//               <Ionicons name="mic" size={22} color="white" style={styles.icon} />
//               <View style={{ flex: 1 }}>
//                 <Text style={styles.cardTitle}>Mic</Text>
//                 <Text style={styles.cardDesc}>
//                   Enable mic access for real-time voice interaction.
//                 </Text>
//               </View>
//             </View>

//             <TouchableOpacity onPress={() => togglePermission('mic')} style={styles.switchWrapper}>
//               <View style={[styles.switch, permissions.mic && styles.switchOn]}>
//                 <View style={[styles.knob, permissions.mic && styles.knobOn]} />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Camera Card */}
//         <View style={styles.card}>
//           <View style={styles.cardRow}>
//             <View style={styles.iconAndText}>
//               <Ionicons name="camera" size={22} color="white" style={styles.icon} />
//               <View style={{ flex: 1 }}>
//                 <Text style={styles.cardTitle}>Camera</Text>
//                 <Text style={styles.cardDesc}>
//                   Allow camera access for video calls and face-to-face moments.
//                 </Text>
//               </View>
//             </View>

//             <TouchableOpacity onPress={() => togglePermission('camera')} style={styles.switchWrapper}>
//               <View style={[styles.switch, permissions.camera && styles.switchOn]}>
//                 <View style={[styles.knob, permissions.camera && styles.knobOn]} />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Notification Card */}
//         <View style={styles.card}>
//           <View style={styles.cardRow}>
//             <View style={styles.iconAndText}>
//               <Ionicons name="notifications" size={22} color="white" style={styles.icon} />
//               <View style={{ flex: 1 }}>
//                 <Text style={styles.cardTitle}>Notification</Text>
//                 <Text style={styles.cardDesc}>
//                   Stay updated with messages, calls, and Nexus alerts instantly.
//                 </Text>
//               </View>
//             </View>

//             <TouchableOpacity onPress={() => togglePermission('notification')} style={styles.switchWrapper}>
//               <View style={[styles.switch, permissions.notification && styles.switchOn]}>
//                 <View style={[styles.knob, permissions.notification && styles.knobOn]} />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       {/* NEXT Button */}
//       <View style={styles.nextWrapper}>
//         <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//           <Text style={styles.nextText}>Next</Text>
//           <Ionicons name="arrow-forward" size={20} color="white" />
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Bar */}
//       <View style={styles.bottomIndicatorWrapper}>
//         <View style={styles.bottomIndicator} />
//       </View>
//     </View>
//   );
// }

// /* ------------------ STYLES ------------------ */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0a0e27',
//     paddingHorizontal: 24,
//     paddingTop: 10,
//   },

//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   timeText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   statusRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statusIcon: {
//     marginRight: 6,
//   },

//   logoWrapper: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   logoBorder: {
//     borderWidth: 2,
//     borderColor: 'white',
//     borderRadius: 999,
//     paddingVertical: 10,
//     paddingHorizontal: 32,
//   },
//   logoText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '300',
//     letterSpacing: 1,
//   },

//   cardsWrapper: {
//     flex: 1,
//     width: '100%',
//   },
//   card: {
//     backgroundColor: '#1a2847',
//     borderRadius: 22,
//     padding: 18,
//     borderWidth: 1,
//     borderColor: '#2a3f6f',
//     marginBottom: 14,
//   },
//   cardRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   iconAndText: {
//     flexDirection: 'row',
//     flex: 1,
//   },
//   icon: {
//     marginRight: 14,
//     marginTop: 4,
//   },
//   cardTitle: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   cardDesc: {
//     color: '#9ca3af',
//     fontSize: 12,
//     lineHeight: 18,
//   },

//   switchWrapper: {
//     marginLeft: 12,
//     justifyContent: 'center',
//   },
//   switch: {
//     width: 50,
//     height: 26,
//     borderRadius: 20,
//     backgroundColor: '#4b5563',
//     paddingHorizontal: 3,
//     justifyContent: 'center',
//   },
//   switchOn: {
//     backgroundColor: '#3b82f6',
//   },
//   knob: {
//     width: 20,
//     height: 20,
//     backgroundColor: 'white',
//     borderRadius: 999,
//     transform: [{ translateX: 0 }],
//   },
//   knobOn: {
//     transform: [{ translateX: 22 }],
//   },

//   nextWrapper: {
//     marginTop: 20,
//     width: '100%',
//   },
//   nextButton: {
//     backgroundColor: '#1a2847',
//     borderRadius: 999,
//     borderWidth: 1,
//     borderColor: '#2a3f6f',
//     paddingVertical: 15,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   nextText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '500',
//     marginRight: 6,
//   },

//   bottomIndicatorWrapper: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   bottomIndicator: {
//     width: 120,
//     height: 4,
//     backgroundColor: 'white',
//     borderRadius: 999,
//   },
// });




import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

export default function V3({ navigation }) {
  const [permissions, setPermissions] = useState({
    mic: false,
    camera: false,
    notification: false,
  });

  const togglePermission = (type) => {
    setPermissions((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleNext = () => {
    navigation.navigate('v4');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0e27" />

      {/* Top Status Bar */}
      <View style={styles.topBar}>
        <Text style={styles.timeText}>9:41</Text>

        <View style={styles.statusRight}>
          <Ionicons name="cellular" size={18} color="white" style={styles.statusIcon} />
          <Ionicons name="wifi" size={18} color="white" style={styles.statusIcon} />
          <Ionicons name="battery-full" size={22} color="white" />
        </View>
      </View>

      {/* App Logo */}
      <View style={styles.logoWrapper}>
        <Image
          source={require("../../assets/Text.png")}
          style={styles.welcomeLabel}
          resizeMode="contain"
        />
      </View>

      {/* Permission Cards */}
      <View style={styles.cardsWrapper}>

        {/* Mic Card */}
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.iconAndText}>
              <Ionicons name="mic" size={22} color="white" style={styles.icon} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Mic</Text>
                <Text style={styles.cardDesc}>
                  Enable mic access for real-time voice interaction.
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => togglePermission('mic')} style={styles.switchWrapper}>
              <View style={[styles.switch, permissions.mic && styles.switchOn]}>
                <View style={[styles.knob, permissions.mic && styles.knobOn]} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Camera Card */}
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.iconAndText}>
              <Ionicons name="camera" size={22} color="white" style={styles.icon} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Camera</Text>
                <Text style={styles.cardDesc}>
                  Allow camera access for video calls and face-to-face moments.
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => togglePermission('camera')} style={styles.switchWrapper}>
              <View style={[styles.switch, permissions.camera && styles.switchOn]}>
                <View style={[styles.knob, permissions.camera && styles.knobOn]} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notification Card */}
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.iconAndText}>
              <Ionicons name="notifications" size={22} color="white" style={styles.icon} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Notification</Text>
                <Text style={styles.cardDesc}>
                  Stay updated with messages, calls, and Nexus alerts instantly.
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => togglePermission('notification')} style={styles.switchWrapper}>
              <View style={[styles.switch, permissions.notification && styles.switchOn]}>
                <View style={[styles.knob, permissions.notification && styles.knobOn]} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* NEXT Button (MATCHED TO FIRST SCREEN) */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextText}>Next   →</Text>
      </TouchableOpacity>

      {/* Bottom Indicator */}
      <View style={styles.bottomIndicatorWrapper}>
        <View style={styles.bottomIndicator} />
      </View>
    </View>
  );
}

/* ------------------ STYLES ------------------ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: 885,
    backgroundColor: '#0a0e27',
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  welcomeLabel: {
    height: 120,
  },

  /* STATUS BAR */
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  timeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusIcon: {
    marginRight: 6,
  },

  /* LOGO */
  logoWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },

  /* CARDS */
  cardsWrapper: {
    flex: 1,
    width: '100%',
  },

  card: {
    backgroundColor: '#1a2847',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a3f6f',
    marginBottom: 14,
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconAndText: {
    flexDirection: 'row',
    flex: 1,
  },

  icon: {
    marginRight: 14,
    marginTop: 4,
  },

  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },

  cardDesc: {
    color: '#9ca3af',
    fontSize: 12,
    lineHeight: 18,
  },

  /* SWITCH */
  switchWrapper: {
    marginLeft: 12,
    justifyContent: 'center',
  },

  switch: {
    width: 50,
    height: 26,
    borderRadius: 20,
    backgroundColor: '#4b5563',
    paddingHorizontal: 3,
    justifyContent: 'center',
  },

  switchOn: {
    backgroundColor: '#3b82f6',
  },

  knob: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 999,
  },

  knobOn: {
    transform: [{ translateX: 22 }],
  },

  /* NEXT BUTTON - SAME AS SCREEN 1 */
  nextButton: {
    backgroundColor: "#316BFF",
    width: width * 0.42,
    height: height * 0.055,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 60,
  },

  nextText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.5,
  },

  /* BOTTOM INDICATOR */
  bottomIndicatorWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },

  bottomIndicator: {
    width: 120,
    height: 4,
    backgroundColor: 'white',
    borderRadius: 999,
  },
});

