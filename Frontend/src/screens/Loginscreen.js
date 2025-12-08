
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 LOGIN
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

      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        return Alert.alert(
          "Login Failed",
          data?.message || `Something went wrong (${response.status})`
        );
      }

      if (data?.token) {
        await AsyncStorage.setItem("token", data.token);
      }
      if (data?.user) {
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
      }

      Alert.alert("Success", data?.message || "Login successful!");
      navigation.replace("Home"); // make sure "Home" screen exists
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Error",
        error?.message ||
          "Unable to connect to server. Check your Wi-Fi / server IP / port."
      );
    } finally {
      setLoading(false);
    }
  };

  // 🔁 FORGOT PASSWORD (email + go to ResetPassword screen)
  const handleForgetPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email to reset password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        return Alert.alert(
          "Error",
          data?.message || "Failed to send reset email"
        );
      }

      // ✅ Email backend la gela + app madhye ResetPassword screen la jau
      Alert.alert(
        "Success",
        data?.message || "Password reset link has been sent to your email.",
        [
          {
            text: "OK",
            onPress: () =>
              navigation.navigate("ResetPassword", {
                email, // ResetPasswordScreen madhe route.params.email
              }),
          },
        ]
      );
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
