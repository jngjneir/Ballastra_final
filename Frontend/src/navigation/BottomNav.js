// import React from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import { Home, MessageCircle, Bell, User } from "lucide-react-native";

// export default function BottomNav({ navigation, active }) {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         height: 70,
//         backgroundColor: "#0B0E1E",
//         borderTopWidth: 0.5,
//         borderTopColor: "#1d233d",
//       }}
//     >
//       {/* Home */}
//       <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//         <Home size={28} color={active === "home" ? "#6B7AFF" : "#6e6e6e"} />
//       </TouchableOpacity>

//       {/* Chat */}
//       <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
//         <MessageCircle
//           size={28}
//           color={active === "chat" ? "#6B7AFF" : "#6e6e6e"}
//         />
//       </TouchableOpacity>

//       {/* Notifications */}
//       <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
//         <Bell
//           size={28}
//           color={active === "notifications" ? "#6B7AFF" : "#6e6e6e"}
//         />
//       </TouchableOpacity>

//       {/* Profile */}
//       <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//         <User
//           size={28}
//           color={active === "profile" ? "#6B7AFF" : "#6e6e6e"}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }
import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Home, MessageCircle, Bell, User } from "lucide-react-native";

export default function BottomNav({ navigation, active }) {
  return (
    <View>
      {/* Horizontal Templates List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: "#0B0E1E",
          paddingVertical: 10,
          paddingLeft: 15,
        }}
      >
        {["Template 1", "Template 2", "Template 3", "Template 4"].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: "#14182C",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 12,
                marginRight: 12,
                borderWidth: 1,
                borderColor: "#1e2648",
              }}
            >
              <Text style={{ color: "white", fontSize: 14 }}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      {/* Explore Nexus Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Explore_Nexus")}
        style={{
          backgroundColor: "#6B7AFF",
          marginHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 14,
          alignItems: "center",
          marginBottom: 8,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
          Explore Nexus
        </Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 70,
          backgroundColor: "#0B0E1E",
          borderTopWidth: 0.5,
          borderTopColor: "#1d233d",
        }}
      >
        {/* Home */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Home size={28} color={active === "home" ? "#6B7AFF" : "#6e6e6e"} />
        </TouchableOpacity>

        {/* Chat */}
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <MessageCircle
            size={28}
            color={active === "chat" ? "#6B7AFF" : "#6e6e6e"}
          />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Bell
            size={28}
            color={active === "notifications" ? "#6B7AFF" : "#6e6e6e"}
          />
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <User
            size={28}
            color={active === "profile" ? "#6B7AFF" : "#6e6e6e"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
