// // // screens/v343.js
// // import React, { useState } from "react";
// // import {
// //   SafeAreaView,
// //   View,
// //   Text,
// //   StyleSheet,
// //   StatusBar,
// //   ScrollView,
// //   TouchableOpacity,
// //   Switch,
// //   Dimensions,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";

// // const { width } = Dimensions.get("window");
// // const BG = "#020816";

// // export default function V343({ navigation }) {
// //   // switches state
// //   const [roleMentions, setRoleMentions] = useState(true);
// //   const [indirectMentions, setIndirectMentions] = useState(true);
// //   const [ballastraNotifs, setBallastraNotifs] = useState(true);

// //   const [friendsStream, setFriendsStream] = useState(true);
// //   const [voiceActivity, setVoiceActivity] = useState(true);
// //   const [friendsReturn, setFriendsReturn] = useState(true);

// //   // reaction notifications (dropdown value)
// //   const [reactionFilter] = useState("All Messages"); // static label, can make real dropdown later

// //   const renderSwitchRow = (label, value, onChange, iconName) => (
// //     <View style={styles.card}>
// //       <View style={styles.cardLeft}>
// //         <View style={styles.iconWrapper}>
// //           <Ionicons name={iconName} size={18} color="#FFFFFF" />
// //         </View>
// //         <Text style={styles.cardText}>{label}</Text>
// //       </View>
// //       <Switch
// //         value={value}
// //         onValueChange={onChange}
// //         trackColor={{ false: "#25314F", true: "#374BFF" }}
// //         thumbColor={value ? "#FFFFFF" : "#A3B1D8"}
// //       />
// //     </View>
// //   );

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <StatusBar barStyle="light-content" backgroundColor={BG} />

// //       {/* HEADER */}
// //       <View style={styles.headerRow}>
// //         <TouchableOpacity
// //           style={styles.closeHit}
// //           onPress={() => navigation.goBack()}
// //         >
// //           <Ionicons name="close" size={22} color="#FFFFFF" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Notifications</Text>
// //         {/* right side empty to keep title centered */}
// //         <View style={styles.closeHit} />
// //       </View>

// //       <ScrollView
// //         style={styles.scroll}
// //         contentContainerStyle={{ paddingBottom: 40 }}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* TOP 3 TOGGLES */}
// //         {renderSwitchRow(
// //           "Show Role Mentions",
// //           roleMentions,
// //           setRoleMentions,
// //           "pricetags-outline"
// //         )}
// //         {renderSwitchRow(
// //           "Show Indirect Mentions",
// //           indirectMentions,
// //           setIndirectMentions,
// //           "notifications-outline"
// //         )}
// //         {renderSwitchRow(
// //           "Get Notifications within Ballastra",
// //           ballastraNotifs,
// //           setBallastraNotifs,
// //           "chatbubble-ellipses-outline"
// //         )}

// //         {/* description text */}
// //         <Text style={styles.descriptionText}>
// //           Don’t miss a thing! Setup notifications to know when your friends send
// //           you a message.
// //         </Text>

// //         {/* OTHER NOTIFICATIONS TITLE */}
// //         <Text style={styles.sectionTitle}>Other notifications</Text>

// //         {renderSwitchRow(
// //           "Get Notifications when your friends stream",
// //           friendsStream,
// //           setFriendsStream,
// //           "tv-outline"
// //         )}
// //         {renderSwitchRow(
// //           "Voice Activity Notifications",
// //           voiceActivity,
// //           setVoiceActivity,
// //           "mic-outline"
// //         )}
// //         {renderSwitchRow(
// //           "Friends Return",
// //           friendsReturn,
// //           setFriendsReturn,
// //           "people-outline"
// //         )}

// //         {/* REACTION NOTIFICATIONS */}
// //         <Text style={styles.sectionTitle}>Reaction Notifications</Text>

// //         <View style={styles.reactionCard}>
// //           <View style={styles.reactionLeft}>
// //             <Text style={styles.reactionLabel}>Notifications</Text>
// //           </View>
// //           <View style={styles.reactionRight}>
// //             <Text style={styles.reactionValue}>{reactionFilter}</Text>
// //             <Ionicons
// //               name="chevron-down"
// //               size={16}
// //               color="#E4E9FF"
// //               style={{ marginLeft: 4 }}
// //             />
// //           </View>
// //         </View>

// //         <Text style={styles.reactionSubText}>
// //           Get notified when your friend returns after a long break.
// //         </Text>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: BG,
// //   },
// //   scroll: {
// //     flex: 1,
// //     paddingHorizontal: 18,
// //   },

// //   /* header */
// //   headerRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     paddingHorizontal: 18,
// //     paddingTop: 4,
// //     paddingBottom: 12,
// //   },
// //   closeHit: {
// //     width: 32,
// //     height: 32,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   headerTitle: {
// //     color: "#FFFFFF",
// //     fontSize: width * 0.045,
// //     fontWeight: "600",
// //   },

// //   /* generic card with switch */
// //   card: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     paddingVertical: 14,
// //     paddingHorizontal: 16,
// //     borderRadius: 16,
// //     borderWidth: 1,
// //     borderColor: "#244BFF",
// //     backgroundColor: "#071F4A",
// //     marginTop: 10,
// //   },
// //   cardLeft: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     flex: 1,
// //     marginRight: 10,
// //   },
// //   iconWrapper: {
// //     width: 30,
// //     height: 30,
// //     borderRadius: 15,
// //     borderWidth: 1,
// //     borderColor: "#4E6FFF",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginRight: 12,
// //   },
// //   cardText: {
// //     color: "#FFFFFF",
// //     fontSize: width * 0.036,
// //     fontWeight: "500",
// //     flexShrink: 1,
// //   },

// //   descriptionText: {
// //     color: "#8E9BC5",
// //     fontSize: width * 0.032,
// //     marginTop: 10,
// //     marginHorizontal: 2,
// //   },

// //   sectionTitle: {
// //     color: "#8E9BC5",
// //     fontSize: width * 0.035,
// //     fontWeight: "500",
// //     marginTop: 18,
// //     marginBottom: 4,
// //   },

// //   /* reaction notifications row */
// //   reactionCard: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     paddingVertical: 14,
// //     paddingHorizontal: 16,
// //     borderRadius: 16,
// //     borderWidth: 1,
// //     borderColor: "#244BFF",
// //     backgroundColor: "#071F4A",
// //     marginTop: 8,
// //   },
// //   reactionLeft: {
// //     flex: 1,
// //   },
// //   reactionLabel: {
// //     color: "#FFFFFF",
// //     fontSize: width * 0.036,
// //     fontWeight: "500",
// //   },
// //   reactionRight: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 10,
// //     paddingVertical: 6,
// //     borderRadius: 999,
// //     backgroundColor: "#020A1E",
// //     borderWidth: 1,
// //     borderColor: "#3F5BFF",
// //   },
// //   reactionValue: {
// //     color: "#E4E9FF",
// //     fontSize: width * 0.031,
// //     fontWeight: "500",
// //   },
// //   reactionSubText: {
// //     color: "#8E9BC5",
// //     fontSize: width * 0.031,
// //     marginTop: 6,
// //     marginHorizontal: 2,
// //   },
// // });
// // screens/v343.js
// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TouchableOpacity,
//   Switch,
//   Dimensions,
//   Modal,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width } = Dimensions.get("window");
// const BG = "#020816";

// const REACTION_OPTIONS = [
//   { key: "all", label: "All Messages" },
//   { key: "dm", label: "Only Direct Messages" },
//   { key: "never", label: "Never" },
// ];

// export default function V343({ navigation }) {
//   // Top switches
//   const [roleMentions, setRoleMentions] = useState(true);
//   const [indirectMentions, setIndirectMentions] = useState(true);
//   const [ballastraNotifs, setBallastraNotifs] = useState(true);

//   const [friendsStream, setFriendsStream] = useState(true);
//   const [voiceActivity, setVoiceActivity] = useState(true);
//   const [friendsReturn, setFriendsReturn] = useState(true);

//   // Reaction notification dropdown
//   const [reactionFilter, setReactionFilter] = useState("all"); // all | dm | never
//   const [reactionModalVisible, setReactionModalVisible] = useState(false);

//   const getReactionLabel = () => {
//     const found = REACTION_OPTIONS.find((o) => o.key === reactionFilter);
//     return found ? found.label : "All Messages";
//   };

//   const handleSelectReaction = (key) => {
//     setReactionFilter(key);
//     setReactionModalVisible(false);
//   };

//   const renderSwitchRow = (label, value, onChange, iconName) => (
//     <View style={styles.card}>
//       <View style={styles.cardLeft}>
//         <View style={styles.iconWrapper}>
//           <Ionicons name={iconName} size={18} color="#FFFFFF" />
//         </View>
//         <Text style={styles.cardText}>{label}</Text>
//       </View>
//       <Switch
//         value={value}
//         onValueChange={onChange}
//         trackColor={{ false: "#25314F", true: "#374BFF" }}
//         thumbColor={value ? "#FFFFFF" : "#A3B1D8"}
//       />
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="light-content" backgroundColor={BG} />

//       {/* HEADER */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity
//           style={styles.closeHit}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons name="close" size={22} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Notifications</Text>
//         <View style={styles.closeHit} />
//       </View>

//       <ScrollView
//         style={styles.scroll}
//         contentContainerStyle={{ paddingBottom: 40 }}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Top 3 toggles */}
//         {renderSwitchRow(
//           "Show Role Mentions",
//           roleMentions,
//           setRoleMentions,
//           "pricetags-outline"
//         )}
//         {renderSwitchRow(
//           "Show Indirect Mentions",
//           indirectMentions,
//           setIndirectMentions,
//           "notifications-outline"
//         )}
//         {renderSwitchRow(
//           "Get Notifications within Ballastra",
//           ballastraNotifs,
//           setBallastraNotifs,
//           "chatbubble-ellipses-outline"
//         )}

//         <Text style={styles.descriptionText}>
//           Don’t miss a thing! Setup notifications to know when your friends send
//           you a message.
//         </Text>

//         {/* Other notifications */}
//         <Text style={styles.sectionTitle}>Other notifications</Text>

//         {renderSwitchRow(
//           "Get Notifications when your friends stream",
//           friendsStream,
//           setFriendsStream,
//           "tv-outline"
//         )}
//         {renderSwitchRow(
//           "Voice Activity Notifications",
//           voiceActivity,
//           setVoiceActivity,
//           "mic-outline"
//         )}
//         {renderSwitchRow(
//           "Friends Return",
//           friendsReturn,
//           setFriendsReturn,
//           "people-outline"
//         )}

//         {/* Reaction notifications */}
//         <Text style={styles.sectionTitle}>Reaction Notifications</Text>

//         <TouchableOpacity
//           activeOpacity={0.9}
//           onPress={() => setReactionModalVisible(true)}
//         >
//           <View style={styles.reactionCard}>
//             <View style={styles.reactionLeft}>
//               <Text style={styles.reactionLabel}>Notifications</Text>
//             </View>
//             <View style={styles.reactionRight}>
//               <Text style={styles.reactionValue}>{getReactionLabel()}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={16}
//                 color="#E4E9FF"
//                 style={{ marginLeft: 4 }}
//               />
//             </View>
//           </View>
//         </TouchableOpacity>

//         <Text style={styles.reactionSubText}>
//           Get notified when your friend returns after a long break.
//         </Text>
//       </ScrollView>

//       {/* REACTION DROPDOWN MODAL */}
//       <Modal
//         visible={reactionModalVisible}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setReactionModalVisible(false)}
//       >
//         <View style={styles.reactionModalBackdrop}>
//           {/* tap outside to close */}
//           <TouchableOpacity
//             style={{ flex: 1 }}
//             activeOpacity={1}
//             onPress={() => setReactionModalVisible(false)}
//           />

//           <View style={styles.reactionModalCard}>
//             {REACTION_OPTIONS.map((opt, index) => {
//               const isOn = reactionFilter === opt.key;
//               return (
//                 <View key={opt.key}>
//                   <TouchableOpacity
//                     activeOpacity={0.9}
//                     style={styles.reactionOptionRow}
//                     onPress={() => handleSelectReaction(opt.key)}
//                   >
//                     <Text style={styles.reactionOptionText}>{opt.label}</Text>
//                     <Switch
//                       value={isOn}
//                       onValueChange={() => handleSelectReaction(opt.key)}
//                       trackColor={{ false: "#25314F", true: "#9C4DFF" }}
//                       thumbColor={isOn ? "#FFFFFF" : "#A3B1D8"}
//                     />
//                   </TouchableOpacity>
//                   {index !== REACTION_OPTIONS.length - 1 && (
//                     <View style={styles.reactionOptionDivider} />
//                   )}
//                 </View>
//               );
//             })}
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: BG,
//   },
//   scroll: {
//     flex: 1,
//     paddingHorizontal: 18,
//   },

//   /* header */
//   headerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 18,
//     paddingTop: 4,
//     paddingBottom: 12,
//   },
//   closeHit: {
//     width: 32,
//     height: 32,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   headerTitle: {
//     color: "#FFFFFF",
//     fontSize: width * 0.045,
//     fontWeight: "600",
//   },

//   /* main switch cards */
//   card: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 14,
//     paddingHorizontal: 16,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: "#244BFF",
//     backgroundColor: "#071F4A",
//     marginTop: 10,
//   },
//   cardLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//     marginRight: 10,
//   },
//   iconWrapper: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: "#4E6FFF",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//   },
//   cardText: {
//     color: "#FFFFFF",
//     fontSize: width * 0.036,
//     fontWeight: "500",
//     flexShrink: 1,
//   },

//   descriptionText: {
//     color: "#8E9BC5",
//     fontSize: width * 0.032,
//     marginTop: 10,
//     marginHorizontal: 2,
//   },

//   sectionTitle: {
//     color: "#8E9BC5",
//     fontSize: width * 0.035,
//     fontWeight: "500",
//     marginTop: 18,
//     marginBottom: 4,
//   },

//   /* reaction row on main screen */
//   reactionCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 14,
//     paddingHorizontal: 16,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: "#244BFF",
//     backgroundColor: "#071F4A",
//     marginTop: 8,
//   },
//   reactionLeft: { flex: 1 },
//   reactionLabel: {
//     color: "#FFFFFF",
//     fontSize: width * 0.036,
//     fontWeight: "500",
//   },
//   reactionRight: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 999,
//     backgroundColor: "#020A1E",
//     borderWidth: 1,
//     borderColor: "#3F5BFF",
//   },
//   reactionValue: {
//     color: "#E4E9FF",
//     fontSize: width * 0.031,
//     fontWeight: "500",
//   },
//   reactionSubText: {
//     color: "#8E9BC5",
//     fontSize: width * 0.031,
//     marginTop: 6,
//     marginHorizontal: 2,
//   },

//   /* reaction dropdown modal styles */
//   reactionModalBackdrop: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.55)",
//     justifyContent: "flex-end",
//   },
//   reactionModalCard: {
//     marginHorizontal: 18,
//     marginBottom: 26,
//     borderRadius: 18,
//     backgroundColor: "#050F25",
//     borderWidth: 1,
//     borderColor: "#243A7A",
//     paddingVertical: 8,
//   },
//   reactionOptionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//   },
//   reactionOptionText: {
//     color: "#FFFFFF",
//     fontSize: width * 0.036,
//     fontWeight: "500",
//   },
//   reactionOptionDivider: {
//     height: StyleSheet.hairlineWidth,
//     backgroundColor: "rgba(255,255,255,0.12)",
//     marginHorizontal: 16,
//   },
// });
// screens/v343.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Switch,
  Dimensions,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const BG = "#020816";

const REACTION_OPTIONS = [
  { key: "all", label: "All Messages" },
  { key: "dm", label: "Only Direct Messages" },
  { key: "never", label: "Never" },
];

export default function V343({ navigation }) {
  // Top section switches
  const [roleMentions, setRoleMentions] = useState(true);
  const [indirectMentions, setIndirectMentions] = useState(true);
  const [ballastraNotifs, setBallastraNotifs] = useState(true);

  const [friendsStream, setFriendsStream] = useState(true);
  const [voiceActivity, setVoiceActivity] = useState(true);
  const [friendsReturn, setFriendsReturn] = useState(true);

  // Reaction dropdown state
  const [reactionFilter, setReactionFilter] = useState("all"); // all | dm | never
  const [reactionModalVisible, setReactionModalVisible] = useState(false);

  const getReactionLabel = () => {
    const found = REACTION_OPTIONS.find((o) => o.key === reactionFilter);
    return found ? found.label : "All Messages";
  };

  const handleSelectReaction = (key) => {
    setReactionFilter(key);        // फक्त हेच option active
    setReactionModalVisible(false);
  };

  const renderSwitchRow = (label, value, onChange, iconName) => (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <View style={styles.iconWrapper}>
          <Ionicons name={iconName} size={18} color="#FFFFFF" />
        </View>
        <Text style={styles.cardText}>{label}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#25314F", true: "#374BFF" }}
        thumbColor={value ? "#FFFFFF" : "#A3B1D8"}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BG} />

      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.closeHit}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={22} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.closeHit} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top 3 toggles */}
        {renderSwitchRow(
          "Show Role Mentions",
          roleMentions,
          setRoleMentions,
          "pricetags-outline"
        )}
        {renderSwitchRow(
          "Show Indirect Mentions",
          indirectMentions,
          setIndirectMentions,
          "notifications-outline"
        )}
        {renderSwitchRow(
          "Get Notifications within Ballastra",
          ballastraNotifs,
          setBallastraNotifs,
          "chatbubble-ellipses-outline"
        )}

        <Text style={styles.descriptionText}>
          Don’t miss a thing! Setup notifications to know when your friends send
          you a message.
        </Text>

        {/* Other notifications */}
        <Text style={styles.sectionTitle}>Other notifications</Text>

        {renderSwitchRow(
          "Get Notifications when your friends stream",
          friendsStream,
          setFriendsStream,
          "tv-outline"
        )}
        {renderSwitchRow(
          "Voice Activity Notifications",
          voiceActivity,
          setVoiceActivity,
          "mic-outline"
        )}
        {renderSwitchRow(
          "Friends Return",
          friendsReturn,
          setFriendsReturn,
          "people-outline"
        )}

        {/* Reaction notifications */}
        <Text style={styles.sectionTitle}>Reaction Notifications</Text>

        {/* main row that opens dropdown */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setReactionModalVisible(true)}
        >
          <View style={styles.reactionCard}>
            <View style={styles.reactionLeft}>
              <Text style={styles.reactionLabel}>Notifications</Text>
            </View>
            <View style={styles.reactionRight}>
              <Text style={styles.reactionValue}>{getReactionLabel()}</Text>
              <Ionicons
                name="chevron-down"
                size={16}
                color="#E4E9FF"
                style={{ marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.reactionSubText}>
          Get notified when your friend returns after a long break.
        </Text>
      </ScrollView>

      {/* DROPDOWN MODAL */}
      <Modal
        visible={reactionModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setReactionModalVisible(false)}
      >
        <View style={styles.reactionModalBackdrop}>
          {/* Outside tap close */}
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={() => setReactionModalVisible(false)}
          />

          <View style={styles.reactionModalCard}>
            {REACTION_OPTIONS.map((opt, index) => {
              const isOn = reactionFilter === opt.key;
              return (
                <View key={opt.key}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.reactionOptionRow}
                    onPress={() => handleSelectReaction(opt.key)}
                  >
                    <Text style={styles.reactionOptionText}>{opt.label}</Text>
                    {/* Switch फक्त show साठी – state वरती handleSelectReaction मध्ये */}
                    <Switch
                      value={isOn}
                      onValueChange={() => handleSelectReaction(opt.key)}
                      trackColor={{ false: "#25314F", true: "#9C4DFF" }}
                      thumbColor={isOn ? "#FFFFFF" : "#A3B1D8"}
                    />
                  </TouchableOpacity>
                  {index !== REACTION_OPTIONS.length - 1 && (
                    <View style={styles.reactionOptionDivider} />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 18,
  },

  /* header */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 12,
  },
  closeHit: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: width * 0.045,
    fontWeight: "600",
  },

  /* generic switch cards */
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#244BFF",
    backgroundColor: "#071F4A",
    marginTop: 10,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#4E6FFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: width * 0.036,
    fontWeight: "500",
    flexShrink: 1,
  },

  descriptionText: {
    color: "#8E9BC5",
    fontSize: width * 0.032,
    marginTop: 10,
    marginHorizontal: 2,
  },

  sectionTitle: {
    color: "#8E9BC5",
    fontSize: width * 0.035,
    fontWeight: "500",
    marginTop: 18,
    marginBottom: 4,
  },

  /* reaction row on main screen */
  reactionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#244BFF",
    backgroundColor: "#071F4A",
    marginTop: 8,
  },
  reactionLeft: { flex: 1 },
  reactionLabel: {
    color: "#FFFFFF",
    fontSize: width * 0.036,
    fontWeight: "500",
  },
  reactionRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#020A1E",
    borderWidth: 1,
    borderColor: "#3F5BFF",
  },
  reactionValue: {
    color: "#E4E9FF",
    fontSize: width * 0.031,
    fontWeight: "500",
  },
  reactionSubText: {
    color: "#8E9BC5",
    fontSize: width * 0.031,
    marginTop: 6,
    marginHorizontal: 2,
  },

  /* dropdown modal */
  reactionModalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "flex-end",
  },
  reactionModalCard: {
    marginHorizontal: 18,
    marginBottom: 26,
    borderRadius: 18,
    backgroundColor: "#050F25",
    borderWidth: 1,
    borderColor: "#243A7A",
    paddingVertical: 8,
  },
  reactionOptionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  reactionOptionText: {
    color: "#FFFFFF",
    fontSize: width * 0.036,
    fontWeight: "500",
  },
  reactionOptionDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(255,255,255,0.12)",
    marginHorizontal: 16,
  },
});
