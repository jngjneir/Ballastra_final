// // // import React, { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   Alert,
// // // } from "react-native";
// // // import { auth } from "./firebase";
// // // import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// // // export default function LoginScreen({ navigation }) {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   // LOGIN USER
// // //   const handleLogin = () => {
// // //     if (!email || !password) {
// // //       Alert.alert("Error", "Please enter email and password");
// // //       return;
// // //     }

// // //     signInWithEmailAndPassword(auth, email, password)
// // //       .then(() => {
// // //         Alert.alert("Success", "Login Successful!");
// // //         navigation.navigate("Home"); 
// // //       })
// // //       .catch((error) => {
// // //         Alert.alert("Login Failed", error.message);
// // //       });
// // //   };

// // //   // SEND RESET PASSWORD LINK
// // //   const handleForgotPassword = () => {
// // //     if (!email) {
// // //       Alert.alert("Enter Email", "Please enter your email to reset password");
// // //       return;
// // //     }

// // //     sendPasswordResetEmail(auth, email)
// // //       .then(() => {
// // //         Alert.alert(
// // //           "Email Sent",
// // //           "Password reset link has been sent to your email."
// // //         );
// // //       })
// // //       .catch((error) => {
// // //         Alert.alert("Error", error.message);
// // //       });
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Login</Text>

// // //       <TextInput
// // //         placeholder="Enter Email"
// // //         style={styles.input}
// // //         value={email}
// // //         onChangeText={setEmail}
// // //         keyboardType="email-address"
// // //       />

// // //       <TextInput
// // //         placeholder="Enter Password"
// // //         style={styles.input}
// // //         secureTextEntry
// // //         value={password}
// // //         onChangeText={setPassword}
// // //       />

// // //       <TouchableOpacity onPress={handleForgotPassword}>
// // //         <Text style={styles.forgot}>Forgot Password?</Text>
// // //       </TouchableOpacity>

// // //       <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
// // //         <Text style={styles.loginText}>Log In</Text>
// // //       </TouchableOpacity>

// // //       <TouchableOpacity onPress={() => navigation.navigate("Register")}>
// // //         <Text style={styles.registerText}>Create New Account?</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#0a1628",
// // //     justifyContent: "center",
// // //     padding: 25,
// // //   },
// // //   title: {
// // //     color: "white",
// // //     fontSize: 32,
// // //     fontWeight: "700",
// // //     marginBottom: 30,
// // //     textAlign: "center",
// // //   },
// // //   input: {
// // //     backgroundColor: "#fff",
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     marginBottom: 15,
// // //   },
// // //   forgot: {
// // //     color: "#4da6ff",
// // //     textAlign: "right",
// // //     marginBottom: 20,
// // //   },
// // //   loginBtn: {
// // //     backgroundColor: "#1c4cff",
// // //     padding: 15,
// // //     borderRadius: 10,
// // //   },
// // //   loginText: {
// // //     color: "white",
// // //     textAlign: "center",
// // //     fontSize: 18,
// // //     fontWeight: "600",
// // //   },
// // //   registerText: {
// // //     marginTop: 20,
// // //     color: "white",
// // //     textAlign: "center",
// // //     fontSize: 15,
// // //   },
// // // });
// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Alert,
// // } from "react-native";
// // import { auth } from "../firebase";
// // import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// // export default function LoginScreen({ navigation }) {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   // RESET PASSWORD FUNCTION
// //   const handleForgetPassword = () => {
// //     if (!email) {
// //       Alert.alert("Error", "Please enter your email to reset password");
// //       return;
// //     }

// //     sendPasswordResetEmail(auth, email)
// //       .then(() => {
// //         Alert.alert(
// //           "Reset Link Sent",
// //           "Password reset link has been sent to your email."
// //         );
// //       })
// //       .catch((error) => {
// //         Alert.alert("Error", error.message);
// //       });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Login</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter Email"
// //         placeholderTextColor="#777"
// //         value={email}
// //         onChangeText={setEmail}
// //       />

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter Password"
// //         secureTextEntry
// //         placeholderTextColor="#777"
// //         value={password}
// //         onChangeText={setPassword}
// //       />

// //       <TouchableOpacity onPress={handleForgetPassword}>
// //         <Text style={styles.forgot}>Forgot Password?</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.loginBtn}>
// //         <Text style={styles.loginText}>Login</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1, justifyContent: "center", padding: 25, backgroundColor: "#fff",
// //   },
// //   title: {
// //     fontSize: 32,
// //     fontWeight: "bold",
// //     marginBottom: 30,
// //     textAlign: "center",
// //   },
// //   input: {
// //     height: 55,
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //     borderRadius: 10,
// //     paddingHorizontal: 15,
// //     marginBottom: 15,
// //     fontSize: 16,
// //   },
// //   forgot: {
// //     textAlign: "right",
// //     color: "#0066FF",
// //     marginBottom: 20,
// //   },
// //   loginBtn: {
// //     backgroundColor: "black",
// //     paddingVertical: 15,
// //     borderRadius: 10,
// //     alignItems: "center",
// //   },
// //   loginText: {
// //     color: "white",
// //     fontSize: 18,
// //     fontWeight: "600",
// //   },
// // });
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// // ❌ Remove Firebase imports
// // import { auth } from "../firebase";
// // import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// import AsyncStorage from "@react-native-async-storage/async-storage";

// const BASE_URL = "http://10.0.2.2:5000/api"; 
// // ⚠️ For Android emulator use 10.0.2.2
// // For iOS simulator → "http://localhost:5000/api"
// // For real device → "http://YOUR_PC_IP:5000/api"

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   // LOGIN FUNCTION (using fetch -> backend /auth/login)
//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter email and password");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(`${BASE_URL}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // Backend sends: { message: "Invalid email or password." }
//         return Alert.alert("Login Failed", data.message || "Something went wrong");
//       }

//       // data = { message, token, user: { id, name, email } }
//       // Save token (and maybe user) in AsyncStorage
//       await AsyncStorage.setItem("token", data.token);
//       await AsyncStorage.setItem("user", JSON.stringify(data.user));

//       Alert.alert("Success", "Login successful!");

//       // Navigate to Home (or Main app screen)
//       navigation.replace("Home"); // make sure "Home" route exists in your navigator
//     } catch (error) {
//       console.error("Login error:", error);
//       Alert.alert("Error", "Unable to connect to server. Check your internet / server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // FORGOT PASSWORD FUNCTION (BACKEND VERSION)
//   const handleForgetPassword = async () => {
//     if (!email) {
//       Alert.alert("Error", "Please enter your email to reset password");
//       return;
//     }

//     try {
//       setLoading(true);

//       // 👉 This assumes you create a backend route: POST /api/auth/forgot-password
//       const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         return Alert.alert("Error", data.message || "Failed to send reset email");
//       }

//       Alert.alert("Success", "Password reset link has been sent to your email.");
//     } catch (error) {
//       console.error("Forgot Password Error:", error);
//       Alert.alert("Error", "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style espresso={true} style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Email"
//         placeholderTextColor="#777"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Password"
//         secureTextEntry
//         placeholderTextColor="#777"
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity onPress={handleForgetPassword}>
//         <Text style={styles.forgot}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[styles.loginBtn, loading && { opacity: 0.7 }]}
//         onPress={handleLogin}
//         disabled={loading}
//       >
//         <Text style={styles.loginText}>
//           {loading ? "Please wait..." : "Login"}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 25,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   input: {
//     height: 55,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   forgot: {
//     textAlign: "right",
//     color: "#0066FF",
//     marginBottom: 20,
//   },
//   loginBtn: {
//     backgroundColor: "black",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   loginText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });




import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
// Firebase imports removed because we’re using backend API
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://localhost:5000/api";
// ⚠️ For Android emulator use 10.0.2.2
// For iOS simulator → "http://localhost:5000/api"
// For real device → "http://YOUR_PC_IP:5000/api"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // LOGIN FUNCTION (using fetch -> backend /auth/login)
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Backend sends: { message: "Invalid email or password." }
        return Alert.alert("Login Failed", data.message || "Something went wrong");
      }

      // data = { message, token, user: { id, name, email } }
      // Save token (and maybe user) in AsyncStorage
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

      Alert.alert("Success", "Login successful!");

      // Navigate to Home (or Main app screen)
      navigation.replace("Home"); // make sure "Home" route exists in your navigator
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Unable to connect to server. Check your internet / server.");
    } finally {
      setLoading(false);
    }
  };

  // FORGOT PASSWORD FUNCTION (BACKEND VERSION)
  const handleForgetPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email to reset password");
      return;
    }

    try {
      setLoading(true);

      // This assumes you have: POST /api/auth/forgot-password on backend
      const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        return Alert.alert("Error", data.message || "Failed to send reset email");
      }

      Alert.alert("Success", "Password reset link has been sent to your email.");
    } catch (error) {
      console.error("Forgot Password Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        placeholderTextColor="#777"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.loginBtn, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginText}>
          {loading ? "Please wait..." : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  forgot: {
    textAlign: "right",
    color: "#0066FF",
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
