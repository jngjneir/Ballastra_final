
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/Feather";

// export default function Create_Nexus({ navigation }) {
//   const CARDS = [
//     {
//       id: 1,
//       title: "Gaming",
//       icon: "https://img.icons8.com/external-fauzidea-flat-fauzidea/512/external-Gamepad-gaming-fauzidea-flat-fauzidea.png",
//     },
//     {
//       id: 2,
//       title: "School",
//       icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-school-stationery-flaticons-lineal-color-flat-icons.png",
//     },
//     {
//       id: 3,
//       title: "Study Group",
//       icon: "https://img.icons8.com/external-others-inmotus-design/512/external-books-education-others-inmotus-design.png",
//     },
//     {
//       id: 4,
//       title: "Friends",
//       icon: "https://img.icons8.com/external-nawicon-flat-nawicon/512/external-Group-friendship-nawicon-flat-nawicon.png",
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Close Button */}
    

//         {/* Title */}
//         <Text style={styles.title}>Create Your Nexus</Text>
//         <Text style={styles.subtitle}>
//           A Nexus is your space. Build your world with chat,{"\n"}channels and vibes.
//         </Text>

//         {/* Create My Own Nexus Button */}
//         <TouchableOpacity
//           style={styles.primaryButton}
//           onPress={() => navigation.navigate("My_Own_Nexus")} 
//         >
//           <Text style={styles.primaryButtonText}>👑  Create My Own Nexus</Text>
//         </TouchableOpacity>

//         {/* GRID CARDS */}
//         <View style={styles.gridContainer}>
//           {CARDS.map((item) => (
//             <View key={item.id} style={styles.card}>
//               <Image source={{ uri: item.icon }} style={styles.cardIcon} />
//               <Text style={styles.cardTitle}>{item.title}</Text>

//               <TouchableOpacity
//                 style={styles.cardButton}
//                 onPress={() =>
//                   navigation.navigate("", { category: item.title })
//                 }
//               >
//                 <Text style={styles.cardButtonText}>Create</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>

//         {/* Explore Nexus */}
//         <Text style={styles.bottomText}>Don’t have a Nexus to join?</Text>

//         {/* <TouchableOpacity
//           style={styles.exploreButton}
//           onPress={() => navigation.navigate("")}
//         >
//           <Text style={styles.exploreButtonText}>Explore Nexus</Text>
//         </TouchableOpacity> */}

//         <View style={{ height: 50 }} />
//       </ScrollView>
//     </View>
//   );
// }

// /* ========== STYLES ========== */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#02081A",
//     paddingHorizontal: 22,
//     paddingTop: 55,
//   },

//   closeButton: {
//     marginBottom: 25,
//   },

//   title: {
//     color: "#ffffff",
//     fontSize: 26,
//     fontWeight: "700",
//     textAlign: "center",
//   },

//   subtitle: {
//     color: "#9BA4C1",
//     fontSize: 14,
//     textAlign: "center",
//     marginTop: 8,
//     lineHeight: 20,
//   },

//   primaryButton: {
//     backgroundColor: "#122B5F",
//     paddingVertical: 16,
//     borderRadius: 15,
//     marginTop: 30,
//     alignItems: "center",
//     shadowColor: "#2D4DF5",
//     shadowOpacity: 0.4,
//     shadowRadius: 10,
//   },

//   primaryButtonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   gridContainer: {
//     marginTop: 40,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },

//   card: {
//     width: "47%",
//     backgroundColor: "#07142D",
//     borderRadius: 20,
//     paddingVertical: 22,
//     alignItems: "center",
//     marginBottom: 22,
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.05)",
//     shadowColor: "#2D4DF5",
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//   },

//   cardIcon: {
//     width: 60,
//     height: 60,
//     marginBottom: 12,
//   },

//   cardTitle: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 12,
//   },

//   cardButton: {
//     backgroundColor: "#142A6B",
//     paddingVertical: 8,
//     paddingHorizontal: 28,
//     borderRadius: 10,
//   },

//   cardButtonText: {
//     color: "#ffffff",
//     fontWeight: "600",
//     fontSize: 14,
//   },

//   bottomText: {
//     color: "#8B96B2",
//     textAlign: "center",
//     marginTop: 25,
//     fontSize: 13,
//   },

//   exploreButton: {
//     backgroundColor: "#2455F5",
//     paddingVertical: 14,
//     borderRadius: 16,
//     marginTop: 15,
//     alignItems: "center",
//   },

//   exploreButtonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "700",
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

// Responsive scaling
const scale = (size = 20) => (width / 375) * size; // iPhone 11 base width
const verticalScale = (size) => (height / 812) * size; // iPhone 11 base height
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default function Create_Nexus({ navigation }) {
  const CARDS = [
    {
      id: 1,
      title: "Gaming",
      icon: "gamepad-variant",
      iconColor: "#00D9FF",
      bgColor: "rgba(0, 217, 255, 0.15)",
    },
    {
      id: 2,
      title: "School",
      icon: "view-grid",
      iconColor: "#A855F7",
      bgColor: "rgba(168, 85, 247, 0.15)",
    },
    {
      id: 3,
      title: "Study Group",
      icon: "bookmark-multiple",
      iconColor: "#22D3EE",
      bgColor: "rgba(34, 211, 238, 0.15)",
    },
    {
      id: 4,
      title: "Friends",
      icon: "account-group",
      iconColor: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.15)",
    },
  ];

  const renderIcon = (item) => {
    return (
      <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={scale(32)}
          color={item.iconColor}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0C142A" />
      <View style={styles.container}>
        
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Create Your Nexus</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          A Nexus is your space. Build your world with chat,{"\n"}channels and vibes.
        </Text>

        {/* Create My Own Nexus */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("My_Own_Nexus")}
          activeOpacity={0.8}
        >
          <View style={styles.crownIcon}>
            <MaterialCommunityIcons name="crown" size={scale(20)} color="#fff" />
          </View>
          <Text style={styles.primaryButtonText}>Create My Own Nexus</Text>
        </TouchableOpacity>

        {/* ⭐ Only Cards Scroll ⭐ */}
        <ScrollView
          style={styles.cardsScrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.gridContainer}>
            {CARDS.map((item) => (
              <View key={item.id} style={styles.card}>
                {renderIcon(item)}

                <Text style={styles.cardTitle}>{item.title}</Text>

                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() =>
                    navigation.navigate("Create_Nexus_Profile", {
                      category: item.title,
                    })
                  }
                  activeOpacity={0.8}
                >
                  <Text style={styles.cardButtonText}>Create</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Section */}
        <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate("NexusCommunity")}
        >
          <Text style={styles.exploreButtonText}>Explore Nexus</Text>
        </TouchableOpacity>

        <View style={{ height: verticalScale(20) }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#02081A",
  },

  container: {
    flex: 1,
    backgroundColor: "#02081A",
    paddingHorizontal: scale(22),
  },

  closeButton: {
    width: scale(26),
    height: scale(26),
    justifyContent: "center",
    marginTop: verticalScale(25),
    marginBottom: verticalScale(25),
  },

  title: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    color: "#BDBDBD",
    fontSize: moderateScale(12),
    textAlign: "center",
    lineHeight: moderateScale(18),
    marginTop: verticalScale(6),
    marginBottom: verticalScale(20),
    fontWeight: "400",
  },

  primaryButton: {
    backgroundColor: "#3154BA4D",
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(22),
    borderRadius: moderateScale(14),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3255BA00",
  },

  crownIcon: {
    marginRight: scale(14),
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(10),
    fontWeight: "500",
  },

  /* ⭐ responsive scroll height ⭐ */
  cardsScrollView: {
    maxHeight: height * 0.48, // fits all screens
    marginTop: verticalScale(30),
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47%",
    borderRadius: moderateScale(18),
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(12),
    alignItems: "center",
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: "#3255BA",
  },

  iconContainer: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: moderateScale(10),
    fontWeight: "500",
    marginBottom: verticalScale(12),
    textAlign: "center",
  },

  cardButton: {
    backgroundColor: "#0D2151",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(26),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.3)",
  },

  cardButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: moderateScale(10),
  },

  bottomText: {
    color: "#fff",
    textAlign: "center",
    marginTop: verticalScale(10),
    fontSize: moderateScale(10),
    fontWeight: "500",
  },

  exploreButton: {
    backgroundColor: "#2563EB",
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(30),
    borderRadius: moderateScale(15),
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#030B2466",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  exploreButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});
