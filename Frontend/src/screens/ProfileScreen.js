<<<<<<< HEAD
=======
// // // // // // import React, { useState } from "react";
// // // // // // import {
// // // // // //   View,
// // // // // //   Text,
// // // // // //   StyleSheet,
// // // // // //   TouchableOpacity,
// // // // // //   Image,
// // // // // //   FlatList,
// // // // // //   Dimensions,
// // // // // //   StatusBar,
// // // // // //   ScrollView,
// // // // // // } from "react-native";
// // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // import { Ionicons, Feather } from "@expo/vector-icons";

// // // // // // const { width } = Dimensions.get("window");

// // // // // // // 🔥 Online temporary avatar images
// // // // // // const MEMBERS = Array.from({ length: 10 }).map((_, i) => ({
// // // // // //   id: i.toString(),
// // // // // //   name: "! 7SUll_Notashish15",
// // // // // //   avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
// // // // // // }));

// // // // // // const TABS = ["Members", "Media", "Pins", "Links", "Files"];

// // // // // // export default function ProfileScreen({ navigation }) {
// // // // // //   const [activeTab, setActiveTab] = useState("Members");

// // // // // //   const renderMember = ({ item }) => (
// // // // // //     <TouchableOpacity style={styles.memberRow}>
// // // // // //       <View style={styles.memberLeft}>
// // // // // //         <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
// // // // // //         <Text style={styles.memberName}>{item.name}</Text>
// // // // // //       </View>
// // // // // //       <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
// // // // // //       <StatusBar barStyle="light-content" />

// // // // // //       <View style={styles.root}>
// // // // // //         {/* HEADER */}
// // // // // //         <View style={styles.header}>
// // // // // //           <TouchableOpacity
// // // // // //             onPress={() => navigation?.goBack?.()}
// // // // // //             hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// // // // // //           >
// // // // // //             <Ionicons name="chevron-back" size={24} color="#fff" />
// // // // // //           </TouchableOpacity>

// // // // // //           <Text style={styles.headerTitle}>Shusshi Clan</Text>

// // // // // //           <TouchableOpacity>
// // // // // //             <Feather name="more-horizontal" size={22} color="#fff" />
// // // // // //           </TouchableOpacity>
// // // // // //         </View>

// // // // // //         <ScrollView showsVerticalScrollIndicator={false}>
// // // // // //           {/* PROFILE TOP */}
// // // // // //           <View style={styles.profileTop}>
// // // // // //             <View style={styles.avatarWrapper}>
// // // // // //               <View style={styles.avatarBorder}>
// // // // // //                 {/* 🔥 MAIN ONLINE AVATAR */}
// // // // // //                 <Image
// // // // // //                   source={{ uri: "https://i.pravatar.cc/200?img=8" }}
// // // // // //                   style={styles.avatar}
// // // // // //                 />
// // // // // //               </View>

// // // // // //               <View style={styles.badgeWrap}>
// // // // // //                 <Ionicons
// // // // // //                   name="ios-shield-checkmark"
// // // // // //                   size={18}
// // // // // //                   color="#111827"
// // // // // //                 />
// // // // // //               </View>
// // // // // //             </View>

// // // // // //             <Text style={styles.profileName}>Shusshi Clan</Text>

// // // // // //             <Text style={styles.bioText} numberOfLines={3}>
// // // // // //               I don’t just play games; I study them, master them, and break the
// // // // // //               limits everyone else fears. Skilled aim, smart plays, and a
// // // // // //               mindset built for clutch moments.
// // // // // //             </Text>

// // // // // //             <Text style={styles.handleText}>@shusshiclan</Text>
// // // // // //           </View>

// // // // // //           {/* STATS CARD */}
// // // // // //           <View style={styles.statsCard}>
// // // // // //             <View style={styles.statItem}>
// // // // // //               <Text style={styles.statValue}>223.5k</Text>
// // // // // //               <Text style={styles.statLabel}>Orbits</Text>
// // // // // //             </View>
// // // // // //             <View style={styles.statDivider} />
// // // // // //             <View style={styles.statItem}>
// // // // // //               <Text style={styles.statValue}>689</Text>
// // // // // //               <Text style={styles.statLabel}>Orbitors</Text>
// // // // // //             </View>
// // // // // //           </View>

// // // // // //           {/* TABS */}
// // // // // //           <View style={styles.tabsRow}>
// // // // // //             {TABS.map((tab) => {
// // // // // //               const isActive = tab === activeTab;
// // // // // //               return (
// // // // // //                 <TouchableOpacity
// // // // // //                   key={tab}
// // // // // //                   style={styles.tabItem}
// // // // // //                   onPress={() => setActiveTab(tab)}
// // // // // //                 >
// // // // // //                   <Text
// // // // // //                     style={[
// // // // // //                       styles.tabText,
// // // // // //                       isActive && styles.tabTextActive,
// // // // // //                     ]}
// // // // // //                   >
// // // // // //                     {tab}
// // // // // //                   </Text>
// // // // // //                   {isActive && <View style={styles.tabIndicator} />}
// // // // // //                 </TouchableOpacity>
// // // // // //               );
// // // // // //             })}
// // // // // //           </View>

// // // // // //           {/* MEMBERS TAB LIST */}
// // // // // //           {activeTab === "Members" && (
// // // // // //             <View style={styles.membersListWrap}>
// // // // // //               <FlatList
// // // // // //                 data={MEMBERS}
// // // // // //                 keyExtractor={(item) => item.id}
// // // // // //                 scrollEnabled={false}
// // // // // //                 renderItem={renderMember}
// // // // // //               />
// // // // // //             </View>
// // // // // //           )}

// // // // // //           {/* ------ Future Tabs UI ------ */}
// // // // // //           {activeTab !== "Members" && (
// // // // // //             <View style={{ padding: 30 }}>
// // // // // //               <Text style={{ color: "#9CA3AF" }}>No data in {activeTab}</Text>
// // // // // //             </View>
// // // // // //           )}
// // // // // //         </ScrollView>
// // // // // //       </View>
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // }

// // // // // // const BG = "#020617";
// // // // // // const CARD = "#050B24";
// // // // // // const CARD_DARK = "#020517";

// // // // // // const styles = StyleSheet.create({
// // // // // //   safeArea: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: BG,
// // // // // //   },
// // // // // //   root: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: BG,
// // // // // //   },
// // // // // //   header: {
// // // // // //     paddingHorizontal: 16,
// // // // // //     paddingTop: 6,
// // // // // //     paddingBottom: 10,
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "space-between",
// // // // // //   },
// // // // // //   headerTitle: {
// // // // // //     color: "#fff",
// // // // // //     fontSize: 16,
// // // // // //     fontWeight: "600",
// // // // // //   },

// // // // // //   profileTop: {
// // // // // //     alignItems: "center",
// // // // // //     paddingHorizontal: 24,
// // // // // //     paddingTop: 10,
// // // // // //     paddingBottom: 18,
// // // // // //   },

// // // // // //   avatarWrapper: {
// // // // // //     marginVertical: 10,
// // // // // //   },
// // // // // //   avatarBorder: {
// // // // // //     width: 96,
// // // // // //     height: 96,
// // // // // //     borderRadius: 48,
// // // // // //     backgroundColor: "#22C55E",
// // // // // //     justifyContent: "center",
// // // // // //     alignItems: "center",
// // // // // //     borderWidth: 4,
// // // // // //     borderColor: "#16A34A",
// // // // // //   },
// // // // // //   avatar: {
// // // // // //     width: 78,
// // // // // //     height: 78,
// // // // // //     borderRadius: 39,
// // // // // //   },
// // // // // //   badgeWrap: {
// // // // // //     position: "absolute",
// // // // // //     bottom: -2,
// // // // // //     right: -2,
// // // // // //     width: 28,
// // // // // //     height: 28,
// // // // // //     borderRadius: 14,
// // // // // //     backgroundColor: "#A7F3D0",
// // // // // //     justifyContent: "center",
// // // // // //     alignItems: "center",
// // // // // //   },

// // // // // //   profileName: { color: "#fff", fontSize: 18, fontWeight: "700", marginTop: 4 },

// // // // // //   bioText: { marginTop: 8, color: "#CBD5F5", fontSize: 12, textAlign: "center" },

// // // // // //   handleText: { marginTop: 6, color: "#94A3B8", fontSize: 13 },

// // // // // //   statsCard: {
// // // // // //     marginHorizontal: 18,
// // // // // //     marginTop: 12,
// // // // // //     borderRadius: 20,
// // // // // //     backgroundColor: CARD,
// // // // // //     flexDirection: "row",
// // // // // //     paddingVertical: 14,
// // // // // //   },

// // // // // //   statItem: { flex: 1, alignItems: "center" },

// // // // // //   statValue: { color: "#fff", fontSize: 18, fontWeight: "700" },

// // // // // //   statLabel: { color: "#9CA3AF", fontSize: 11, marginTop: 4 },

// // // // // //   statDivider: { width: 1, backgroundColor: "#111827", opacity: 0.8 },

// // // // // //   tabsRow: {
// // // // // //     marginTop: 16,
// // // // // //     marginHorizontal: 18,
// // // // // //     flexDirection: "row",
// // // // // //     justifyContent: "space-between",
// // // // // //   },

// // // // // //   tabItem: { alignItems: "center", flex: 1 },

// // // // // //   tabText: { color: "#9CA3AF", fontSize: 12, fontWeight: "500" },

// // // // // //   tabTextActive: { color: "#ffffff" },

// // // // // //   tabIndicator: {
// // // // // //     marginTop: 6,
// // // // // //     width: 28,
// // // // // //     height: 3,
// // // // // //     borderRadius: 999,
// // // // // //     backgroundColor: "#3B82F6",
// // // // // //   },

// // // // // //   membersListWrap: {
// // // // // //     marginTop: 14,
// // // // // //     marginHorizontal: 18,
// // // // // //   },

// // // // // //   memberRow: {
// // // // // //     flexDirection: "row",
// // // // // //     justifyContent: "space-between",
// // // // // //     alignItems: "center",
// // // // // //     backgroundColor: CARD_DARK,
// // // // // //     borderRadius: 16,
// // // // // //     paddingVertical: 10,
// // // // // //     paddingHorizontal: 12,
// // // // // //     marginBottom: 10,
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: "#111827",
// // // // // //   },

// // // // // //   memberLeft: { flexDirection: "row", alignItems: "center" },

// // // // // //   memberAvatar: {
// // // // // //     width: 34,
// // // // // //     height: 34,
// // // // // //     borderRadius: 17,
// // // // // //     marginRight: 10,
// // // // // //   },

// // // // // //   memberName: { color: "#ffffff", fontSize: 13, fontWeight: "500" },
// // // // // // });
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   StyleSheet,
// // // // //   TouchableOpacity,
// // // // //   Image,
// // // // //   FlatList,
// // // // //   Dimensions,
// // // // //   StatusBar,
// // // // //   ScrollView,
// // // // // } from "react-native";
// // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // import { Ionicons, Feather } from "@expo/vector-icons";

// // // // // const { width } = Dimensions.get("window");
<<<<<<< HEAD
=======
// // // // // const isSmall = width < 360;
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c

// // // // // // 🔥 Online temporary avatar images
// // // // // const MEMBERS = Array.from({ length: 10 }).map((_, i) => ({
// // // // //   id: i.toString(),
// // // // //   name: "! 7SUll_Notashish15",
// // // // //   avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
// // // // // }));

// // // // // const TABS = ["Members", "Media", "Pins", "Links", "Files"];

// // // // // export default function ProfileScreen({ navigation }) {
// // // // //   const [activeTab, setActiveTab] = useState("Members");

// // // // //   const renderMember = ({ item }) => (
// // // // //     <TouchableOpacity style={styles.memberRow}>
// // // // //       <View style={styles.memberLeft}>
// // // // //         <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
<<<<<<< HEAD
// // // // //         <Text style={styles.memberName}>{item.name}</Text>
// // // // //       </View>
// // // // //       <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
=======
// // // // //         <Text style={styles.memberName} numberOfLines={1}>
// // // // //           {item.name}
// // // // //         </Text>
// // // // //       </View>
// // // // //       <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   return (
// // // // //     <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
// // // // //       <StatusBar barStyle="light-content" />

// // // // //       <View style={styles.root}>
// // // // //         {/* HEADER */}
// // // // //         <View style={styles.header}>
// // // // //           <TouchableOpacity
// // // // //             onPress={() => navigation?.goBack?.()}
// // // // //             hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// // // // //           >
// // // // //             <Ionicons name="chevron-back" size={24} color="#fff" />
// // // // //           </TouchableOpacity>

// // // // //           <Text style={styles.headerTitle}>Shusshi Clan</Text>

// // // // //           <TouchableOpacity>
// // // // //             <Feather name="more-horizontal" size={22} color="#fff" />
// // // // //           </TouchableOpacity>
// // // // //         </View>

<<<<<<< HEAD
// // // // //         <ScrollView showsVerticalScrollIndicator={false}>
// // // // //           {/* PROFILE TOP */}
// // // // //           <View style={styles.profileTop}>
// // // // //             <View style={styles.avatarWrapper}>
// // // // //               <View style={styles.avatarBorder}>
// // // // //                 {/* 🔥 MAIN ONLINE AVATAR */}
=======
// // // // //         <ScrollView
// // // // //           showsVerticalScrollIndicator={false}
// // // // //           contentContainerStyle={{ paddingBottom: 24 }}
// // // // //         >
// // // // //           {/* 🔝 MEMBER / PROFILE SECTION (same as image + responsive) */}
// // // // //           <View style={styles.profileTop}>
// // // // //             {/* Avatar with green circle & small image icon */}
// // // // //             <View style={styles.avatarWrapper}>
// // // // //               <View style={styles.avatarBorder}>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //                 <Image
// // // // //                   source={{ uri: "https://i.pravatar.cc/200?img=8" }}
// // // // //                   style={styles.avatar}
// // // // //                 />
// // // // //               </View>

<<<<<<< HEAD
// // // // //               <View style={styles.badgeWrap}>
// // // // //                 <Ionicons
// // // // //                   name="ios-shield-checkmark"
// // // // //                   size={18}
// // // // //                   color="#111827"
// // // // //                 />
// // // // //               </View>
// // // // //             </View>

// // // // //             <Text style={styles.profileName}>Shusshi Clan</Text>

// // // // //             <Text style={styles.bioText} numberOfLines={3}>
// // // // //               I don’t just play games; I study them, master them, and break the
=======
// // // // //               {/* छोटा image icon overlay (जसा screenshot मध्ये आहे) */}
// // // // //               <View style={styles.imageIconWrap}>
// // // // //                 <Ionicons name="image-outline" size={14} color="#020617" />
// // // // //               </View>
// // // // //             </View>

// // // // //             {/* Name row – "*Shusshi Clan >>" */}
// // // // //             <View style={styles.nameRow}>
// // // // //               <Text style={styles.profileName} numberOfLines={1}>
// // // // //                 *"Shusshi Clan &gt;&gt;
// // // // //               </Text>
// // // // //             </View>

// // // // //             {/* Bio / description – responsive width, center text */}
// // // // //             <Text style={styles.bioText}>
// // // // //               I don’t just play games I study them, master them, and break the
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //               limits everyone else fears. Skilled aim, smart plays, and a
// // // // //               mindset built for clutch moments.
// // // // //             </Text>

<<<<<<< HEAD
=======
// // // // //             {/* Handle */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //             <Text style={styles.handleText}>@shusshiclan</Text>
// // // // //           </View>

// // // // //           {/* STATS CARD */}
// // // // //           <View style={styles.statsCard}>
// // // // //             <View style={styles.statItem}>
// // // // //               <Text style={styles.statValue}>223.5k</Text>
// // // // //               <Text style={styles.statLabel}>Orbits</Text>
// // // // //             </View>
// // // // //             <View style={styles.statDivider} />
// // // // //             <View style={styles.statItem}>
// // // // //               <Text style={styles.statValue}>689</Text>
// // // // //               <Text style={styles.statLabel}>Orbitors</Text>
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* TABS */}
// // // // //           <View style={styles.tabsRow}>
// // // // //             {TABS.map((tab) => {
// // // // //               const isActive = tab === activeTab;
// // // // //               return (
// // // // //                 <TouchableOpacity
// // // // //                   key={tab}
// // // // //                   style={styles.tabItem}
// // // // //                   onPress={() => setActiveTab(tab)}
// // // // //                 >
// // // // //                   <Text
// // // // //                     style={[
// // // // //                       styles.tabText,
// // // // //                       isActive && styles.tabTextActive,
// // // // //                     ]}
// // // // //                   >
// // // // //                     {tab}
// // // // //                   </Text>
// // // // //                   {isActive && <View style={styles.tabIndicator} />}
// // // // //                 </TouchableOpacity>
// // // // //               );
// // // // //             })}
// // // // //           </View>

// // // // //           {/* MEMBERS TAB LIST */}
// // // // //           {activeTab === "Members" && (
// // // // //             <View style={styles.membersListWrap}>
// // // // //               <FlatList
// // // // //                 data={MEMBERS}
// // // // //                 keyExtractor={(item) => item.id}
// // // // //                 scrollEnabled={false}
// // // // //                 renderItem={renderMember}
// // // // //               />
// // // // //             </View>
// // // // //           )}

<<<<<<< HEAD
// // // // //           {/* ------ Future Tabs UI ------ */}
=======
// // // // //           {/* Other tabs placeholder */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //           {activeTab !== "Members" && (
// // // // //             <View style={{ padding: 30 }}>
// // // // //               <Text style={{ color: "#9CA3AF" }}>No data in {activeTab}</Text>
// // // // //             </View>
// // // // //           )}
// // // // //         </ScrollView>
// // // // //       </View>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // const BG = "#020617";
// // // // // const CARD = "#050B24";
// // // // // const CARD_DARK = "#020517";

// // // // // const styles = StyleSheet.create({
// // // // //   safeArea: {
// // // // //     flex: 1,
// // // // //     backgroundColor: BG,
// // // // //   },
// // // // //   root: {
// // // // //     flex: 1,
// // // // //     backgroundColor: BG,
// // // // //   },
<<<<<<< HEAD
=======

// // // // //   /* HEADER */
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //   header: {
// // // // //     paddingHorizontal: 16,
// // // // //     paddingTop: 6,
// // // // //     paddingBottom: 10,
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //   },
// // // // //   headerTitle: {
// // // // //     color: "#fff",
// // // // //     fontSize: 16,
// // // // //     fontWeight: "600",
// // // // //   },

<<<<<<< HEAD
// // // // //   profileTop: {
// // // // //     alignItems: "center",
// // // // //     paddingHorizontal: 24,
// // // // //     paddingTop: 10,
// // // // //     paddingBottom: 18,
// // // // //   },

// // // // //   avatarWrapper: {
// // // // //     marginVertical: 10,
// // // // //   },
// // // // //   avatarBorder: {
// // // // //     width: 96,
// // // // //     height: 96,
// // // // //     borderRadius: 48,
=======
// // // // //   /* TOP MEMBER SECTION */
// // // // //   profileTop: {
// // // // //     alignItems: "center",
// // // // //     paddingTop: 12,
// // // // //     paddingBottom: 18,
// // // // //     paddingHorizontal: 16,
// // // // //   },

// // // // //   avatarWrapper: {
// // // // //     marginBottom: 8,
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   avatarBorder: {
// // // // //     width: width * 0.22,
// // // // //     height: width * 0.22,
// // // // //     borderRadius: (width * 0.22) / 2,
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //     backgroundColor: "#22C55E",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     borderWidth: 4,
// // // // //     borderColor: "#16A34A",
// // // // //   },
// // // // //   avatar: {
<<<<<<< HEAD
// // // // //     width: 78,
// // // // //     height: 78,
// // // // //     borderRadius: 39,
// // // // //   },
// // // // //   badgeWrap: {
// // // // //     position: "absolute",
// // // // //     bottom: -2,
// // // // //     right: -2,
// // // // //     width: 28,
// // // // //     height: 28,
// // // // //     borderRadius: 14,
// // // // //     backgroundColor: "#A7F3D0",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //   },

// // // // //   profileName: { color: "#fff", fontSize: 18, fontWeight: "700", marginTop: 4 },

// // // // //   bioText: { marginTop: 8, color: "#CBD5F5", fontSize: 12, textAlign: "center" },

// // // // //   handleText: { marginTop: 6, color: "#94A3B8", fontSize: 13 },

=======
// // // // //     width: width * 0.18,
// // // // //     height: width * 0.18,
// // // // //     borderRadius: (width * 0.18) / 2,
// // // // //   },

// // // // //   // छोटा फोटो icon (image icon overlay)
// // // // //   imageIconWrap: {
// // // // //     position: "absolute",
// // // // //     bottom: 4,
// // // // //     right: width * 0.22 * -0.10, // थोडा बाहर
// // // // //     width: 22,
// // // // //     height: 22,
// // // // //     borderRadius: 11,
// // // // //     backgroundColor: "#F9FAFB",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#E5E7EB",
// // // // //   },

// // // // //   nameRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     marginTop: 6,
// // // // //   },
// // // // //   profileName: {
// // // // //     color: "#fff",
// // // // //     fontSize: isSmall ? 13 : 14,
// // // // //     fontWeight: "600",
// // // // //   },

// // // // //   bioText: {
// // // // //     marginTop: 8,
// // // // //     color: "#E5E7EB",
// // // // //     fontSize: isSmall ? 11 : 12,
// // // // //     lineHeight: isSmall ? 16 : 18,
// // // // //     textAlign: "center",
// // // // //     maxWidth: width * 0.8,
// // // // //   },

// // // // //   handleText: {
// // // // //     marginTop: 8,
// // // // //     color: "#ffffff",
// // // // //     fontSize: isSmall ? 11 : 12,
// // // // //     fontWeight: "600",
// // // // //   },

// // // // //   /* STATS */
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //   statsCard: {
// // // // //     marginHorizontal: 18,
// // // // //     marginTop: 12,
// // // // //     borderRadius: 20,
// // // // //     backgroundColor: CARD,
// // // // //     flexDirection: "row",
// // // // //     paddingVertical: 14,
// // // // //   },
<<<<<<< HEAD

// // // // //   statItem: { flex: 1, alignItems: "center" },

// // // // //   statValue: { color: "#fff", fontSize: 18, fontWeight: "700" },

// // // // //   statLabel: { color: "#9CA3AF", fontSize: 11, marginTop: 4 },

// // // // //   statDivider: { width: 1, backgroundColor: "#111827", opacity: 0.8 },

=======
// // // // //   statItem: { flex: 1, alignItems: "center" },
// // // // //   statValue: { color: "#fff", fontSize: 18, fontWeight: "700" },
// // // // //   statLabel: { color: "#9CA3AF", fontSize: 11, marginTop: 4 },
// // // // //   statDivider: { width: 1, backgroundColor: "#111827", opacity: 0.8 },

// // // // //   /* TABS */
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //   tabsRow: {
// // // // //     marginTop: 16,
// // // // //     marginHorizontal: 18,
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "space-between",
// // // // //   },
<<<<<<< HEAD

// // // // //   tabItem: { alignItems: "center", flex: 1 },

// // // // //   tabText: { color: "#9CA3AF", fontSize: 12, fontWeight: "500" },

// // // // //   tabTextActive: { color: "#ffffff" },

=======
// // // // //   tabItem: { alignItems: "center", flex: 1 },
// // // // //   tabText: { color: "#9CA3AF", fontSize: 12, fontWeight: "500" },
// // // // //   tabTextActive: { color: "#ffffff" },
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //   tabIndicator: {
// // // // //     marginTop: 6,
// // // // //     width: 28,
// // // // //     height: 3,
// // // // //     borderRadius: 999,
// // // // //     backgroundColor: "#3B82F6",
// // // // //   },

<<<<<<< HEAD
=======
// // // // //   /* MEMBERS LIST */
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //   membersListWrap: {
// // // // //     marginTop: 14,
// // // // //     marginHorizontal: 18,
// // // // //   },
<<<<<<< HEAD

=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //   memberRow: {
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     backgroundColor: CARD_DARK,
// // // // //     borderRadius: 16,
// // // // //     paddingVertical: 10,
// // // // //     paddingHorizontal: 12,
// // // // //     marginBottom: 10,
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#111827",
// // // // //   },
<<<<<<< HEAD

// // // // //   memberLeft: { flexDirection: "row", alignItems: "center" },

=======
// // // // //   memberLeft: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     flex: 1,
// // // // //   },
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // //   memberAvatar: {
// // // // //     width: 34,
// // // // //     height: 34,
// // // // //     borderRadius: 17,
// // // // //     marginRight: 10,
// // // // //   },
<<<<<<< HEAD

// // // // //   memberName: { color: "#ffffff", fontSize: 13, fontWeight: "500" },
=======
// // // // //   memberName: {
// // // // //     color: "#ffffff",
// // // // //     fontSize: 13,
// // // // //     fontWeight: "500",
// // // // //     maxWidth: width * 0.55,
// // // // //   },
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // // });
// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   TouchableOpacity,
// // // //   Image,
// // // //   FlatList,
// // // //   Dimensions,
// // // //   StatusBar,
// // // //   ScrollView,
// // // // } from "react-native";
// // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // import { Ionicons, Feather } from "@expo/vector-icons";

// // // // const { width } = Dimensions.get("window");
// // // // const isSmall = width < 360;

<<<<<<< HEAD
// // // // // 🔥 Online temporary avatar images
=======
// // // // // ---- Dummy data ----

// // // // // Members list
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // const MEMBERS = Array.from({ length: 10 }).map((_, i) => ({
// // // //   id: i.toString(),
// // // //   name: "! 7SUll_Notashish15",
// // // //   avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
// // // // }));

<<<<<<< HEAD
=======
// // // // // Media grid items (आपण MediaViewer ला ही list पाठवणार)
// // // // const MEDIA_ITEMS = Array.from({ length: 15 }).map((_, i) => ({
// // // //   id: `media-${i}`,
// // // //   // इथे नंतर real image URLs देऊ शकतोस
// // // //   url: `https://picsum.photos/600/800?random=${i + 1}`,
// // // // }));

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // const TABS = ["Members", "Media", "Pins", "Links", "Files"];

// // // // export default function ProfileScreen({ navigation }) {
// // // //   const [activeTab, setActiveTab] = useState("Members");

<<<<<<< HEAD
=======
// // // //   // ---- Members row renderer ----
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   const renderMember = ({ item }) => (
// // // //     <TouchableOpacity style={styles.memberRow}>
// // // //       <View style={styles.memberLeft}>
// // // //         <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
// // // //         <Text style={styles.memberName} numberOfLines={1}>
// // // //           {item.name}
// // // //         </Text>
// // // //       </View>
// // // //       <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
// // // //     </TouchableOpacity>
// // // //   );

<<<<<<< HEAD
=======
// // // //   // ---- Media cell renderer ----
// // // //   const renderMediaItem = ({ item, index }) => (
// // // //     <TouchableOpacity
// // // //       style={styles.mediaCard}
// // // //       activeOpacity={0.8}
// // // //       onPress={() =>
// // // //         navigation.navigate("MediaViewer", {
// // // //           mediaList: MEDIA_ITEMS,
// // // //           initialIndex: index,
// // // //         })
// // // //       }
// // // //     >
// // // //       {/* BG icon style जसा screenshot मध्ये दिसतो */}
// // // //       <Ionicons name="image-outline" size={26} color="#4B5563" />
// // // //     </TouchableOpacity>
// // // //   );

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   return (
// // // //     <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
// // // //       <StatusBar barStyle="light-content" />

// // // //       <View style={styles.root}>
// // // //         {/* HEADER */}
// // // //         <View style={styles.header}>
// // // //           <TouchableOpacity
// // // //             onPress={() => navigation?.goBack?.()}
// // // //             hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// // // //           >
// // // //             <Ionicons name="chevron-back" size={24} color="#fff" />
// // // //           </TouchableOpacity>

// // // //           <Text style={styles.headerTitle}>Shusshi Clan</Text>

// // // //           <TouchableOpacity>
// // // //             <Feather name="more-horizontal" size={22} color="#fff" />
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         <ScrollView
// // // //           showsVerticalScrollIndicator={false}
// // // //           contentContainerStyle={{ paddingBottom: 24 }}
// // // //         >
<<<<<<< HEAD
// // // //           {/* 🔝 MEMBER / PROFILE SECTION (same as image + responsive) */}
// // // //           <View style={styles.profileTop}>
// // // //             {/* Avatar with green circle & small image icon */}
=======
// // // //           {/* -------- PROFILE TOP (avatar + name + bio + handle) -------- */}
// // // //           <View style={styles.profileTop}>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //             <View style={styles.avatarWrapper}>
// // // //               <View style={styles.avatarBorder}>
// // // //                 <Image
// // // //                   source={{ uri: "https://i.pravatar.cc/200?img=8" }}
// // // //                   style={styles.avatar}
// // // //                 />
// // // //               </View>

<<<<<<< HEAD
// // // //               {/* छोटा image icon overlay (जसा screenshot मध्ये आहे) */}
=======
// // // //               {/* छोटा photo icon जसा UI मध्ये आहे */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //               <View style={styles.imageIconWrap}>
// // // //                 <Ionicons name="image-outline" size={14} color="#020617" />
// // // //               </View>
// // // //             </View>

<<<<<<< HEAD
// // // //             {/* Name row – "*Shusshi Clan >>" */}
// // // //             <View style={styles.nameRow}>
// // // //               <Text style={styles.profileName} numberOfLines={1}>
// // // //                 *"Shusshi Clan &gt;&gt;
// // // //               </Text>
// // // //             </View>

// // // //             {/* Bio / description – responsive width, center text */}
=======
// // // //             <Text style={styles.profileName}>Shusshi Clan</Text>

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //             <Text style={styles.bioText}>
// // // //               I don’t just play games I study them, master them, and break the
// // // //               limits everyone else fears. Skilled aim, smart plays, and a
// // // //               mindset built for clutch moments.
// // // //             </Text>

<<<<<<< HEAD
// // // //             {/* Handle */}
// // // //             <Text style={styles.handleText}>@shusshiclan</Text>
// // // //           </View>

// // // //           {/* STATS CARD */}
=======
// // // //             <Text style={styles.handleText}>@shusshiclan</Text>
// // // //           </View>

// // // //           {/* -------- STATS CARD -------- */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //           <View style={styles.statsCard}>
// // // //             <View style={styles.statItem}>
// // // //               <Text style={styles.statValue}>223.5k</Text>
// // // //               <Text style={styles.statLabel}>Orbits</Text>
// // // //             </View>
// // // //             <View style={styles.statDivider} />
// // // //             <View style={styles.statItem}>
// // // //               <Text style={styles.statValue}>689</Text>
// // // //               <Text style={styles.statLabel}>Orbitors</Text>
// // // //             </View>
// // // //           </View>

<<<<<<< HEAD
// // // //           {/* TABS */}
=======
// // // //           {/* -------- TABS -------- */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //           <View style={styles.tabsRow}>
// // // //             {TABS.map((tab) => {
// // // //               const isActive = tab === activeTab;
// // // //               return (
// // // //                 <TouchableOpacity
// // // //                   key={tab}
// // // //                   style={styles.tabItem}
// // // //                   onPress={() => setActiveTab(tab)}
// // // //                 >
// // // //                   <Text
// // // //                     style={[
// // // //                       styles.tabText,
// // // //                       isActive && styles.tabTextActive,
// // // //                     ]}
// // // //                   >
// // // //                     {tab}
// // // //                   </Text>
// // // //                   {isActive && <View style={styles.tabIndicator} />}
// // // //                 </TouchableOpacity>
// // // //               );
// // // //             })}
// // // //           </View>

<<<<<<< HEAD
// // // //           {/* MEMBERS TAB LIST */}
=======
// // // //           {/* -------- TAB CONTENT -------- */}

// // // //           {/* Members list */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //           {activeTab === "Members" && (
// // // //             <View style={styles.membersListWrap}>
// // // //               <FlatList
// // // //                 data={MEMBERS}
// // // //                 keyExtractor={(item) => item.id}
// // // //                 scrollEnabled={false}
// // // //                 renderItem={renderMember}
// // // //               />
// // // //             </View>
// // // //           )}

<<<<<<< HEAD
// // // //           {/* Other tabs placeholder */}
// // // //           {activeTab !== "Members" && (
=======
// // // //           {/* Media grid – EXACTLY like screenshot */}
// // // //           {activeTab === "Media" && (
// // // //             <View style={styles.mediaGridWrap}>
// // // //               <FlatList
// // // //                 data={MEDIA_ITEMS}
// // // //                 keyExtractor={(item) => item.id}
// // // //                 numColumns={3}
// // // //                 scrollEnabled={false}
// // // //                 renderItem={renderMediaItem}
// // // //                 columnWrapperStyle={styles.mediaRow}
// // // //               />
// // // //             </View>
// // // //           )}

// // // //           {/* बाकी tabs साठी simple placeholder (नंतर हवे तर भरू) */}
// // // //           {activeTab !== "Members" && activeTab !== "Media" && (
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //             <View style={{ padding: 30 }}>
// // // //               <Text style={{ color: "#9CA3AF" }}>No data in {activeTab}</Text>
// // // //             </View>
// // // //           )}
// // // //         </ScrollView>
// // // //       </View>
// // // //     </SafeAreaView>
// // // //   );
// // // // }

<<<<<<< HEAD
=======
// // // // /* ---- STYLES ---- */

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // const BG = "#020617";
// // // // const CARD = "#050B24";
// // // // const CARD_DARK = "#020517";

<<<<<<< HEAD
=======
// // // // // 3-column grid: (screen - side margins - gap*2) / 3
// // // // const MEDIA_CARD_SIZE = (width - 18 * 2 - 12 * 2) / 3;

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // const styles = StyleSheet.create({
// // // //   safeArea: {
// // // //     flex: 1,
// // // //     backgroundColor: BG,
// // // //   },
// // // //   root: {
// // // //     flex: 1,
// // // //     backgroundColor: BG,
// // // //   },

<<<<<<< HEAD
// // // //   /* HEADER */
=======
// // // //   // HEADER
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   header: {
// // // //     paddingHorizontal: 16,
// // // //     paddingTop: 6,
// // // //     paddingBottom: 10,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   headerTitle: {
// // // //     color: "#fff",
// // // //     fontSize: 16,
// // // //     fontWeight: "600",
// // // //   },

<<<<<<< HEAD
// // // //   /* TOP MEMBER SECTION */
=======
// // // //   // PROFILE TOP
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   profileTop: {
// // // //     alignItems: "center",
// // // //     paddingTop: 12,
// // // //     paddingBottom: 18,
// // // //     paddingHorizontal: 16,
// // // //   },
<<<<<<< HEAD

=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   avatarWrapper: {
// // // //     marginBottom: 8,
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   avatarBorder: {
// // // //     width: width * 0.22,
// // // //     height: width * 0.22,
// // // //     borderRadius: (width * 0.22) / 2,
// // // //     backgroundColor: "#22C55E",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     borderWidth: 4,
// // // //     borderColor: "#16A34A",
// // // //   },
// // // //   avatar: {
// // // //     width: width * 0.18,
// // // //     height: width * 0.18,
// // // //     borderRadius: (width * 0.18) / 2,
// // // //   },
<<<<<<< HEAD

// // // //   // छोटा फोटो icon (image icon overlay)
// // // //   imageIconWrap: {
// // // //     position: "absolute",
// // // //     bottom: 4,
// // // //     right: width * 0.22 * -0.10, // थोडा बाहर
=======
// // // //   imageIconWrap: {
// // // //     position: "absolute",
// // // //     bottom: 4,
// // // //     right: -10,
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //     width: 22,
// // // //     height: 22,
// // // //     borderRadius: 11,
// // // //     backgroundColor: "#F9FAFB",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     borderWidth: 1,
// // // //     borderColor: "#E5E7EB",
// // // //   },
<<<<<<< HEAD

// // // //   nameRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     marginTop: 6,
// // // //   },
// // // //   profileName: {
// // // //     color: "#fff",
// // // //     fontSize: isSmall ? 13 : 14,
// // // //     fontWeight: "600",
// // // //   },

// // // //   bioText: {
// // // //     marginTop: 8,
// // // //     color: "#E5E7EB",
=======
// // // //   profileName: {
// // // //     color: "#fff",
// // // //     fontSize: isSmall ? 15 : 16,
// // // //     fontWeight: "700",
// // // //     marginTop: 4,
// // // //   },
// // // //   bioText: {
// // // //     marginTop: 8,
// // // //     color: "#CBD5F5",
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //     fontSize: isSmall ? 11 : 12,
// // // //     lineHeight: isSmall ? 16 : 18,
// // // //     textAlign: "center",
// // // //     maxWidth: width * 0.8,
// // // //   },
<<<<<<< HEAD

=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   handleText: {
// // // //     marginTop: 8,
// // // //     color: "#ffffff",
// // // //     fontSize: isSmall ? 11 : 12,
// // // //     fontWeight: "600",
// // // //   },

<<<<<<< HEAD
// // // //   /* STATS */
=======
// // // //   // STATS CARD
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   statsCard: {
// // // //     marginHorizontal: 18,
// // // //     marginTop: 12,
// // // //     borderRadius: 20,
// // // //     backgroundColor: CARD,
// // // //     flexDirection: "row",
// // // //     paddingVertical: 14,
// // // //   },
// // // //   statItem: { flex: 1, alignItems: "center" },
// // // //   statValue: { color: "#fff", fontSize: 18, fontWeight: "700" },
// // // //   statLabel: { color: "#9CA3AF", fontSize: 11, marginTop: 4 },
// // // //   statDivider: { width: 1, backgroundColor: "#111827", opacity: 0.8 },

<<<<<<< HEAD
// // // //   /* TABS */
=======
// // // //   // TABS
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   tabsRow: {
// // // //     marginTop: 16,
// // // //     marginHorizontal: 18,
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   tabItem: { alignItems: "center", flex: 1 },
// // // //   tabText: { color: "#9CA3AF", fontSize: 12, fontWeight: "500" },
// // // //   tabTextActive: { color: "#ffffff" },
// // // //   tabIndicator: {
// // // //     marginTop: 6,
// // // //     width: 28,
// // // //     height: 3,
// // // //     borderRadius: 999,
// // // //     backgroundColor: "#3B82F6",
// // // //   },

<<<<<<< HEAD
// // // //   /* MEMBERS LIST */
=======
// // // //   // MEMBERS
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // //   membersListWrap: {
// // // //     marginTop: 14,
// // // //     marginHorizontal: 18,
// // // //   },
// // // //   memberRow: {
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     backgroundColor: CARD_DARK,
// // // //     borderRadius: 16,
// // // //     paddingVertical: 10,
// // // //     paddingHorizontal: 12,
// // // //     marginBottom: 10,
// // // //     borderWidth: 1,
// // // //     borderColor: "#111827",
// // // //   },
// // // //   memberLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     flex: 1,
// // // //   },
// // // //   memberAvatar: {
// // // //     width: 34,
// // // //     height: 34,
// // // //     borderRadius: 17,
// // // //     marginRight: 10,
// // // //   },
// // // //   memberName: {
// // // //     color: "#ffffff",
// // // //     fontSize: 13,
// // // //     fontWeight: "500",
// // // //     maxWidth: width * 0.55,
// // // //   },
<<<<<<< HEAD
=======

// // // //   // MEDIA GRID
// // // //   mediaGridWrap: {
// // // //     marginTop: 18,
// // // //     marginHorizontal: 18,
// // // //     marginBottom: 10,
// // // //   },
// // // //   mediaRow: {
// // // //     justifyContent: "space-between",
// // // //     marginBottom: 12,
// // // //   },
// // // //   mediaCard: {
// // // //     width: MEDIA_CARD_SIZE,
// // // //     aspectRatio: 1,
// // // //     borderRadius: 18,
// // // //     backgroundColor: CARD_DARK,
// // // //     borderWidth: 1,
// // // //     borderColor: "#111827",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // // });
// // // import React, { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   Image,
// // //   FlatList,
// // //   Dimensions,
// // //   StatusBar,
// // //   ScrollView,
<<<<<<< HEAD
=======
// // //   Alert,
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // } from "react-native";
// // // import { SafeAreaView } from "react-native-safe-area-context";
// // // import { Ionicons, Feather } from "@expo/vector-icons";

// // // const { width } = Dimensions.get("window");
// // // const isSmall = width < 360;

// // // // ---- Dummy data ----

// // // // Members list
// // // const MEMBERS = Array.from({ length: 10 }).map((_, i) => ({
// // //   id: i.toString(),
// // //   name: "! 7SUll_Notashish15",
// // //   avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
// // // }));

<<<<<<< HEAD
// // // // Media grid items (आपण MediaViewer ला ही list पाठवणार)
// // // const MEDIA_ITEMS = Array.from({ length: 15 }).map((_, i) => ({
// // //   id: `media-${i}`,
// // //   // इथे नंतर real image URLs देऊ शकतोस
// // //   url: `https://picsum.photos/600/800?random=${i + 1}`,
// // // }));

=======
// // // // Media grid items (MediaViewer साठी)
// // // const MEDIA_ITEMS = Array.from({ length: 15 }).map((_, i) => ({
// // //   id: `media-${i}`,
// // //   url: `https://picsum.photos/600/800?random=${i + 1}`,
// // // }));

// // // // Pins list (screenshot style)
// // // const PIN_ITEMS = [
// // //   {
// // //     id: "1",
// // //     author: "Chala",
// // //     avatar: "https://i.pravatar.cc/150?img=12",
// // //     timeAgo: "1mins ago",
// // //     message: "Hi @everyone",
// // //     pinned: true,
// // //     hasImage: false,
// // //   },
// // //   {
// // //     id: "2",
// // //     author: "Chala",
// // //     avatar: "https://i.pravatar.cc/150?img=13",
// // //     timeAgo: "1mins ago",
// // //     message: "Hi @everyone",
// // //     pinned: true,
// // //     hasImage: false,
// // //   },
// // //   {
// // //     id: "3",
// // //     author: "Chala",
// // //     avatar: "https://i.pravatar.cc/150?img=14",
// // //     timeAgo: "1mins ago",
// // //     message: "Hi @everyone",
// // //     pinned: true,
// // //     hasImage: false,
// // //   },
// // //   {
// // //     id: "4",
// // //     author: "NicholasChan",
// // //     avatar: "https://i.pravatar.cc/150?img=15",
// // //     timeAgo: "2h ago",
// // //     message:
// // //       "Hi @everyone Please Check It Out My Nexus Member List sushii @sushishlive corrected my mistake there from last week.",
// // //     pinned: true,
// // //     hasImage: true,
// // //     imageUrl: "https://picsum.photos/600/400?random=99",
// // //   },
// // // ];

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // const TABS = ["Members", "Media", "Pins", "Links", "Files"];

// // // export default function ProfileScreen({ navigation }) {
// // //   const [activeTab, setActiveTab] = useState("Members");

<<<<<<< HEAD
// // //   // ---- Members row renderer ----
=======
// // //   // ---- Members row ----
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //   const renderMember = ({ item }) => (
// // //     <TouchableOpacity style={styles.memberRow}>
// // //       <View style={styles.memberLeft}>
// // //         <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
// // //         <Text style={styles.memberName} numberOfLines={1}>
// // //           {item.name}
// // //         </Text>
// // //       </View>
// // //       <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
// // //     </TouchableOpacity>
// // //   );

<<<<<<< HEAD
// // //   // ---- Media cell renderer ----
=======
// // //   // ---- Media cell ----
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //   const renderMediaItem = ({ item, index }) => (
// // //     <TouchableOpacity
// // //       style={styles.mediaCard}
// // //       activeOpacity={0.8}
// // //       onPress={() =>
// // //         navigation.navigate("MediaViewer", {
// // //           mediaList: MEDIA_ITEMS,
// // //           initialIndex: index,
// // //         })
// // //       }
// // //     >
<<<<<<< HEAD
// // //       {/* BG icon style जसा screenshot मध्ये दिसतो */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //       <Ionicons name="image-outline" size={26} color="#4B5563" />
// // //     </TouchableOpacity>
// // //   );

<<<<<<< HEAD
=======
// // //   // ---- Pin row ----
// // //   const renderPinItem = ({ item }) => (
// // //     <TouchableOpacity
// // //       style={styles.pinRow}
// // //       activeOpacity={0.85}
// // //       onPress={() =>
// // //         Alert.alert("Pinned message", item.message.slice(0, 120) + "...")
// // //       }
// // //     >
// // //       {/* Left side: avatar + content */}
// // //       <View style={styles.pinLeft}>
// // //         <Image source={{ uri: item.avatar }} style={styles.pinAvatar} />

// // //         <View style={styles.pinContent}>
// // //           {/* author + meta */}
// // //           <View style={styles.pinHeaderRow}>
// // //             <Text style={styles.pinAuthor} numberOfLines={1}>
// // //               {item.author}
// // //             </Text>
// // //             <Text style={styles.pinDot}> • </Text>
// // //             <Text style={styles.pinTime}>{item.timeAgo}</Text>

// // //             {item.pinned && (
// // //               <View style={styles.pinBadge}>
// // //                 <Ionicons
// // //                   name="pin-outline"
// // //                   size={11}
// // //                   color="#FACC15"
// // //                   style={{ marginRight: 3 }}
// // //                 />
// // //                 <Text style={styles.pinBadgeText}>Pinned</Text>
// // //               </View>
// // //             )}
// // //           </View>

// // //           {/* message text */}
// // //           <Text style={styles.pinMessage} numberOfLines={2}>
// // //             {item.message}
// // //           </Text>

// // //           {/* optional image preview */}
// // //           {item.hasImage && item.imageUrl && (
// // //             <Image
// // //               source={{ uri: item.imageUrl }}
// // //               style={styles.pinImage}
// // //               resizeMode="cover"
// // //             />
// // //           )}
// // //         </View>
// // //       </View>

// // //       {/* right ellipsis */}
// // //       <TouchableOpacity
// // //         hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// // //         onPress={() => Alert.alert("More", "Pin options coming soon")}
// // //       >
// // //         <Feather name="more-horizontal" size={18} color="#9CA3AF" />
// // //       </TouchableOpacity>
// // //     </TouchableOpacity>
// // //   );

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //   return (
// // //     <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
// // //       <StatusBar barStyle="light-content" />

// // //       <View style={styles.root}>
// // //         {/* HEADER */}
// // //         <View style={styles.header}>
// // //           <TouchableOpacity
// // //             onPress={() => navigation?.goBack?.()}
// // //             hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// // //           >
// // //             <Ionicons name="chevron-back" size={24} color="#fff" />
// // //           </TouchableOpacity>

// // //           <Text style={styles.headerTitle}>Shusshi Clan</Text>

// // //           <TouchableOpacity>
// // //             <Feather name="more-horizontal" size={22} color="#fff" />
// // //           </TouchableOpacity>
// // //         </View>

// // //         <ScrollView
// // //           showsVerticalScrollIndicator={false}
// // //           contentContainerStyle={{ paddingBottom: 24 }}
// // //         >
<<<<<<< HEAD
// // //           {/* -------- PROFILE TOP (avatar + name + bio + handle) -------- */}
=======
// // //           {/* -------- PROFILE TOP -------- */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //           <View style={styles.profileTop}>
// // //             <View style={styles.avatarWrapper}>
// // //               <View style={styles.avatarBorder}>
// // //                 <Image
// // //                   source={{ uri: "https://i.pravatar.cc/200?img=8" }}
// // //                   style={styles.avatar}
// // //                 />
// // //               </View>

<<<<<<< HEAD
// // //               {/* छोटा photo icon जसा UI मध्ये आहे */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //               <View style={styles.imageIconWrap}>
// // //                 <Ionicons name="image-outline" size={14} color="#020617" />
// // //               </View>
// // //             </View>

// // //             <Text style={styles.profileName}>Shusshi Clan</Text>

// // //             <Text style={styles.bioText}>
// // //               I don’t just play games I study them, master them, and break the
// // //               limits everyone else fears. Skilled aim, smart plays, and a
// // //               mindset built for clutch moments.
// // //             </Text>

// // //             <Text style={styles.handleText}>@shusshiclan</Text>
// // //           </View>

// // //           {/* -------- STATS CARD -------- */}
// // //           <View style={styles.statsCard}>
// // //             <View style={styles.statItem}>
// // //               <Text style={styles.statValue}>223.5k</Text>
// // //               <Text style={styles.statLabel}>Orbits</Text>
// // //             </View>
// // //             <View style={styles.statDivider} />
// // //             <View style={styles.statItem}>
// // //               <Text style={styles.statValue}>689</Text>
// // //               <Text style={styles.statLabel}>Orbitors</Text>
// // //             </View>
// // //           </View>

// // //           {/* -------- TABS -------- */}
// // //           <View style={styles.tabsRow}>
// // //             {TABS.map((tab) => {
// // //               const isActive = tab === activeTab;
// // //               return (
// // //                 <TouchableOpacity
// // //                   key={tab}
// // //                   style={styles.tabItem}
// // //                   onPress={() => setActiveTab(tab)}
// // //                 >
// // //                   <Text
// // //                     style={[
// // //                       styles.tabText,
// // //                       isActive && styles.tabTextActive,
// // //                     ]}
// // //                   >
// // //                     {tab}
// // //                   </Text>
// // //                   {isActive && <View style={styles.tabIndicator} />}
// // //                 </TouchableOpacity>
// // //               );
// // //             })}
// // //           </View>

// // //           {/* -------- TAB CONTENT -------- */}

<<<<<<< HEAD
// // //           {/* Members list */}
=======
// // //           {/* Members */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //           {activeTab === "Members" && (
// // //             <View style={styles.membersListWrap}>
// // //               <FlatList
// // //                 data={MEMBERS}
// // //                 keyExtractor={(item) => item.id}
// // //                 scrollEnabled={false}
// // //                 renderItem={renderMember}
// // //               />
// // //             </View>
// // //           )}

<<<<<<< HEAD
// // //           {/* Media grid – EXACTLY like screenshot */}
=======
// // //           {/* Media */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //           {activeTab === "Media" && (
// // //             <View style={styles.mediaGridWrap}>
// // //               <FlatList
// // //                 data={MEDIA_ITEMS}
// // //                 keyExtractor={(item) => item.id}
// // //                 numColumns={3}
// // //                 scrollEnabled={false}
// // //                 renderItem={renderMediaItem}
// // //                 columnWrapperStyle={styles.mediaRow}
// // //               />
// // //             </View>
// // //           )}

<<<<<<< HEAD
// // //           {/* बाकी tabs साठी simple placeholder (नंतर हवे तर भरू) */}
// // //           {activeTab !== "Members" && activeTab !== "Media" && (
// // //             <View style={{ padding: 30 }}>
// // //               <Text style={{ color: "#9CA3AF" }}>No data in {activeTab}</Text>
// // //             </View>
// // //           )}
=======
// // //           {/* Pins */}
// // //           {activeTab === "Pins" && (
// // //             <View style={styles.pinsListWrap}>
// // //               <FlatList
// // //                 data={PIN_ITEMS}
// // //                 keyExtractor={(item) => item.id}
// // //                 scrollEnabled={false}
// // //                 renderItem={renderPinItem}
// // //               />
// // //             </View>
// // //           )}

// // //           {/* बाकी tabs साठी placeholder */}
// // //           {activeTab !== "Members" &&
// // //             activeTab !== "Media" &&
// // //             activeTab !== "Pins" && (
// // //               <View style={{ padding: 30 }}>
// // //                 <Text style={{ color: "#9CA3AF" }}>
// // //                   No data in {activeTab}
// // //                 </Text>
// // //               </View>
// // //             )}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // //         </ScrollView>
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // /* ---- STYLES ---- */

// // // const BG = "#020617";
// // // const CARD = "#050B24";
// // // const CARD_DARK = "#020517";

<<<<<<< HEAD
// // // // 3-column grid: (screen - side margins - gap*2) / 3
=======
// // // // 3-column grid width
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // const MEDIA_CARD_SIZE = (width - 18 * 2 - 12 * 2) / 3;

// // // const styles = StyleSheet.create({
// // //   safeArea: {
// // //     flex: 1,
// // //     backgroundColor: BG,
// // //   },
// // //   root: {
// // //     flex: 1,
// // //     backgroundColor: BG,
// // //   },

// // //   // HEADER
// // //   header: {
// // //     paddingHorizontal: 16,
// // //     paddingTop: 6,
// // //     paddingBottom: 10,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //   },
// // //   headerTitle: {
// // //     color: "#fff",
// // //     fontSize: 16,
// // //     fontWeight: "600",
// // //   },

// // //   // PROFILE TOP
// // //   profileTop: {
// // //     alignItems: "center",
// // //     paddingTop: 12,
// // //     paddingBottom: 18,
// // //     paddingHorizontal: 16,
// // //   },
// // //   avatarWrapper: {
// // //     marginBottom: 8,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },
// // //   avatarBorder: {
// // //     width: width * 0.22,
// // //     height: width * 0.22,
// // //     borderRadius: (width * 0.22) / 2,
// // //     backgroundColor: "#22C55E",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     borderWidth: 4,
// // //     borderColor: "#16A34A",
// // //   },
// // //   avatar: {
// // //     width: width * 0.18,
// // //     height: width * 0.18,
// // //     borderRadius: (width * 0.18) / 2,
// // //   },
// // //   imageIconWrap: {
// // //     position: "absolute",
// // //     bottom: 4,
// // //     right: -10,
// // //     width: 22,
// // //     height: 22,
// // //     borderRadius: 11,
// // //     backgroundColor: "#F9FAFB",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     borderWidth: 1,
// // //     borderColor: "#E5E7EB",
// // //   },
// // //   profileName: {
// // //     color: "#fff",
// // //     fontSize: isSmall ? 15 : 16,
// // //     fontWeight: "700",
// // //     marginTop: 4,
// // //   },
// // //   bioText: {
// // //     marginTop: 8,
// // //     color: "#CBD5F5",
// // //     fontSize: isSmall ? 11 : 12,
// // //     lineHeight: isSmall ? 16 : 18,
// // //     textAlign: "center",
// // //     maxWidth: width * 0.8,
// // //   },
// // //   handleText: {
// // //     marginTop: 8,
// // //     color: "#ffffff",
// // //     fontSize: isSmall ? 11 : 12,
// // //     fontWeight: "600",
// // //   },

// // //   // STATS CARD
// // //   statsCard: {
// // //     marginHorizontal: 18,
// // //     marginTop: 12,
// // //     borderRadius: 20,
// // //     backgroundColor: CARD,
// // //     flexDirection: "row",
// // //     paddingVertical: 14,
// // //   },
// // //   statItem: { flex: 1, alignItems: "center" },
// // //   statValue: { color: "#fff", fontSize: 18, fontWeight: "700" },
// // //   statLabel: { color: "#9CA3AF", fontSize: 11, marginTop: 4 },
// // //   statDivider: { width: 1, backgroundColor: "#111827", opacity: 0.8 },

// // //   // TABS
// // //   tabsRow: {
// // //     marginTop: 16,
// // //     marginHorizontal: 18,
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //   },
// // //   tabItem: { alignItems: "center", flex: 1 },
// // //   tabText: { color: "#9CA3AF", fontSize: 12, fontWeight: "500" },
// // //   tabTextActive: { color: "#ffffff" },
// // //   tabIndicator: {
// // //     marginTop: 6,
// // //     width: 28,
// // //     height: 3,
// // //     borderRadius: 999,
// // //     backgroundColor: "#3B82F6",
// // //   },

// // //   // MEMBERS
// // //   membersListWrap: {
// // //     marginTop: 14,
// // //     marginHorizontal: 18,
// // //   },
// // //   memberRow: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     backgroundColor: CARD_DARK,
// // //     borderRadius: 16,
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 12,
// // //     marginBottom: 10,
// // //     borderWidth: 1,
// // //     borderColor: "#111827",
// // //   },
// // //   memberLeft: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     flex: 1,
// // //   },
// // //   memberAvatar: {
// // //     width: 34,
// // //     height: 34,
// // //     borderRadius: 17,
// // //     marginRight: 10,
// // //   },
// // //   memberName: {
// // //     color: "#ffffff",
// // //     fontSize: 13,
// // //     fontWeight: "500",
// // //     maxWidth: width * 0.55,
// // //   },

// // //   // MEDIA GRID
// // //   mediaGridWrap: {
// // //     marginTop: 18,
// // //     marginHorizontal: 18,
// // //     marginBottom: 10,
// // //   },
// // //   mediaRow: {
// // //     justifyContent: "space-between",
// // //     marginBottom: 12,
// // //   },
// // //   mediaCard: {
// // //     width: MEDIA_CARD_SIZE,
// // //     aspectRatio: 1,
// // //     borderRadius: 18,
// // //     backgroundColor: CARD_DARK,
// // //     borderWidth: 1,
// // //     borderColor: "#111827",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
<<<<<<< HEAD
=======

// // //   // PINS
// // //   pinsListWrap: {
// // //     marginTop: 14,
// // //     marginHorizontal: 18,
// // //   },
// // //   pinRow: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "flex-start",
// // //     paddingVertical: 10,
// // //     marginBottom: 10,
// // //   },
// // //   pinLeft: {
// // //     flexDirection: "row",
// // //     flex: 1,
// // //   },
// // //   pinAvatar: {
// // //     width: 36,
// // //     height: 36,
// // //     borderRadius: 18,
// // //     marginRight: 10,
// // //   },
// // //   pinContent: {
// // //     flex: 1,
// // //   },
// // //   pinHeaderRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 2,
// // //   },
// // //   pinAuthor: {
// // //     color: "#ffffff",
// // //     fontSize: 13,
// // //     fontWeight: "600",
// // //   },
// // //   pinDot: {
// // //     color: "#9CA3AF",
// // //     fontSize: 11,
// // //   },
// // //   pinTime: {
// // //     color: "#9CA3AF",
// // //     fontSize: 11,
// // //   },
// // //   pinBadge: {
// // //     marginLeft: 6,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     paddingHorizontal: 6,
// // //     paddingVertical: 2,
// // //     borderRadius: 999,
// // //     borderWidth: 1,
// // //     borderColor: "#FACC15",
// // //     backgroundColor: "rgba(250, 204, 21, 0.07)",
// // //   },
// // //   pinBadgeText: {
// // //     color: "#FACC15",
// // //     fontSize: 10,
// // //     fontWeight: "500",
// // //   },
// // //   pinMessage: {
// // //     color: "#E5E7EB",
// // //     fontSize: 12,
// // //     lineHeight: 17,
// // //     marginBottom: 6,
// // //   },
// // //   pinImage: {
// // //     width: "100%",
// // //     borderRadius: 16,
// // //     height: 160,
// // //     marginTop: 4,
// // //     backgroundColor: "#020617",
// // //   },
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // // });
// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Image,
// //   FlatList,
// //   Dimensions,
// //   StatusBar,
// //   ScrollView,
// //   Alert,
<<<<<<< HEAD
=======
// //   Linking,
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import { Ionicons, Feather } from "@expo/vector-icons";

// // const { width } = Dimensions.get("window");
// // const isSmall = width < 360;

// // // ---- Dummy data ----

// // // Members list
// // const MEMBERS = Array.from({ length: 10 }).map((_, i) => ({
// //   id: i.toString(),
// //   name: "! 7SUll_Notashish15",
// //   avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
// // }));

<<<<<<< HEAD
// // // Media grid items (MediaViewer साठी)
=======
// // // Media grid items
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // const MEDIA_ITEMS = Array.from({ length: 15 }).map((_, i) => ({
// //   id: `media-${i}`,
// //   url: `https://picsum.photos/600/800?random=${i + 1}`,
// // }));

<<<<<<< HEAD
// // // Pins list (screenshot style)
=======
// // // Pins list
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // const PIN_ITEMS = [
// //   {
// //     id: "1",
// //     author: "Chala",
// //     avatar: "https://i.pravatar.cc/150?img=12",
// //     timeAgo: "1mins ago",
// //     message: "Hi @everyone",
// //     pinned: true,
// //     hasImage: false,
// //   },
// //   {
// //     id: "2",
// //     author: "Chala",
// //     avatar: "https://i.pravatar.cc/150?img=13",
// //     timeAgo: "1mins ago",
// //     message: "Hi @everyone",
// //     pinned: true,
// //     hasImage: false,
// //   },
// //   {
// //     id: "3",
// //     author: "Chala",
// //     avatar: "https://i.pravatar.cc/150?img=14",
// //     timeAgo: "1mins ago",
// //     message: "Hi @everyone",
// //     pinned: true,
// //     hasImage: false,
// //   },
// //   {
// //     id: "4",
// //     author: "NicholasChan",
// //     avatar: "https://i.pravatar.cc/150?img=15",
// //     timeAgo: "2h ago",
// //     message:
// //       "Hi @everyone Please Check It Out My Nexus Member List sushii @sushishlive corrected my mistake there from last week.",
// //     pinned: true,
// //     hasImage: true,
// //     imageUrl: "https://picsum.photos/600/400?random=99",
// //   },
// // ];

<<<<<<< HEAD
=======
// // // Links list (screenshot style)
// // const LINK_ITEMS = [
// //   {
// //     id: "l1",
// //     author: "NicholasChan",
// //     avatar: "https://i.pravatar.cc/150?img=20",
// //     url: "https://tenor.com/en-IN/view/allgamingz-vedy-gud",
// //     previewImage: "https://picsum.photos/800/400?random=31",
// //     channelTag: "#  < media, >",
// //   },
// //   {
// //     id: "l2",
// //     author: "NicholasChan",
// //     avatar: "https://i.pravatar.cc/150?img=21",
// //     url: "https://example.com/some-awesome-link",
// //     previewImage: "https://picsum.photos/800/400?random=32",
// //     channelTag: "#  < media, >",
// //   },
// // ];

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // const TABS = ["Members", "Media", "Pins", "Links", "Files"];

// // export default function ProfileScreen({ navigation }) {
// //   const [activeTab, setActiveTab] = useState("Members");

// //   // ---- Members row ----
// //   const renderMember = ({ item }) => (
// //     <TouchableOpacity style={styles.memberRow}>
// //       <View style={styles.memberLeft}>
// //         <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
// //         <Text style={styles.memberName} numberOfLines={1}>
// //           {item.name}
// //         </Text>
// //       </View>
// //       <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
// //     </TouchableOpacity>
// //   );

// //   // ---- Media cell ----
// //   const renderMediaItem = ({ item, index }) => (
// //     <TouchableOpacity
// //       style={styles.mediaCard}
// //       activeOpacity={0.8}
// //       onPress={() =>
// //         navigation.navigate("MediaViewer", {
// //           mediaList: MEDIA_ITEMS,
// //           initialIndex: index,
// //         })
// //       }
// //     >
// //       <Ionicons name="image-outline" size={26} color="#4B5563" />
// //     </TouchableOpacity>
// //   );

<<<<<<< HEAD
// //   // ---- Pin row ----
=======
// //   // ---- Pins row ----
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //   const renderPinItem = ({ item }) => (
// //     <TouchableOpacity
// //       style={styles.pinRow}
// //       activeOpacity={0.85}
// //       onPress={() =>
// //         Alert.alert("Pinned message", item.message.slice(0, 120) + "...")
// //       }
// //     >
<<<<<<< HEAD
// //       {/* Left side: avatar + content */}
// //       <View style={styles.pinLeft}>
// //         <Image source={{ uri: item.avatar }} style={styles.pinAvatar} />

// //         <View style={styles.pinContent}>
// //           {/* author + meta */}
=======
// //       <View style={styles.pinLeft}>
// //         <Image source={{ uri: item.avatar }} style={styles.pinAvatar} />
// //         <View style={styles.pinContent}>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //           <View style={styles.pinHeaderRow}>
// //             <Text style={styles.pinAuthor} numberOfLines={1}>
// //               {item.author}
// //             </Text>
// //             <Text style={styles.pinDot}> • </Text>
// //             <Text style={styles.pinTime}>{item.timeAgo}</Text>
<<<<<<< HEAD

=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //             {item.pinned && (
// //               <View style={styles.pinBadge}>
// //                 <Ionicons
// //                   name="pin-outline"
// //                   size={11}
// //                   color="#FACC15"
// //                   style={{ marginRight: 3 }}
// //                 />
// //                 <Text style={styles.pinBadgeText}>Pinned</Text>
// //               </View>
// //             )}
// //           </View>

<<<<<<< HEAD
// //           {/* message text */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //           <Text style={styles.pinMessage} numberOfLines={2}>
// //             {item.message}
// //           </Text>

<<<<<<< HEAD
// //           {/* optional image preview */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //           {item.hasImage && item.imageUrl && (
// //             <Image
// //               source={{ uri: item.imageUrl }}
// //               style={styles.pinImage}
// //               resizeMode="cover"
// //             />
// //           )}
// //         </View>
// //       </View>

<<<<<<< HEAD
// //       {/* right ellipsis */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //       <TouchableOpacity
// //         hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// //         onPress={() => Alert.alert("More", "Pin options coming soon")}
// //       >
// //         <Feather name="more-horizontal" size={18} color="#9CA3AF" />
// //       </TouchableOpacity>
// //     </TouchableOpacity>
// //   );

<<<<<<< HEAD
=======
// //   // ---- Links row ----
// //   const handleOpenUrl = async (url) => {
// //     try {
// //       const supported = await Linking.canOpenURL(url);
// //       if (supported) {
// //         await Linking.openURL(url);
// //       } else {
// //         Alert.alert("Link error", "Cannot open this URL");
// //       }
// //     } catch (e) {
// //       Alert.alert("Link error", "Something went wrong opening the link");
// //     }
// //   };

// //   const renderLinkItem = ({ item }) => (
// //     <View style={styles.linkCard}>
// //       {/* Top preview image */}
// //       <TouchableOpacity
// //         activeOpacity={0.9}
// //         onPress={() => handleOpenUrl(item.url)}
// //       >
// //         <Image
// //           source={{ uri: item.previewImage }}
// //           style={styles.linkPreview}
// //           resizeMode="cover"
// //         />
// //       </TouchableOpacity>

// //       {/* Bottom content */}
// //       <View style={styles.linkContent}>
// //         {/* Row 1: avatar + name + tag + external icon */}
// //         <View style={styles.linkHeaderRow}>
// //           <View style={styles.linkHeaderLeft}>
// //             <Image source={{ uri: item.avatar }} style={styles.linkAvatar} />
// //             <View>
// //               <Text style={styles.linkAuthor}>{item.author}</Text>
// //               <Text style={styles.linkChannelTag}>{item.channelTag}</Text>
// //             </View>
// //           </View>

// //           <TouchableOpacity onPress={() => handleOpenUrl(item.url)}>
// //             <Ionicons name="open-outline" size={18} color="#E5E7EB" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Row 2: URL line */}
// //         <TouchableOpacity
// //           style={styles.linkUrlRow}
// //           onPress={() => handleOpenUrl(item.url)}
// //           activeOpacity={0.8}
// //         >
// //           <Ionicons name="link-outline" size={14} color="#60A5FA" />
// //           <Text style={styles.linkUrlText} numberOfLines={1}>
// //             {item.url}
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //   return (
// //     <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
// //       <StatusBar barStyle="light-content" />

// //       <View style={styles.root}>
// //         {/* HEADER */}
// //         <View style={styles.header}>
// //           <TouchableOpacity
// //             onPress={() => navigation?.goBack?.()}
// //             hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// //           >
// //             <Ionicons name="chevron-back" size={24} color="#fff" />
// //           </TouchableOpacity>

// //           <Text style={styles.headerTitle}>Shusshi Clan</Text>

// //           <TouchableOpacity>
// //             <Feather name="more-horizontal" size={22} color="#fff" />
// //           </TouchableOpacity>
// //         </View>

// //         <ScrollView
// //           showsVerticalScrollIndicator={false}
// //           contentContainerStyle={{ paddingBottom: 24 }}
// //         >
// //           {/* -------- PROFILE TOP -------- */}
// //           <View style={styles.profileTop}>
// //             <View style={styles.avatarWrapper}>
// //               <View style={styles.avatarBorder}>
// //                 <Image
// //                   source={{ uri: "https://i.pravatar.cc/200?img=8" }}
// //                   style={styles.avatar}
// //                 />
// //               </View>

// //               <View style={styles.imageIconWrap}>
// //                 <Ionicons name="image-outline" size={14} color="#020617" />
// //               </View>
// //             </View>

// //             <Text style={styles.profileName}>Shusshi Clan</Text>

// //             <Text style={styles.bioText}>
// //               I don’t just play games I study them, master them, and break the
// //               limits everyone else fears. Skilled aim, smart plays, and a
// //               mindset built for clutch moments.
// //             </Text>

// //             <Text style={styles.handleText}>@shusshiclan</Text>
// //           </View>

// //           {/* -------- STATS CARD -------- */}
// //           <View style={styles.statsCard}>
// //             <View style={styles.statItem}>
// //               <Text style={styles.statValue}>223.5k</Text>
// //               <Text style={styles.statLabel}>Orbits</Text>
// //             </View>
// //             <View style={styles.statDivider} />
// //             <View style={styles.statItem}>
// //               <Text style={styles.statValue}>689</Text>
// //               <Text style={styles.statLabel}>Orbitors</Text>
// //             </View>
// //           </View>

// //           {/* -------- TABS -------- */}
// //           <View style={styles.tabsRow}>
// //             {TABS.map((tab) => {
// //               const isActive = tab === activeTab;
// //               return (
// //                 <TouchableOpacity
// //                   key={tab}
// //                   style={styles.tabItem}
// //                   onPress={() => setActiveTab(tab)}
// //                 >
// //                   <Text
// //                     style={[
// //                       styles.tabText,
// //                       isActive && styles.tabTextActive,
// //                     ]}
// //                   >
// //                     {tab}
// //                   </Text>
// //                   {isActive && <View style={styles.tabIndicator} />}
// //                 </TouchableOpacity>
// //               );
// //             })}
// //           </View>

// //           {/* -------- TAB CONTENT -------- */}

<<<<<<< HEAD
// //           {/* Members */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //           {activeTab === "Members" && (
// //             <View style={styles.membersListWrap}>
// //               <FlatList
// //                 data={MEMBERS}
// //                 keyExtractor={(item) => item.id}
// //                 scrollEnabled={false}
// //                 renderItem={renderMember}
// //               />
// //             </View>
// //           )}

<<<<<<< HEAD
// //           {/* Media */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //           {activeTab === "Media" && (
// //             <View style={styles.mediaGridWrap}>
// //               <FlatList
// //                 data={MEDIA_ITEMS}
// //                 keyExtractor={(item) => item.id}
// //                 numColumns={3}
// //                 scrollEnabled={false}
// //                 renderItem={renderMediaItem}
// //                 columnWrapperStyle={styles.mediaRow}
// //               />
// //             </View>
// //           )}

<<<<<<< HEAD
// //           {/* Pins */}
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //           {activeTab === "Pins" && (
// //             <View style={styles.pinsListWrap}>
// //               <FlatList
// //                 data={PIN_ITEMS}
// //                 keyExtractor={(item) => item.id}
// //                 scrollEnabled={false}
// //                 renderItem={renderPinItem}
// //               />
// //             </View>
// //           )}

<<<<<<< HEAD
// //           {/* बाकी tabs साठी placeholder */}
// //           {activeTab !== "Members" &&
// //             activeTab !== "Media" &&
// //             activeTab !== "Pins" && (
// //               <View style={{ padding: 30 }}>
// //                 <Text style={{ color: "#9CA3AF" }}>
// //                   No data in {activeTab}
// //                 </Text>
// //               </View>
// //             )}
=======
// //           {activeTab === "Links" && (
// //             <View style={styles.linksListWrap}>
// //               <FlatList
// //                 data={LINK_ITEMS}
// //                 keyExtractor={(item) => item.id}
// //                 scrollEnabled={false}
// //                 renderItem={renderLinkItem}
// //               />
// //             </View>
// //           )}

// //           {activeTab === "Files" && (
// //             <View style={{ padding: 30 }}>
// //               <Text style={{ color: "#9CA3AF" }}>No files yet</Text>
// //             </View>
// //           )}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //         </ScrollView>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // /* ---- STYLES ---- */

// // const BG = "#020617";
// // const CARD = "#050B24";
// // const CARD_DARK = "#020517";

<<<<<<< HEAD
// // // 3-column grid width
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// // const MEDIA_CARD_SIZE = (width - 18 * 2 - 12 * 2) / 3;

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: BG,
// //   },
// //   root: {
// //     flex: 1,
// //     backgroundColor: BG,
// //   },

// //   // HEADER
// //   header: {
// //     paddingHorizontal: 16,
// //     paddingTop: 6,
// //     paddingBottom: 10,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   headerTitle: {
// //     color: "#fff",
// //     fontSize: 16,
// //     fontWeight: "600",
// //   },

// //   // PROFILE TOP
// //   profileTop: {
// //     alignItems: "center",
// //     paddingTop: 12,
// //     paddingBottom: 18,
// //     paddingHorizontal: 16,
// //   },
// //   avatarWrapper: {
// //     marginBottom: 8,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   avatarBorder: {
// //     width: width * 0.22,
// //     height: width * 0.22,
// //     borderRadius: (width * 0.22) / 2,
// //     backgroundColor: "#22C55E",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderWidth: 4,
// //     borderColor: "#16A34A",
// //   },
// //   avatar: {
// //     width: width * 0.18,
// //     height: width * 0.18,
// //     borderRadius: (width * 0.18) / 2,
// //   },
// //   imageIconWrap: {
// //     position: "absolute",
// //     bottom: 4,
// //     right: -10,
// //     width: 22,
// //     height: 22,
// //     borderRadius: 11,
// //     backgroundColor: "#F9FAFB",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderWidth: 1,
// //     borderColor: "#E5E7EB",
// //   },
// //   profileName: {
// //     color: "#fff",
// //     fontSize: isSmall ? 15 : 16,
// //     fontWeight: "700",
// //     marginTop: 4,
// //   },
// //   bioText: {
// //     marginTop: 8,
// //     color: "#CBD5F5",
// //     fontSize: isSmall ? 11 : 12,
// //     lineHeight: isSmall ? 16 : 18,
// //     textAlign: "center",
// //     maxWidth: width * 0.8,
// //   },
// //   handleText: {
// //     marginTop: 8,
// //     color: "#ffffff",
// //     fontSize: isSmall ? 11 : 12,
// //     fontWeight: "600",
// //   },

// //   // STATS CARD
// //   statsCard: {
// //     marginHorizontal: 18,
// //     marginTop: 12,
// //     borderRadius: 20,
// //     backgroundColor: CARD,
// //     flexDirection: "row",
// //     paddingVertical: 14,
// //   },
// //   statItem: { flex: 1, alignItems: "center" },
// //   statValue: { color: "#fff", fontSize: 18, fontWeight: "700" },
// //   statLabel: { color: "#9CA3AF", fontSize: 11, marginTop: 4 },
// //   statDivider: { width: 1, backgroundColor: "#111827", opacity: 0.8 },

// //   // TABS
// //   tabsRow: {
// //     marginTop: 16,
// //     marginHorizontal: 18,
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //   },
// //   tabItem: { alignItems: "center", flex: 1 },
// //   tabText: { color: "#9CA3AF", fontSize: 12, fontWeight: "500" },
// //   tabTextActive: { color: "#ffffff" },
// //   tabIndicator: {
// //     marginTop: 6,
// //     width: 28,
// //     height: 3,
// //     borderRadius: 999,
// //     backgroundColor: "#3B82F6",
// //   },

// //   // MEMBERS
// //   membersListWrap: {
// //     marginTop: 14,
// //     marginHorizontal: 18,
// //   },
// //   memberRow: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     backgroundColor: CARD_DARK,
// //     borderRadius: 16,
// //     paddingVertical: 10,
// //     paddingHorizontal: 12,
// //     marginBottom: 10,
// //     borderWidth: 1,
// //     borderColor: "#111827",
// //   },
// //   memberLeft: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     flex: 1,
// //   },
// //   memberAvatar: {
// //     width: 34,
// //     height: 34,
// //     borderRadius: 17,
// //     marginRight: 10,
// //   },
// //   memberName: {
// //     color: "#ffffff",
// //     fontSize: 13,
// //     fontWeight: "500",
// //     maxWidth: width * 0.55,
// //   },

// //   // MEDIA GRID
// //   mediaGridWrap: {
// //     marginTop: 18,
// //     marginHorizontal: 18,
// //     marginBottom: 10,
// //   },
// //   mediaRow: {
// //     justifyContent: "space-between",
// //     marginBottom: 12,
// //   },
// //   mediaCard: {
// //     width: MEDIA_CARD_SIZE,
// //     aspectRatio: 1,
// //     borderRadius: 18,
// //     backgroundColor: CARD_DARK,
// //     borderWidth: 1,
// //     borderColor: "#111827",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },

// //   // PINS
// //   pinsListWrap: {
// //     marginTop: 14,
// //     marginHorizontal: 18,
// //   },
// //   pinRow: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     paddingVertical: 10,
// //     marginBottom: 10,
// //   },
// //   pinLeft: {
// //     flexDirection: "row",
// //     flex: 1,
// //   },
// //   pinAvatar: {
// //     width: 36,
// //     height: 36,
// //     borderRadius: 18,
// //     marginRight: 10,
// //   },
// //   pinContent: {
// //     flex: 1,
// //   },
// //   pinHeaderRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 2,
<<<<<<< HEAD
=======
// //     flexWrap: "wrap",
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// //   },
// //   pinAuthor: {
// //     color: "#ffffff",
// //     fontSize: 13,
// //     fontWeight: "600",
// //   },
// //   pinDot: {
// //     color: "#9CA3AF",
// //     fontSize: 11,
// //   },
// //   pinTime: {
// //     color: "#9CA3AF",
// //     fontSize: 11,
// //   },
// //   pinBadge: {
// //     marginLeft: 6,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 6,
// //     paddingVertical: 2,
// //     borderRadius: 999,
// //     borderWidth: 1,
// //     borderColor: "#FACC15",
// //     backgroundColor: "rgba(250, 204, 21, 0.07)",
// //   },
// //   pinBadgeText: {
// //     color: "#FACC15",
// //     fontSize: 10,
// //     fontWeight: "500",
// //   },
// //   pinMessage: {
// //     color: "#E5E7EB",
// //     fontSize: 12,
// //     lineHeight: 17,
// //     marginBottom: 6,
// //   },
// //   pinImage: {
// //     width: "100%",
// //     borderRadius: 16,
// //     height: 160,
// //     marginTop: 4,
// //     backgroundColor: "#020617",
// //   },
<<<<<<< HEAD
// // });
=======

// //   // LINKS
// //   linksListWrap: {
// //     marginTop: 14,
// //     marginHorizontal: 18,
// //   },
// //   linkCard: {
// //     backgroundColor: CARD_DARK,
// //     borderRadius: 20,
// //     marginBottom: 14,
// //     borderWidth: 1,
// //     borderColor: "#111827",
// //     overflow: "hidden",
// //   },
// //   linkPreview: {
// //     width: "100%",
// //     height: 130,
// //     backgroundColor: "#020617",
// //   },
// //   linkContent: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 10,
// //   },
// //   linkHeaderRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   linkHeaderLeft: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     flex: 1,
// //   },
// //   linkAvatar: {
// //     width: 30,
// //     height: 30,
// //     borderRadius: 15,
// //     marginRight: 8,
// //   },
// //   linkAuthor: {
// //     color: "#ffffff",
// //     fontSize: 13,
// //     fontWeight: "600",
// //   },
// //   linkChannelTag: {
// //     color: "#9CA3AF",
// //     fontSize: 11,
// //     marginTop: 1,
// //   },
// //   linkUrlRow: {
// //     marginTop: 8,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   linkUrlText: {
// //     marginLeft: 6,
// //     color: "#60A5FA",
// //     fontSize: 11,
// //     flex: 1,
// //   },
// // });
// // src/screens/ProfileScreen.js
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Dimensions,
//   StatusBar,
//   ScrollView,
//   Alert,
//   Linking,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons, Feather } from "@expo/vector-icons";

<<<<<<< HEAD
// const { width } = Dimensions.get("window");
// const isSmall = width < 360;

// // ---- Dummy data ----

// // Members list
=======
// /* ---------- RESPONSIVE HELPERS ---------- */
// const { width, height } = Dimensions.get("window");

// // iPhone 11 base
// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;

// const scale = (size) => (width / guidelineBaseWidth) * size;
// const verticalScale = (size) => (height / guidelineBaseHeight) * size;
// const moderateScale = (size, factor = 0.5) =>
//   size + (scale(size) - size) * factor;

// const isSmall = width < 360;

// /* ---------- DUMMY DATA ---------- */

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// const MEMBERS = Array.from({ length: 10 }).map((_, i) => ({
//   id: i.toString(),
//   name: "! 7SUll_Notashish15",
//   avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
// }));

<<<<<<< HEAD
// // Media grid items
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// const MEDIA_ITEMS = Array.from({ length: 15 }).map((_, i) => ({
//   id: `media-${i}`,
//   url: `https://picsum.photos/600/800?random=${i + 1}`,
// }));

<<<<<<< HEAD
// // Pins list
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// const PIN_ITEMS = [
//   {
//     id: "1",
//     author: "Chala",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     timeAgo: "1mins ago",
//     message: "Hi @everyone",
//     pinned: true,
//     hasImage: false,
//   },
//   {
<<<<<<< HEAD
//     id: "2",
//     author: "Chala",
//     avatar: "https://i.pravatar.cc/150?img=13",
//     timeAgo: "1mins ago",
//     message: "Hi @everyone",
//     pinned: true,
//     hasImage: false,
//   },
//   {
//     id: "3",
//     author: "Chala",
//     avatar: "https://i.pravatar.cc/150?img=14",
//     timeAgo: "1mins ago",
//     message: "Hi @everyone",
//     pinned: true,
//     hasImage: false,
//   },
//   {
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     id: "4",
//     author: "NicholasChan",
//     avatar: "https://i.pravatar.cc/150?img=15",
//     timeAgo: "2h ago",
//     message:
//       "Hi @everyone Please Check It Out My Nexus Member List sushii @sushishlive corrected my mistake there from last week.",
//     pinned: true,
//     hasImage: true,
//     imageUrl: "https://picsum.photos/600/400?random=99",
//   },
// ];

<<<<<<< HEAD
// // Links list (screenshot style)
=======
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// const LINK_ITEMS = [
//   {
//     id: "l1",
//     author: "NicholasChan",
//     avatar: "https://i.pravatar.cc/150?img=20",
//     url: "https://tenor.com/en-IN/view/allgamingz-vedy-gud",
//     previewImage: "https://picsum.photos/800/400?random=31",
//     channelTag: "#  < media, >",
//   },
//   {
//     id: "l2",
//     author: "NicholasChan",
//     avatar: "https://i.pravatar.cc/150?img=21",
//     url: "https://example.com/some-awesome-link",
//     previewImage: "https://picsum.photos/800/400?random=32",
//     channelTag: "#  < media, >",
//   },
// ];

<<<<<<< HEAD
=======
// const FILE_ITEMS = [
//   {
//     id: "f1",
//     author: "NicholasChan",
//     avatar: "https://i.pravatar.cc/150?img=22",
//     filename: "Game_Assets.zip",
//     size: "12.3 MB",
//     url: "https://example.com/files/game_assets.zip",
//     previewImage: "https://picsum.photos/800/400?random=41",
//   },
//   {
//     id: "f2",
//     author: "NicholasChan",
//     avatar: "https://i.pravatar.cc/150?img=23",
//     filename: "Rules_and_Guide.pdf",
//     size: "1.1 MB",
//     url: "https://example.com/files/rules_guide.pdf",
//     previewImage: "https://picsum.photos/800/400?random=42",
//   },
// ];

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
// const TABS = ["Members", "Media", "Pins", "Links", "Files"];

// export default function ProfileScreen({ navigation }) {
//   const [activeTab, setActiveTab] = useState("Members");

<<<<<<< HEAD
//   // ---- Members row ----
//   const renderMember = ({ item }) => (
//     <TouchableOpacity style={styles.memberRow}>
=======
//   const openUrl = async (url) => {
//     try {
//       const supported = await Linking.canOpenURL(url);
//       if (supported) {
//         await Linking.openURL(url);
//       } else {
//         Alert.alert("Cannot open", "This URL can't be opened on device.");
//       }
//     } catch (err) {
//       Alert.alert("Error", "Unable to open link.");
//     }
//   };

//   /* ---------- RENDER FUNCTIONS ---------- */

//   const renderMember = ({ item }) => (
//     <TouchableOpacity style={styles.memberRow} activeOpacity={0.85}>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//       <View style={styles.memberLeft}>
//         <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
//         <Text style={styles.memberName} numberOfLines={1}>
//           {item.name}
//         </Text>
//       </View>
<<<<<<< HEAD
//       <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
//     </TouchableOpacity>
//   );

//   // ---- Media cell ----
//   const renderMediaItem = ({ item, index }) => (
//     <TouchableOpacity
//       style={styles.mediaCard}
//       activeOpacity={0.8}
=======
//       <Ionicons name="chevron-forward" size={moderateScale(16)} color="#9CA3AF" />
//     </TouchableOpacity>
//   );

//   const renderMediaItem = ({ item, index }) => (
//     <TouchableOpacity
//       style={styles.mediaCard}
//       activeOpacity={0.85}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//       onPress={() =>
//         navigation.navigate("MediaViewer", {
//           mediaList: MEDIA_ITEMS,
//           initialIndex: index,
//         })
//       }
//     >
<<<<<<< HEAD
//       <Ionicons name="image-outline" size={26} color="#4B5563" />
//     </TouchableOpacity>
//   );

//   // ---- Pins row ----
=======
//       <Ionicons name="image-outline" size={moderateScale(24)} color="#4B5563" />
//     </TouchableOpacity>
//   );

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   const renderPinItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.pinRow}
//       activeOpacity={0.85}
<<<<<<< HEAD
//       onPress={() =>
//         Alert.alert("Pinned message", item.message.slice(0, 120) + "...")
//       }
=======
//       onPress={() => Alert.alert("Pinned", item.message)}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     >
//       <View style={styles.pinLeft}>
//         <Image source={{ uri: item.avatar }} style={styles.pinAvatar} />
//         <View style={styles.pinContent}>
//           <View style={styles.pinHeaderRow}>
<<<<<<< HEAD
//             <Text style={styles.pinAuthor} numberOfLines={1}>
//               {item.author}
//             </Text>
=======
//             <Text style={styles.pinAuthor}>{item.author}</Text>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//             <Text style={styles.pinDot}> • </Text>
//             <Text style={styles.pinTime}>{item.timeAgo}</Text>
//             {item.pinned && (
//               <View style={styles.pinBadge}>
//                 <Ionicons
//                   name="pin-outline"
<<<<<<< HEAD
//                   size={11}
//                   color="#FACC15"
//                   style={{ marginRight: 3 }}
=======
//                   size={moderateScale(10)}
//                   color="#FACC15"
//                   style={{ marginRight: moderateScale(3) }}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//                 />
//                 <Text style={styles.pinBadgeText}>Pinned</Text>
//               </View>
//             )}
//           </View>

//           <Text style={styles.pinMessage} numberOfLines={2}>
//             {item.message}
//           </Text>

<<<<<<< HEAD
//           {item.hasImage && item.imageUrl && (
=======
//           {item.hasImage && (
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//             <Image
//               source={{ uri: item.imageUrl }}
//               style={styles.pinImage}
//               resizeMode="cover"
//             />
//           )}
//         </View>
//       </View>

//       <TouchableOpacity
<<<<<<< HEAD
//         hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
//         onPress={() => Alert.alert("More", "Pin options coming soon")}
//       >
//         <Feather name="more-horizontal" size={18} color="#9CA3AF" />
=======
//         onPress={() => Alert.alert("More", "Options coming soon")}
//         hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
//       >
//         <Feather name="more-horizontal" size={moderateScale(16)} color="#9CA3AF" />
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

<<<<<<< HEAD
//   // ---- Links row ----
//   const handleOpenUrl = async (url) => {
//     try {
//       const supported = await Linking.canOpenURL(url);
//       if (supported) {
//         await Linking.openURL(url);
//       } else {
//         Alert.alert("Link error", "Cannot open this URL");
//       }
//     } catch (e) {
//       Alert.alert("Link error", "Something went wrong opening the link");
//     }
//   };

//   const renderLinkItem = ({ item }) => (
//     <View style={styles.linkCard}>
//       {/* Top preview image */}
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() => handleOpenUrl(item.url)}
//       >
=======
//   const renderLinkItem = ({ item }) => (
//     <View style={styles.linkCard}>
//       <TouchableOpacity activeOpacity={0.9} onPress={() => openUrl(item.url)}>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//         <Image
//           source={{ uri: item.previewImage }}
//           style={styles.linkPreview}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>

<<<<<<< HEAD
//       {/* Bottom content */}
//       <View style={styles.linkContent}>
//         {/* Row 1: avatar + name + tag + external icon */}
=======
//       <View style={styles.linkContent}>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//         <View style={styles.linkHeaderRow}>
//           <View style={styles.linkHeaderLeft}>
//             <Image source={{ uri: item.avatar }} style={styles.linkAvatar} />
//             <View>
//               <Text style={styles.linkAuthor}>{item.author}</Text>
//               <Text style={styles.linkChannelTag}>{item.channelTag}</Text>
//             </View>
//           </View>

<<<<<<< HEAD
//           <TouchableOpacity onPress={() => handleOpenUrl(item.url)}>
//             <Ionicons name="open-outline" size={18} color="#E5E7EB" />
//           </TouchableOpacity>
//         </View>

//         {/* Row 2: URL line */}
//         <TouchableOpacity
//           style={styles.linkUrlRow}
//           onPress={() => handleOpenUrl(item.url)}
//           activeOpacity={0.8}
//         >
//           <Ionicons name="link-outline" size={14} color="#60A5FA" />
=======
//           <TouchableOpacity onPress={() => openUrl(item.url)}>
//             <Ionicons
//               name="open-outline"
//               size={moderateScale(18)}
//               color="#E5E7EB"
//             />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity
//           style={styles.linkUrlRow}
//           onPress={() => openUrl(item.url)}
//           activeOpacity={0.8}
//         >
//           <Ionicons name="link-outline" size={moderateScale(13)} color="#60A5FA" />
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//           <Text style={styles.linkUrlText} numberOfLines={1}>
//             {item.url}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

<<<<<<< HEAD
=======
//   const renderFileItem = ({ item }) => (
//     <View style={styles.linkCard}>
//       <TouchableOpacity activeOpacity={0.9} onPress={() => openUrl(item.url)}>
//         <Image
//           source={{ uri: item.previewImage }}
//           style={styles.linkPreview}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>

//       <View style={styles.linkContent}>
//         <View style={styles.linkHeaderRow}>
//           <View style={styles.linkHeaderLeft}>
//             <Image source={{ uri: item.avatar }} style={styles.linkAvatar} />
//             <View>
//               <Text style={styles.linkAuthor}>{item.author}</Text>
//               <Text style={styles.linkChannelTag}>{item.filename}</Text>
//             </View>
//           </View>

//           <TouchableOpacity onPress={() => openUrl(item.url)}>
//             <Ionicons
//               name="download-outline"
//               size={moderateScale(18)}
//               color="#E5E7EB"
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={[styles.linkUrlRow, { marginTop: verticalScale(4) }]}>
//           <Ionicons
//             name="document-text-outline"
//             size={moderateScale(13)}
//             color="#60A5FA"
//           />
//           <Text style={styles.linkUrlText}>{item.size}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   /* ---------- UI ---------- */

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   return (
//     <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
//       <StatusBar barStyle="light-content" />

//       <View style={styles.root}>
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity
//             onPress={() => navigation?.goBack?.()}
//             hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
//           >
<<<<<<< HEAD
//             <Ionicons name="chevron-back" size={24} color="#fff" />
=======
//             <Ionicons
//               name="chevron-back"
//               size={moderateScale(22)}
//               color="#fff"
//             />
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//           </TouchableOpacity>

//           <Text style={styles.headerTitle}>Shusshi Clan</Text>

<<<<<<< HEAD
//           <TouchableOpacity>
//             <Feather name="more-horizontal" size={22} color="#fff" />
=======
//           <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
//             <Feather name="more-horizontal" size={moderateScale(20)} color="#fff" />
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//           </TouchableOpacity>
//         </View>

//         <ScrollView
//           showsVerticalScrollIndicator={false}
<<<<<<< HEAD
//           contentContainerStyle={{ paddingBottom: 24 }}
//         >
//           {/* -------- PROFILE TOP -------- */}
=======
//           contentContainerStyle={{ paddingBottom: verticalScale(24) }}
//         >
//           {/* PROFILE TOP */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//           <View style={styles.profileTop}>
//             <View style={styles.avatarWrapper}>
//               <View style={styles.avatarBorder}>
//                 <Image
//                   source={{ uri: "https://i.pravatar.cc/200?img=8" }}
//                   style={styles.avatar}
//                 />
//               </View>

//               <View style={styles.imageIconWrap}>
<<<<<<< HEAD
//                 <Ionicons name="image-outline" size={14} color="#020617" />
=======
//                 <Ionicons
//                   name="image-outline"
//                   size={moderateScale(13)}
//                   color="#020617"
//                 />
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//               </View>
//             </View>

//             <Text style={styles.profileName}>Shusshi Clan</Text>

//             <Text style={styles.bioText}>
//               I don’t just play games I study them, master them, and break the
//               limits everyone else fears. Skilled aim, smart plays, and a
//               mindset built for clutch moments.
//             </Text>

//             <Text style={styles.handleText}>@shusshiclan</Text>
//           </View>

<<<<<<< HEAD
//           {/* -------- STATS CARD -------- */}
=======
//           {/* STATS CARD */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//           <View style={styles.statsCard}>
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>223.5k</Text>
//               <Text style={styles.statLabel}>Orbits</Text>
//             </View>
//             <View style={styles.statDivider} />
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>689</Text>
//               <Text style={styles.statLabel}>Orbitors</Text>
//             </View>
//           </View>

<<<<<<< HEAD
//           {/* -------- TABS -------- */}
=======
//           {/* TABS */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//           <View style={styles.tabsRow}>
//             {TABS.map((tab) => {
//               const isActive = tab === activeTab;
//               return (
//                 <TouchableOpacity
//                   key={tab}
//                   style={styles.tabItem}
//                   onPress={() => setActiveTab(tab)}
//                 >
//                   <Text
//                     style={[
//                       styles.tabText,
//                       isActive && styles.tabTextActive,
//                     ]}
//                   >
//                     {tab}
//                   </Text>
//                   {isActive && <View style={styles.tabIndicator} />}
//                 </TouchableOpacity>
//               );
//             })}
//           </View>

<<<<<<< HEAD
//           {/* -------- TAB CONTENT -------- */}

=======
//           {/* TAB CONTENTS */}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//           {activeTab === "Members" && (
//             <View style={styles.membersListWrap}>
//               <FlatList
//                 data={MEMBERS}
<<<<<<< HEAD
//                 keyExtractor={(item) => item.id}
=======
//                 keyExtractor={(i) => i.id}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//                 scrollEnabled={false}
//                 renderItem={renderMember}
//               />
//             </View>
//           )}

//           {activeTab === "Media" && (
//             <View style={styles.mediaGridWrap}>
//               <FlatList
//                 data={MEDIA_ITEMS}
<<<<<<< HEAD
//                 keyExtractor={(item) => item.id}
=======
//                 keyExtractor={(i) => i.id}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//                 numColumns={3}
//                 scrollEnabled={false}
//                 renderItem={renderMediaItem}
//                 columnWrapperStyle={styles.mediaRow}
//               />
//             </View>
//           )}

//           {activeTab === "Pins" && (
//             <View style={styles.pinsListWrap}>
//               <FlatList
//                 data={PIN_ITEMS}
<<<<<<< HEAD
//                 keyExtractor={(item) => item.id}
=======
//                 keyExtractor={(i) => i.id}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//                 scrollEnabled={false}
//                 renderItem={renderPinItem}
//               />
//             </View>
//           )}

//           {activeTab === "Links" && (
//             <View style={styles.linksListWrap}>
//               <FlatList
//                 data={LINK_ITEMS}
<<<<<<< HEAD
//                 keyExtractor={(item) => item.id}
=======
//                 keyExtractor={(i) => i.id}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//                 scrollEnabled={false}
//                 renderItem={renderLinkItem}
//               />
//             </View>
//           )}

//           {activeTab === "Files" && (
<<<<<<< HEAD
//             <View style={{ padding: 30 }}>
//               <Text style={{ color: "#9CA3AF" }}>No files yet</Text>
=======
//             <View style={styles.linksListWrap}>
//               <FlatList
//                 data={FILE_ITEMS}
//                 keyExtractor={(i) => i.id}
//                 scrollEnabled={false}
//                 renderItem={renderFileItem}
//               />
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//             </View>
//           )}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// }

<<<<<<< HEAD
// /* ---- STYLES ---- */
=======
// /* ---------- STYLES ---------- */
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c

// const BG = "#020617";
// const CARD = "#050B24";
// const CARD_DARK = "#020517";

<<<<<<< HEAD
// const MEDIA_CARD_SIZE = (width - 18 * 2 - 12 * 2) / 3;
=======
// const MEDIA_CARD_SIZE =
//   (width - scale(18) * 2 - scale(12) * 2) / 3; // 3-column grid
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: BG,
//   },
//   root: {
//     flex: 1,
//     backgroundColor: BG,
//   },

<<<<<<< HEAD
//   // HEADER
//   header: {
//     paddingHorizontal: 16,
//     paddingTop: 6,
//     paddingBottom: 10,
=======
//   header: {
//     paddingHorizontal: scale(16),
//     paddingTop: verticalScale(6),
//     paddingBottom: verticalScale(10),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     color: "#fff",
<<<<<<< HEAD
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   // PROFILE TOP
//   profileTop: {
//     alignItems: "center",
//     paddingTop: 12,
//     paddingBottom: 18,
//     paddingHorizontal: 16,
//   },
//   avatarWrapper: {
//     marginBottom: 8,
=======
//     fontSize: moderateScale(15),
//     fontWeight: "600",
//   },

//   profileTop: {
//     alignItems: "center",
//     paddingTop: verticalScale(10),
//     paddingBottom: verticalScale(16),
//     paddingHorizontal: scale(16),
//   },
//   avatarWrapper: {
//     marginBottom: verticalScale(6),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   avatarBorder: {
//     width: width * 0.22,
//     height: width * 0.22,
//     borderRadius: (width * 0.22) / 2,
//     backgroundColor: "#22C55E",
//     justifyContent: "center",
//     alignItems: "center",
<<<<<<< HEAD
//     borderWidth: 4,
=======
//     borderWidth: scale(3),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     borderColor: "#16A34A",
//   },
//   avatar: {
//     width: width * 0.18,
//     height: width * 0.18,
//     borderRadius: (width * 0.18) / 2,
//   },
//   imageIconWrap: {
//     position: "absolute",
<<<<<<< HEAD
//     bottom: 4,
//     right: -10,
//     width: 22,
//     height: 22,
//     borderRadius: 11,
=======
//     bottom: verticalScale(4),
//     right: -scale(10),
//     width: scale(22),
//     height: scale(22),
//     borderRadius: scale(11),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     backgroundColor: "#F9FAFB",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//   },
<<<<<<< HEAD
//   profileName: {
//     color: "#fff",
//     fontSize: isSmall ? 15 : 16,
//     fontWeight: "700",
//     marginTop: 4,
//   },
//   bioText: {
//     marginTop: 8,
//     color: "#CBD5F5",
//     fontSize: isSmall ? 11 : 12,
//     lineHeight: isSmall ? 16 : 18,
=======

//   profileName: {
//     color: "#fff",
//     fontSize: moderateScale(16),
//     fontWeight: "700",
//     marginTop: verticalScale(4),
//   },
//   bioText: {
//     marginTop: verticalScale(8),
//     color: "#CBD5F5",
//     fontSize: moderateScale(isSmall ? 11 : 12),
//     lineHeight: moderateScale(isSmall ? 16 : 18),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     textAlign: "center",
//     maxWidth: width * 0.8,
//   },
//   handleText: {
<<<<<<< HEAD
//     marginTop: 8,
//     color: "#ffffff",
//     fontSize: isSmall ? 11 : 12,
//     fontWeight: "600",
//   },

//   // STATS CARD
//   statsCard: {
//     marginHorizontal: 18,
//     marginTop: 12,
//     borderRadius: 20,
//     backgroundColor: CARD,
//     flexDirection: "row",
//     paddingVertical: 14,
//   },
//   statItem: { flex: 1, alignItems: "center" },
//   statValue: { color: "#fff", fontSize: 18, fontWeight: "700" },
//   statLabel: { color: "#9CA3AF", fontSize: 11, marginTop: 4 },
//   statDivider: { width: 1, backgroundColor: "#111827", opacity: 0.8 },

//   // TABS
//   tabsRow: {
//     marginTop: 16,
//     marginHorizontal: 18,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   tabItem: { alignItems: "center", flex: 1 },
//   tabText: { color: "#9CA3AF", fontSize: 12, fontWeight: "500" },
//   tabTextActive: { color: "#ffffff" },
//   tabIndicator: {
//     marginTop: 6,
//     width: 28,
//     height: 3,
=======
//     marginTop: verticalScale(6),
//     color: "#ffffff",
//     fontSize: moderateScale(11),
//     fontWeight: "600",
//   },

//   statsCard: {
//     marginHorizontal: scale(18),
//     marginTop: verticalScale(10),
//     borderRadius: moderateScale(20),
//     backgroundColor: CARD,
//     flexDirection: "row",
//     paddingVertical: verticalScale(12),
//   },
//   statItem: {
//     flex: 1,
//     alignItems: "center",
//   },
//   statValue: {
//     color: "#fff",
//     fontSize: moderateScale(17),
//     fontWeight: "700",
//   },
//   statLabel: {
//     color: "#9CA3AF",
//     fontSize: moderateScale(10),
//     marginTop: verticalScale(3),
//   },
//   statDivider: {
//     width: 1,
//     backgroundColor: "#111827",
//     opacity: 0.8,
//   },

//   tabsRow: {
//     marginTop: verticalScale(14),
//     marginHorizontal: scale(18),
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   tabItem: {
//     alignItems: "center",
//     flex: 1,
//   },
//   tabText: {
//     color: "#9CA3AF",
//     fontSize: moderateScale(11),
//     fontWeight: "500",
//   },
//   tabTextActive: {
//     color: "#ffffff",
//   },
//   tabIndicator: {
//     marginTop: verticalScale(4),
//     width: scale(28),
//     height: verticalScale(3),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     borderRadius: 999,
//     backgroundColor: "#3B82F6",
//   },

<<<<<<< HEAD
//   // MEMBERS
//   membersListWrap: {
//     marginTop: 14,
//     marginHorizontal: 18,
=======
//   membersListWrap: {
//     marginTop: verticalScale(12),
//     marginHorizontal: scale(18),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   },
//   memberRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: CARD_DARK,
<<<<<<< HEAD
//     borderRadius: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     marginBottom: 10,
=======
//     borderRadius: moderateScale(16),
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(12),
//     marginBottom: verticalScale(8),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     borderWidth: 1,
//     borderColor: "#111827",
//   },
//   memberLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   memberAvatar: {
<<<<<<< HEAD
//     width: 34,
//     height: 34,
//     borderRadius: 17,
//     marginRight: 10,
//   },
//   memberName: {
//     color: "#ffffff",
//     fontSize: 13,
=======
//     width: scale(34),
//     height: scale(34),
//     borderRadius: scale(17),
//     marginRight: scale(10),
//   },
//   memberName: {
//     color: "#ffffff",
//     fontSize: moderateScale(12),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     fontWeight: "500",
//     maxWidth: width * 0.55,
//   },

<<<<<<< HEAD
//   // MEDIA GRID
//   mediaGridWrap: {
//     marginTop: 18,
//     marginHorizontal: 18,
//     marginBottom: 10,
//   },
//   mediaRow: {
//     justifyContent: "space-between",
//     marginBottom: 12,
=======
//   mediaGridWrap: {
//     marginTop: verticalScale(16),
//     marginHorizontal: scale(18),
//     marginBottom: verticalScale(8),
//   },
//   mediaRow: {
//     justifyContent: "space-between",
//     marginBottom: verticalScale(10),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   },
//   mediaCard: {
//     width: MEDIA_CARD_SIZE,
//     aspectRatio: 1,
<<<<<<< HEAD
//     borderRadius: 18,
=======
//     borderRadius: moderateScale(18),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     backgroundColor: CARD_DARK,
//     borderWidth: 1,
//     borderColor: "#111827",
//     justifyContent: "center",
//     alignItems: "center",
//   },

<<<<<<< HEAD
//   // PINS
//   pinsListWrap: {
//     marginTop: 14,
//     marginHorizontal: 18,
=======
//   pinsListWrap: {
//     marginTop: verticalScale(12),
//     marginHorizontal: scale(18),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   },
//   pinRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
<<<<<<< HEAD
//     paddingVertical: 10,
//     marginBottom: 10,
=======
//     paddingVertical: verticalScale(8),
//     marginBottom: verticalScale(6),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   },
//   pinLeft: {
//     flexDirection: "row",
//     flex: 1,
//   },
//   pinAvatar: {
<<<<<<< HEAD
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginRight: 10,
=======
//     width: scale(36),
//     height: scale(36),
//     borderRadius: scale(18),
//     marginRight: scale(10),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   },
//   pinContent: {
//     flex: 1,
//   },
//   pinHeaderRow: {
//     flexDirection: "row",
//     alignItems: "center",
<<<<<<< HEAD
//     marginBottom: 2,
=======
//     marginBottom: verticalScale(2),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     flexWrap: "wrap",
//   },
//   pinAuthor: {
//     color: "#ffffff",
<<<<<<< HEAD
//     fontSize: 13,
=======
//     fontSize: moderateScale(12),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     fontWeight: "600",
//   },
//   pinDot: {
//     color: "#9CA3AF",
<<<<<<< HEAD
//     fontSize: 11,
//   },
//   pinTime: {
//     color: "#9CA3AF",
//     fontSize: 11,
//   },
//   pinBadge: {
//     marginLeft: 6,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 6,
//     paddingVertical: 2,
=======
//     fontSize: moderateScale(10),
//   },
//   pinTime: {
//     color: "#9CA3AF",
//     fontSize: moderateScale(10),
//   },
//   pinBadge: {
//     marginLeft: scale(6),
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: scale(6),
//     paddingVertical: verticalScale(2),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     borderRadius: 999,
//     borderWidth: 1,
//     borderColor: "#FACC15",
//     backgroundColor: "rgba(250, 204, 21, 0.07)",
//   },
//   pinBadgeText: {
//     color: "#FACC15",
<<<<<<< HEAD
//     fontSize: 10,
=======
//     fontSize: moderateScale(9),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     fontWeight: "500",
//   },
//   pinMessage: {
//     color: "#E5E7EB",
<<<<<<< HEAD
//     fontSize: 12,
//     lineHeight: 17,
//     marginBottom: 6,
//   },
//   pinImage: {
//     width: "100%",
//     borderRadius: 16,
//     height: 160,
//     marginTop: 4,
//     backgroundColor: "#020617",
//   },

//   // LINKS
//   linksListWrap: {
//     marginTop: 14,
//     marginHorizontal: 18,
//   },
//   linkCard: {
//     backgroundColor: CARD_DARK,
//     borderRadius: 20,
//     marginBottom: 14,
=======
//     fontSize: moderateScale(11),
//     lineHeight: moderateScale(16),
//     marginBottom: verticalScale(4),
//   },
//   pinImage: {
//     width: "100%",
//     borderRadius: moderateScale(16),
//     height: verticalScale(150),
//     marginTop: verticalScale(2),
//     backgroundColor: "#020617",
//   },

//   linksListWrap: {
//     marginTop: verticalScale(12),
//     marginHorizontal: scale(18),
//   },
//   linkCard: {
//     backgroundColor: CARD_DARK,
//     borderRadius: moderateScale(20),
//     marginBottom: verticalScale(10),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     borderWidth: 1,
//     borderColor: "#111827",
//     overflow: "hidden",
//   },
//   linkPreview: {
//     width: "100%",
<<<<<<< HEAD
//     height: 130,
//     backgroundColor: "#020617",
//   },
//   linkContent: {
//     paddingHorizontal: 12,
//     paddingVertical: 10,
=======
//     height: verticalScale(130),
//     backgroundColor: "#020617",
//   },
//   linkContent: {
//     paddingHorizontal: scale(12),
//     paddingVertical: verticalScale(8),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//   },
//   linkHeaderRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   linkHeaderLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   linkAvatar: {
<<<<<<< HEAD
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     marginRight: 8,
//   },
//   linkAuthor: {
//     color: "#ffffff",
//     fontSize: 13,
=======
//     width: scale(30),
//     height: scale(30),
//     borderRadius: scale(15),
//     marginRight: scale(8),
//   },
//   linkAuthor: {
//     color: "#ffffff",
//     fontSize: moderateScale(12),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     fontWeight: "600",
//   },
//   linkChannelTag: {
//     color: "#9CA3AF",
<<<<<<< HEAD
//     fontSize: 11,
//     marginTop: 1,
//   },
//   linkUrlRow: {
//     marginTop: 8,
=======
//     fontSize: moderateScale(10),
//     marginTop: verticalScale(1),
//   },
//   linkUrlRow: {
//     marginTop: verticalScale(6),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   linkUrlText: {
<<<<<<< HEAD
//     marginLeft: 6,
//     color: "#60A5FA",
//     fontSize: 11,
=======
//     marginLeft: scale(6),
//     color: "#60A5FA",
//     fontSize: moderateScale(10),
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
//     flex: 1,
//   },
// });
// src/screens/ProfileScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
  ScrollView,
  Alert,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
<<<<<<< HEAD
=======
import * as ImagePicker from "expo-image-picker";
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c

/* ---------- RESPONSIVE HELPERS ---------- */
const { width, height } = Dimensions.get("window");

<<<<<<< HEAD
// iPhone 11 base
=======
// iPhone 11 base sizes
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const isSmall = width < 360;

/* ---------- DUMMY DATA ---------- */

const MEMBERS = Array.from({ length: 10 }).map((_, i) => ({
  id: i.toString(),
  name: "! 7SUll_Notashish15",
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const MEDIA_ITEMS = Array.from({ length: 15 }).map((_, i) => ({
  id: `media-${i}`,
  url: `https://picsum.photos/600/800?random=${i + 1}`,
}));

const PIN_ITEMS = [
  {
    id: "1",
    author: "Chala",
    avatar: "https://i.pravatar.cc/150?img=12",
    timeAgo: "1mins ago",
    message: "Hi @everyone",
    pinned: true,
    hasImage: false,
  },
  {
<<<<<<< HEAD
=======
    id: "2",
    author: "Chala",
    avatar: "https://i.pravatar.cc/150?img=13",
    timeAgo: "1mins ago",
    message: "Hi @everyone",
    pinned: true,
    hasImage: false,
  },
  {
    id: "3",
    author: "Chala",
    avatar: "https://i.pravatar.cc/150?img=14",
    timeAgo: "1mins ago",
    message: "Hi @everyone",
    pinned: true,
    hasImage: false,
  },
  {
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
    id: "4",
    author: "NicholasChan",
    avatar: "https://i.pravatar.cc/150?img=15",
    timeAgo: "2h ago",
    message:
      "Hi @everyone Please Check It Out My Nexus Member List sushii @sushishlive corrected my mistake there from last week.",
    pinned: true,
    hasImage: true,
    imageUrl: "https://picsum.photos/600/400?random=99",
  },
];

const LINK_ITEMS = [
  {
    id: "l1",
    author: "NicholasChan",
    avatar: "https://i.pravatar.cc/150?img=20",
    url: "https://tenor.com/en-IN/view/allgamingz-vedy-gud",
    previewImage: "https://picsum.photos/800/400?random=31",
    channelTag: "#  < media, >",
  },
  {
    id: "l2",
    author: "NicholasChan",
    avatar: "https://i.pravatar.cc/150?img=21",
    url: "https://example.com/some-awesome-link",
    previewImage: "https://picsum.photos/800/400?random=32",
    channelTag: "#  < media, >",
  },
];

const FILE_ITEMS = [
  {
    id: "f1",
    author: "NicholasChan",
    avatar: "https://i.pravatar.cc/150?img=22",
    filename: "Game_Assets.zip",
    size: "12.3 MB",
    url: "https://example.com/files/game_assets.zip",
    previewImage: "https://picsum.photos/800/400?random=41",
  },
  {
    id: "f2",
    author: "NicholasChan",
    avatar: "https://i.pravatar.cc/150?img=23",
    filename: "Rules_and_Guide.pdf",
    size: "1.1 MB",
    url: "https://example.com/files/rules_guide.pdf",
    previewImage: "https://picsum.photos/800/400?random=42",
  },
];

const TABS = ["Members", "Media", "Pins", "Links", "Files"];

export default function ProfileScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Members");

<<<<<<< HEAD
=======
  // current profile avatar (local + remote)
  const [profileAvatar, setProfileAvatar] = useState(
    "https://i.pravatar.cc/200?img=8"
  );

  /* ---------- HELPERS ---------- */

>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
  const openUrl = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Cannot open", "This URL can't be opened on device.");
      }
    } catch (err) {
      Alert.alert("Error", "Unable to open link.");
    }
  };

<<<<<<< HEAD
  /* ---------- RENDER FUNCTIONS ---------- */
=======
  const handleChangeAvatar = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission needed",
          "Please allow photo library access to change your profile picture."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (result.canceled) return;

      const uri = result.assets[0].uri;
      setProfileAvatar(uri);

      // TODO: इथे backend वर upload करा
      // await uploadProfileAvatar(uri);
    } catch (e) {
      console.log("Avatar change error:", e);
      Alert.alert("Error", "Couldn't change profile picture.");
    }
  };

  /* ---------- RENDERERS ---------- */
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c

  const renderMember = ({ item }) => (
    <TouchableOpacity style={styles.memberRow} activeOpacity={0.85}>
      <View style={styles.memberLeft}>
        <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
        <Text style={styles.memberName} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={moderateScale(16)} color="#9CA3AF" />
    </TouchableOpacity>
  );

  const renderMediaItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.mediaCard}
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate("MediaViewer", {
          mediaList: MEDIA_ITEMS,
          initialIndex: index,
        })
      }
    >
      <Ionicons name="image-outline" size={moderateScale(24)} color="#4B5563" />
    </TouchableOpacity>
  );

  const renderPinItem = ({ item }) => (
    <TouchableOpacity
      style={styles.pinRow}
      activeOpacity={0.85}
      onPress={() => Alert.alert("Pinned", item.message)}
    >
      <View style={styles.pinLeft}>
        <Image source={{ uri: item.avatar }} style={styles.pinAvatar} />
        <View style={styles.pinContent}>
          <View style={styles.pinHeaderRow}>
            <Text style={styles.pinAuthor}>{item.author}</Text>
            <Text style={styles.pinDot}> • </Text>
            <Text style={styles.pinTime}>{item.timeAgo}</Text>
            {item.pinned && (
              <View style={styles.pinBadge}>
                <Ionicons
                  name="pin-outline"
                  size={moderateScale(10)}
                  color="#FACC15"
                  style={{ marginRight: moderateScale(3) }}
                />
                <Text style={styles.pinBadgeText}>Pinned</Text>
              </View>
            )}
          </View>

          <Text style={styles.pinMessage} numberOfLines={2}>
            {item.message}
          </Text>

          {item.hasImage && (
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.pinImage}
              resizeMode="cover"
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        onPress={() => Alert.alert("More", "Options coming soon")}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Feather name="more-horizontal" size={moderateScale(16)} color="#9CA3AF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderLinkItem = ({ item }) => (
    <View style={styles.linkCard}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => openUrl(item.url)}>
        <Image
          source={{ uri: item.previewImage }}
          style={styles.linkPreview}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={styles.linkContent}>
        <View style={styles.linkHeaderRow}>
          <View style={styles.linkHeaderLeft}>
            <Image source={{ uri: item.avatar }} style={styles.linkAvatar} />
            <View>
              <Text style={styles.linkAuthor}>{item.author}</Text>
              <Text style={styles.linkChannelTag}>{item.channelTag}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => openUrl(item.url)}>
            <Ionicons
              name="open-outline"
              size={moderateScale(18)}
              color="#E5E7EB"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.linkUrlRow}
          onPress={() => openUrl(item.url)}
          activeOpacity={0.8}
        >
          <Ionicons name="link-outline" size={moderateScale(13)} color="#60A5FA" />
          <Text style={styles.linkUrlText} numberOfLines={1}>
            {item.url}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFileItem = ({ item }) => (
    <View style={styles.linkCard}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => openUrl(item.url)}>
        <Image
          source={{ uri: item.previewImage }}
          style={styles.linkPreview}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={styles.linkContent}>
        <View style={styles.linkHeaderRow}>
          <View style={styles.linkHeaderLeft}>
            <Image source={{ uri: item.avatar }} style={styles.linkAvatar} />
            <View>
              <Text style={styles.linkAuthor}>{item.author}</Text>
              <Text style={styles.linkChannelTag}>{item.filename}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => openUrl(item.url)}>
            <Ionicons
              name="download-outline"
              size={moderateScale(18)}
              color="#E5E7EB"
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.linkUrlRow, { marginTop: verticalScale(4) }]}>
          <Ionicons
            name="document-text-outline"
            size={moderateScale(13)}
            color="#60A5FA"
          />
          <Text style={styles.linkUrlText}>{item.size}</Text>
        </View>
      </View>
    </View>
  );

  /* ---------- UI ---------- */

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <StatusBar barStyle="light-content" />

      <View style={styles.root}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation?.goBack?.()}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons
              name="chevron-back"
              size={moderateScale(22)}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Shusshi Clan</Text>

          <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Feather name="more-horizontal" size={moderateScale(20)} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: verticalScale(24) }}
        >
          {/* PROFILE TOP */}
          <View style={styles.profileTop}>
<<<<<<< HEAD
            <View style={styles.avatarWrapper}>
              <View style={styles.avatarBorder}>
                <Image
                  source={{ uri: "https://i.pravatar.cc/200?img=8" }}
=======
            {/* Tappable avatar */}
            <TouchableOpacity
              style={styles.avatarWrapper}
              activeOpacity={0.8}
              onPress={handleChangeAvatar}
            >
              <View style={styles.avatarBorder}>
                <Image
                  source={{ uri: profileAvatar }}
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
                  style={styles.avatar}
                />
              </View>

              <View style={styles.imageIconWrap}>
                <Ionicons
<<<<<<< HEAD
                  name="image-outline"
=======
                  name="camera-outline"
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c
                  size={moderateScale(13)}
                  color="#020617"
                />
              </View>
<<<<<<< HEAD
            </View>
=======
            </TouchableOpacity>
>>>>>>> 714c32b81b0923ebbd41506e49612bd9435d633c

            <Text style={styles.profileName}>Shusshi Clan</Text>

            <Text style={styles.bioText}>
              I don’t just play games I study them, master them, and break the
              limits everyone else fears. Skilled aim, smart plays, and a
              mindset built for clutch moments.
            </Text>

            <Text style={styles.handleText}>@shusshiclan</Text>
          </View>

          {/* STATS CARD */}
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>223.5k</Text>
              <Text style={styles.statLabel}>Orbits</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>689</Text>
              <Text style={styles.statLabel}>Orbitors</Text>
            </View>
          </View>

          {/* TABS */}
          <View style={styles.tabsRow}>
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <TouchableOpacity
                  key={tab}
                  style={styles.tabItem}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      isActive && styles.tabTextActive,
                    ]}
                  >
                    {tab}
                  </Text>
                  {isActive && <View style={styles.tabIndicator} />}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* TAB CONTENTS */}
          {activeTab === "Members" && (
            <View style={styles.membersListWrap}>
              <FlatList
                data={MEMBERS}
                keyExtractor={(i) => i.id}
                scrollEnabled={false}
                renderItem={renderMember}
              />
            </View>
          )}

          {activeTab === "Media" && (
            <View style={styles.mediaGridWrap}>
              <FlatList
                data={MEDIA_ITEMS}
                keyExtractor={(i) => i.id}
                numColumns={3}
                scrollEnabled={false}
                renderItem={renderMediaItem}
                columnWrapperStyle={styles.mediaRow}
              />
            </View>
          )}

          {activeTab === "Pins" && (
            <View style={styles.pinsListWrap}>
              <FlatList
                data={PIN_ITEMS}
                keyExtractor={(i) => i.id}
                scrollEnabled={false}
                renderItem={renderPinItem}
              />
            </View>
          )}

          {activeTab === "Links" && (
            <View style={styles.linksListWrap}>
              <FlatList
                data={LINK_ITEMS}
                keyExtractor={(i) => i.id}
                scrollEnabled={false}
                renderItem={renderLinkItem}
              />
            </View>
          )}

          {activeTab === "Files" && (
            <View style={styles.linksListWrap}>
              <FlatList
                data={FILE_ITEMS}
                keyExtractor={(i) => i.id}
                scrollEnabled={false}
                renderItem={renderFileItem}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/* ---------- STYLES ---------- */

const BG = "#020617";
const CARD = "#050B24";
const CARD_DARK = "#020517";

const MEDIA_CARD_SIZE =
  (width - scale(18) * 2 - scale(12) * 2) / 3; // 3-column grid

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  root: {
    flex: 1,
    backgroundColor: BG,
  },

  header: {
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(6),
    paddingBottom: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: moderateScale(15),
    fontWeight: "600",
  },

  profileTop: {
    alignItems: "center",
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(16),
    paddingHorizontal: scale(16),
  },
  avatarWrapper: {
    marginBottom: verticalScale(6),
    alignItems: "center",
    justifyContent: "center",
  },
  avatarBorder: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: (width * 0.22) / 2,
    backgroundColor: "#22C55E",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: scale(3),
    borderColor: "#16A34A",
  },
  avatar: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: (width * 0.18) / 2,
  },
  imageIconWrap: {
    position: "absolute",
    bottom: verticalScale(4),
    right: -scale(10),
    width: scale(22),
    height: scale(22),
    borderRadius: scale(11),
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  profileName: {
    color: "#fff",
    fontSize: moderateScale(16),
    fontWeight: "700",
    marginTop: verticalScale(4),
  },
  bioText: {
    marginTop: verticalScale(8),
    color: "#CBD5F5",
    fontSize: moderateScale(isSmall ? 11 : 12),
    lineHeight: moderateScale(isSmall ? 16 : 18),
    textAlign: "center",
    maxWidth: width * 0.8,
  },
  handleText: {
    marginTop: verticalScale(6),
    color: "#ffffff",
    fontSize: moderateScale(11),
    fontWeight: "600",
  },

  statsCard: {
    marginHorizontal: scale(18),
    marginTop: verticalScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: CARD,
    flexDirection: "row",
    paddingVertical: verticalScale(12),
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    color: "#fff",
    fontSize: moderateScale(17),
    fontWeight: "700",
  },
  statLabel: {
    color: "#9CA3AF",
    fontSize: moderateScale(10),
    marginTop: verticalScale(3),
  },
  statDivider: {
    width: 1,
    backgroundColor: "#111827",
    opacity: 0.8,
  },

  tabsRow: {
    marginTop: verticalScale(14),
    marginHorizontal: scale(18),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabItem: {
    alignItems: "center",
    flex: 1,
  },
  tabText: {
    color: "#9CA3AF",
    fontSize: moderateScale(11),
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#ffffff",
  },
  tabIndicator: {
    marginTop: verticalScale(4),
    width: scale(28),
    height: verticalScale(3),
    borderRadius: 999,
    backgroundColor: "#3B82F6",
  },

  membersListWrap: {
    marginTop: verticalScale(12),
    marginHorizontal: scale(18),
  },
  memberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: CARD_DARK,
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(12),
    marginBottom: verticalScale(8),
    borderWidth: 1,
    borderColor: "#111827",
  },
  memberLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  memberAvatar: {
    width: scale(34),
    height: scale(34),
    borderRadius: scale(17),
    marginRight: scale(10),
  },
  memberName: {
    color: "#ffffff",
    fontSize: moderateScale(12),
    fontWeight: "500",
    maxWidth: width * 0.55,
  },

  mediaGridWrap: {
    marginTop: verticalScale(16),
    marginHorizontal: scale(18),
    marginBottom: verticalScale(8),
  },
  mediaRow: {
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  mediaCard: {
    width: MEDIA_CARD_SIZE,
    aspectRatio: 1,
    borderRadius: moderateScale(18),
    backgroundColor: CARD_DARK,
    borderWidth: 1,
    borderColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  pinsListWrap: {
    marginTop: verticalScale(12),
    marginHorizontal: scale(18),
  },
  pinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: verticalScale(8),
    marginBottom: verticalScale(6),
  },
  pinLeft: {
    flexDirection: "row",
    flex: 1,
  },
  pinAvatar: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    marginRight: scale(10),
  },
  pinContent: {
    flex: 1,
  },
  pinHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(2),
    flexWrap: "wrap",
  },
  pinAuthor: {
    color: "#ffffff",
    fontSize: moderateScale(12),
    fontWeight: "600",
  },
  pinDot: {
    color: "#9CA3AF",
    fontSize: moderateScale(10),
  },
  pinTime: {
    color: "#9CA3AF",
    fontSize: moderateScale(10),
  },
  pinBadge: {
    marginLeft: scale(6),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(2),
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#FACC15",
    backgroundColor: "rgba(250, 204, 21, 0.07)",
  },
  pinBadgeText: {
    color: "#FACC15",
    fontSize: moderateScale(9),
    fontWeight: "500",
  },
  pinMessage: {
    color: "#E5E7EB",
    fontSize: moderateScale(11),
    lineHeight: moderateScale(16),
    marginBottom: verticalScale(4),
  },
  pinImage: {
    width: "100%",
    borderRadius: moderateScale(16),
    height: verticalScale(150),
    marginTop: verticalScale(2),
    backgroundColor: "#020617",
  },

  linksListWrap: {
    marginTop: verticalScale(12),
    marginHorizontal: scale(18),
  },
  linkCard: {
    backgroundColor: CARD_DARK,
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: "#111827",
    overflow: "hidden",
  },
  linkPreview: {
    width: "100%",
    height: verticalScale(130),
    backgroundColor: "#020617",
  },
  linkContent: {
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8),
  },
  linkHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  linkAvatar: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    marginRight: scale(8),
  },
  linkAuthor: {
    color: "#ffffff",
    fontSize: moderateScale(12),
    fontWeight: "600",
  },
  linkChannelTag: {
    color: "#9CA3AF",
    fontSize: moderateScale(10),
    marginTop: verticalScale(1),
  },
  linkUrlRow: {
    marginTop: verticalScale(6),
    flexDirection: "row",
    alignItems: "center",
  },
  linkUrlText: {
    marginLeft: scale(6),
    color: "#60A5FA",
    fontSize: moderateScale(10),
    flex: 1,
  },
});
