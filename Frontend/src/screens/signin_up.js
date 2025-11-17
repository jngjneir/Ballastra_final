
// import React, { useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
//   Dimensions,
//   StatusBar,
//   Platform,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// export default function SigninUp({ navigation }) {
//   // Animation values
//   const avatarAnims = useRef([
//     new Animated.Value(0),
//     new Animated.Value(0),
//     new Animated.Value(0),
//     new Animated.Value(0),
//     new Animated.Value(0),
//     new Animated.Value(0),
//   ]).current;

//   const titleAnim = useRef(new Animated.Value(0)).current;
//   const buttonAnims = useRef([
//     new Animated.Value(50),
//     new Animated.Value(50),
//     new Animated.Value(50),
//     new Animated.Value(50),
//   ]).current;

//   useEffect(() => {
//     const avatarAnimations = avatarAnims.map((anim, index) =>
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 600,
//         delay: index * 100,
//         useNativeDriver: true,
//       })
//     );

//     const titleAnimation = Animated.timing(titleAnim, {
//       toValue: 1,
//       duration: 800,
//       delay: 600,
//       useNativeDriver: true,
//     });

//     const buttonAnimations = buttonAnims.map((anim, index) =>
//       Animated.timing(anim, {
//         toValue: 0,
//         duration: 500,
//         delay: 1000 + index * 100,
//         useNativeDriver: true,
//       })
//     );

//     Animated.parallel([
//       ...avatarAnimations,
//       titleAnimation,
//       ...buttonAnimations,
//     ]).start();
//   }, []);

//   const avatarPositions = [
//     { top: 160, left: width / 2 - 25, bg: "#E8D4F8", emoji: "👤", size: 50 },
//     { top: 170, right: width / 2 - 10, bg: "#FFD4D4", emoji: "👧", size: 55 },
//     { top: 195, right: width / 2 - 80, bg: "#D4F4F4", emoji: "🚗", size: 50 },
//     { top: 230, left: width / 2 - 80, bg: "#FFF4D4", emoji: "😊", size: 50 },
//     { top: 235, left: width / 2 + 10, bg: "#FFB4D4", emoji: "🔒", size: 60 },
//     { top: 230, right: width / 2 - 50, bg: "#D4E4F4", emoji: "🐻", size: 50 },
//   ];

//   // ------------- UPDATED NAVIGATION -----------------

//   const handleGoogleSignIn = () => {
//     navigation.navigate("GoogleAuth");
//   };

//   const handleAppleSignIn = () => {
//     navigation.navigate("AppleAuth");
//   };

//   const handleLogIn = () => {
//     navigation.navigate("Loginscreen"); // ✔ Login screen
//   };

//   const handleCreateAccount = () => {
//     navigation.navigate("CreateAccount"); // ✔ V7 register screen
//   };

//   // ----------------------------------------------------

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       <View style={styles.gridPattern} />

//       {/* STATUS BAR */}
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

//       {/* Avatar circle */}
//       <View style={styles.avatarContainer}>
//         {avatarPositions.map((pos, index) => (
//           <Animated.View
//             key={index}
//             style={[
//               styles.avatar,
//               {
//                 top: pos.top,
//                 left: pos.left,
//                 right: pos.right,
//                 backgroundColor: pos.bg,
//                 width: pos.size,
//                 height: pos.size,
//                 borderRadius: pos.size / 2,
//                 opacity: avatarAnims[index],
//                 transform: [
//                   {
//                     scale: avatarAnims[index].interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 1],
//                     }),
//                   },
//                 ],
//               },
//             ]}
//           >
//             <Text style={[styles.avatarEmoji, { fontSize: pos.size * 0.5 }]}>
//               {pos.emoji}
//             </Text>
//           </Animated.View>
//         ))}
//       </View>

//       {/* Title */}
//       <Animated.View
//         style={[
//           styles.titleContainer,
//           {
//             opacity: titleAnim,
//             transform: [
//               {
//                 translateY: titleAnim.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [20, 0],
//                 }),
//               },
//             ],
//           },
//         ]}
//       >
//         <Text style={styles.title}>Let's Go</Text>
//       </Animated.View>

//       {/* Buttons Section */}
//       <View style={styles.buttonsContainer}>
//         {/* LOGIN */}
//         <Animated.View style={{ transform: [{ translateY: buttonAnims[0] }] }}>
//           <TouchableOpacity
//             style={[styles.button, styles.loginButton]}
//             onPress={handleLogIn}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.loginButtonText}>Log In</Text>
//           </TouchableOpacity>
//         </Animated.View>

//         {/* GOOGLE */}
//         <Animated.View style={{ transform: [{ translateY: buttonAnims[1] }] }}>
//           <TouchableOpacity
//             style={[styles.button, styles.socialButton]}
//             onPress={handleGoogleSignIn}
//             activeOpacity={0.8}
//           >
//             <View style={styles.socialButtonContent}>
//               <Text style={styles.googleIcon}>G</Text>
//               <Text style={styles.socialButtonText}>Continue With Google</Text>
//             </View>
//           </TouchableOpacity>
//         </Animated.View>

//         {/* APPLE */}
//         <Animated.View style={{ transform: [{ translateY: buttonAnims[2] }] }}>
//           <TouchableOpacity
//             style={[styles.button, styles.socialButton]}
//             onPress={handleAppleSignIn}
//             activeOpacity={0.8}
//           >
//             <View style={styles.socialButtonContent}>
//               <Ionicons name="logo-apple" size={24} color="#000" />
//               <Text style={styles.socialButtonText}>Continue With Apple</Text>
//             </View>
//           </TouchableOpacity>
//         </Animated.View>

//         {/* CREATE ACCOUNT */}
//         <Animated.View style={{ transform: [{ translateY: buttonAnims[3] }] }}>
//           <TouchableOpacity
//             style={[styles.button, styles.createButton]}
//             onPress={handleCreateAccount}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.createButtonText}>Create Account</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       </View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity>
//           <Text style={styles.footerLink}>Privacy Policy</Text>
//         </TouchableOpacity>
//         <View style={styles.footerDivider} />
//         <TouchableOpacity>
//           <Text style={styles.footerLink}>Terms of Services</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.homeIndicator} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0a1628",
//   },
//   gridPattern: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   statusBar: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 44,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     zIndex: 100,
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
//     fontSize: 14,
//   },
//   welcomeContainer: {
//     position: "absolute",
//     top: 80,
//     left: 0,
//     right: 0,
//     alignItems: "center",
//     zIndex: 10,
//   },
//   welcomeBadge: {
//     borderWidth: 1.5,
//     borderColor: "rgba(255, 255, 255, 0.3)",
//     borderRadius: 25,
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     backgroundColor: "rgba(255, 255, 255, 0.05)",
//   },
//   welcomeText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "400",
//     letterSpacing: 0.5,
//   },
//   avatarContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 350,
//     zIndex: 5,
//   },
//   avatar: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   avatarEmoji: {
//     textAlign: "center",
//   },
//   titleContainer: {
//     position: "absolute",
//     top: 300,
//     left: 0,
//     right: 0,
//     alignItems: "center",
//     zIndex: 20,
//   },
//   title: {
//     color: "white",
//     fontSize: 56,
//     fontWeight: "400",
//     fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
//     letterSpacing: 2,
//   },
//   buttonsContainer: {
//     position: "absolute",
//     bottom: 180,
//     left: 20,
//     right: 20,
//     zIndex: 30,
//   },
//   button: {
//     height: 56,
//     borderRadius: 28,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 12,
//     elevation: 5,
//   },
//   loginButton: {
//     backgroundColor: "#1c4cff",
//     borderWidth: 1,
//     borderColor: "#2d5cff",
//   },
//   loginButtonText: {
//     color: "white",
//     fontSize: 17,
//     fontWeight: "600",
//   },
//   socialButton: {
//     backgroundColor: "white",
//   },
//   socialButtonContent: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   googleIcon: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#4285F4",
//   },
//   socialButtonText: {
//     color: "#000",
//     fontSize: 16,
//     fontWeight: "500",
//   },
//   createButton: {
//     backgroundColor: "#1a3a6b",
//     borderWidth: 1,
//     borderColor: "rgba(28, 76, 255, 0.5)",
//   },
//   createButtonText: {
//     color: "white",
//     fontSize: 17,
//     fontWeight: "600",
//   },
//   footer: {
//     position: "absolute",
//     bottom: 120,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 12,
//     zIndex: 30,
//   },
//   footerLink: {
//     color: "rgba(255, 255, 255, 0.7)",
//     fontSize: 14,
//     textDecorationLine: "underline",
//   },
//   footerDivider: {
//     width: 1,
//     height: 14,
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//   },
//   homeIndicator: {
//     position: "absolute",
//     bottom: 8,
//     alignSelf: "center",
//     left: width / 2 - 67,
//     width: 134,
//     height: 5,
//     backgroundColor: "white",
//     borderRadius: 3,
//     opacity: 0.3,
//   },
// });













// dummy loging











import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SigninUp({ navigation }) {
  const [loading, setLoading] = useState(false);

  // Animation values
  const avatarAnims = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  const titleAnim = useRef(new Animated.Value(0)).current;
  const buttonAnims = useRef([
    new Animated.Value(50),
    new Animated.Value(50),
    new Animated.Value(50),
    new Animated.Value(50),
  ]).current;

  useEffect(() => {
    const avatarAnimations = avatarAnims.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 600,
        delay: index * 100,
        useNativeDriver: true,
      })
    );

    const titleAnimation = Animated.timing(titleAnim, {
      toValue: 1,
      duration: 800,
      delay: 600,
      useNativeDriver: true,
    });

    const buttonAnimations = buttonAnims.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 0,
        duration: 500,
        delay: 1000 + index * 100,
        useNativeDriver: true,
      })
    );

    Animated.parallel([
      ...avatarAnimations,
      titleAnimation,
      ...buttonAnimations,
    ]).start();
  }, []);

  const avatarPositions = [
    { top: 160, left: width / 2 - 25, bg: "#E8D4F8", emoji: "👤", size: 50 },
    { top: 170, right: width / 2 - 10, bg: "#FFD4D4", emoji: "👧", size: 55 },
    { top: 195, right: width / 2 - 80, bg: "#D4F4F4", emoji: "🚗", size: 50 },
    { top: 230, left: width / 2 - 80, bg: "#FFF4D4", emoji: "😊", size: 50 },
    { top: 235, left: width / 2 + 10, bg: "#FFB4D4", emoji: "🔒", size: 60 },
    { top: 230, right: width / 2 - 50, bg: "#D4E4F4", emoji: "🐻", size: 50 },
  ];

  // ⭐ FRONTEND-ONLY WORKING AUTH BUTTONS

  const handleGoogleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Google Login Successful!");
      navigation.navigate("Home"); // Change if needed
    }, 800);
  };

  const handleAppleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Apple Login Successful!");
      navigation.navigate("Home"); // Change if needed
    }, 800);
  };

  const handleLogIn = () => {
    navigation.navigate("Loginscreen");
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* STATUS BAR */}
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

      {/* Avatar circle */}
      <View style={styles.avatarContainer}>
        {avatarPositions.map((pos, index) => (
          <Animated.View
            key={index}
            style={[
              styles.avatar,
              {
                top: pos.top,
                left: pos.left,
                right: pos.right,
                backgroundColor: pos.bg,
                width: pos.size,
                height: pos.size,
                borderRadius: pos.size / 2,
                opacity: avatarAnims[index],
                transform: [
                  {
                    scale: avatarAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={[styles.avatarEmoji, { fontSize: pos.size * 0.5 }]}>
              {pos.emoji}
            </Text>
          </Animated.View>
        ))}
      </View>

      {/* Title */}
      <Animated.View
        style={[
          styles.titleContainer,
          {
            opacity: titleAnim,
            transform: [
              {
                translateY: titleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.title}>Let's Go</Text>
      </Animated.View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* LOGIN */}
        <Animated.View style={{ transform: [{ translateY: buttonAnims[0] }] }}>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={handleLogIn}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* GOOGLE */}
        <Animated.View style={{ transform: [{ translateY: buttonAnims[1] }] }}>
          <TouchableOpacity
            style={[styles.button, styles.socialButton]}
            onPress={handleGoogleSignIn}
            activeOpacity={0.8}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.googleIcon}>G</Text>
              <Text style={styles.socialButtonText}>Continue With Google</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* APPLE */}
        <Animated.View style={{ transform: [{ translateY: buttonAnims[2] }] }}>
          <TouchableOpacity
            style={[styles.button, styles.socialButton]}
            onPress={handleAppleSignIn}
            activeOpacity={0.8}
          >
            <View style={styles.socialButtonContent}>
              <Ionicons name="logo-apple" size={24} color="#000" />
              <Text style={styles.socialButtonText}>Continue With Apple</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* CREATE ACCOUNT */}
        <Animated.View style={{ transform: [{ translateY: buttonAnims[3] }] }}>
          <TouchableOpacity
            style={[styles.button, styles.createButton]}
            onPress={handleCreateAccount}
            activeOpacity={0.8}
          >
            <Text style={styles.createButtonText}>Create Account</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.footerDivider} />
        <TouchableOpacity>
          <Text style={styles.footerLink}>Terms of Services</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a1628",
  },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    zIndex: 100,
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
    fontSize: 14,
  },
  welcomeContainer: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  welcomeBadge: {
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  welcomeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.5,
  },
  avatarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 350,
    zIndex: 5,
  },
  avatar: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarEmoji: {
    textAlign: "center",
  },
  titleContainer: {
    position: "absolute",
    top: 300,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 20,
  },
  title: {
    color: "white",
    fontSize: 56,
    fontWeight: "400",
    letterSpacing: 2,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 180,
    left: 20,
    right: 20,
    zIndex: 30,
  },
  button: {
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: "#1c4cff",
  },
  loginButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  socialButton: {
    backgroundColor: "white",
  },
  socialButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4285F4",
  },
  socialButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  createButton: {
    backgroundColor: "#1a3a6b",
  },
  createButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  footer: {
    position: "absolute",
    bottom: 120,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  footerLink: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  footerDivider: {
    width: 1,
    height: 14,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  homeIndicator: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    left: width / 2 - 67,
    width: 134,
    height: 5,
    backgroundColor: "white",
    borderRadius: 3,
    opacity: 0.3,
  },
});
