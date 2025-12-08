
// // // import React, { useMemo, useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   StyleSheet,
// // //   FlatList,
// // //   TouchableOpacity,
// // //   ImageBackground,
// // //   StatusBar,
// // //   Alert,
// // // } from "react-native";
// // // import Icon from "react-native-vector-icons/Feather";

// // // const COMMUNITIES = [
// // //   {
// // //     id: "1",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // //   {
// // //     id: "4",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // // ];

// // // export default function HomeScreen({ navigation }) {
// // //   const [search, setSearch] = useState("");
// // //   const [joined, setJoined] = useState(new Set());

// // //   const filtered = useMemo(() => {
// // //     if (!search.trim()) return COMMUNITIES;
// // //     const s = search.toLowerCase();
// // //     return COMMUNITIES.filter(
// // //       (c) =>
// // //         c.name.toLowerCase().includes(s) ||
// // //         c.description.toLowerCase().includes(s)
// // //     );
// // //   }, [search]);

// // //   const toggleJoin = (id, name) => {
// // //     setJoined((prev) => {
// // //       const next = new Set(prev);
// // //       if (next.has(id)) {
// // //         next.delete(id);
// // //         Alert.alert("Left", `You left ${name}`);
// // //       } else {
// // //         next.add(id);
// // //         Alert.alert("Joined", `You joined ${name}`);
// // //       }
// // //       return next;
// // //     });
// // //   };

// // //   const renderCard = ({ item }) => {
// // //     const isJoined = joined.has(item.id);

// // //     return (
// // //       <TouchableOpacity
// // //         activeOpacity={0.95}
// // //         style={styles.cardWrapper}
// // //         onPress={() => navigation?.navigate("Channel", { communityId: item.id })}
// // //       >
// // //         <View style={styles.cardContainer}>
// // //           <View style={styles.cardLeft}>
// // //             <View style={styles.cardHeader}>
// // //               <View style={styles.avatar}>
// // //                 <Text style={styles.avatarText}>
// // //                   {item.name.charAt(0).toUpperCase()}
// // //                 </Text>
// // //               </View>
// // //               <View style={styles.cardInfo}>
// // //                 <Text style={styles.cardTitle}>{item.name}</Text>
// // //                 <Text style={styles.cardSub}>
// // //                   {item.members.toLocaleString()} Members · {item.type}
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             <Text style={styles.cardDesc} numberOfLines={2}>
// // //               {item.description}
// // //             </Text>
// // //           </View>

// // //           <View style={styles.cardRight}>
// // //             <ImageBackground
// // //               source={{ uri: item.image }}
// // //               style={styles.cardBg}
// // //               imageStyle={styles.cardImage}
// // //             >
// // //               <View style={styles.cardOverlay} />
// // //               <TouchableOpacity
// // //                 style={styles.peopleBtn}
// // //                 onPress={() => toggleJoin(item.id, item.name)}
// // //               >
// // //                 <Icon name="users" size={18} color="#E5ECFF" />
// // //               </TouchableOpacity>
// // //             </ImageBackground>
// // //           </View>
// // //         </View>
// // //       </TouchableOpacity>
// // //     );
// // //   };

// // //   return (
// // //     <View style={styles.root}>
// // //       <StatusBar barStyle="light-content" />

// // //       <View style={styles.mainContainer}>
// // //         {/* LEFT SIDEBAR */}
// // //         <View style={styles.sidebar}>
// // //           <TouchableOpacity style={styles.sideButton}>
// // //             <Icon name="compass" size={22} color="#E5ECFF" />
// // //           </TouchableOpacity>

// // //           {/* ✅ PLUS Button → Navigate to v12 */}
// // //           <TouchableOpacity
// // //             style={[styles.sideButton, styles.sideButtonActive]}
// // //             onPress={() => navigation.navigate("Create_Nexus")}
// // //           >
// // //             <Icon name="plus" size={24} color="#E5ECFF" />
// // //           </TouchableOpacity>
// // //         </View>

// // //         {/* RIGHT CONTENT AREA */}
// // //         <View style={styles.contentArea}>
// // //           <View style={styles.addBlipCard}>
// // //             <Text style={styles.addBlipText}>Add Blips</Text>
// // //           </View>

// // //           <View style={styles.exploreContainer}>
// // //             <Text style={styles.exploreTitle}>Explore</Text>

// // //             <View style={styles.searchRow}>
// // //               <View style={styles.searchBox}>
// // //                 <Icon name="search" size={18} color="#64748b" />
// // //                 <TextInput
// // //                   style={styles.searchInput}
// // //                   placeholder="Search"
// // //                   placeholderTextColor="#64748b"
// // //                   value={search}
// // //                   onChangeText={setSearch}
// // //                 />
// // //               </View>

// // //               <TouchableOpacity style={styles.filterBtn}>
// // //                 <Text style={styles.filterText}>Filter</Text>
// // //               </TouchableOpacity>
// // //             </View>

// // //             <FlatList
// // //               data={filtered}
// // //               keyExtractor={(item) => item.id}
// // //               renderItem={renderCard}
// // //               showsVerticalScrollIndicator={false}
// // //               contentContainerStyle={styles.listContent}
// // //             />
// // //           </View>
// // //         </View>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   root: {
// // //     flex: 1,
// // //     backgroundColor: "#0a0f1e",
// // //   },
// // //   mainContainer: {
// // //     flex: 1,
// // //     flexDirection: "row",
// // //     paddingTop: 50,
// // //     paddingLeft: 16,
// // //     paddingRight: 16,
// // //   },

// // //   sidebar: {
// // //     width: 60,
// // //     alignItems: "center",
// // //     paddingTop: 8,
// // //     marginRight: 12,
// // //   },
// // //   sideButton: {
// // //     width: 48,
// // //     height: 48,
// // //     borderRadius: 16,
// // //     backgroundColor: "#0f1729",
// // //     borderWidth: 1,
// // //     borderColor: "#1e293b",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: 12,
// // //   },
// // //   sideButtonActive: {
// // //     backgroundColor: "#1e40af",
// // //     borderColor: "#2563eb",
// // //   },

// // //   contentArea: {
// // //     flex: 1,
// // //   },
// // //   addBlipCard: {
// // //     height: 100,
// // //     borderRadius: 20,
// // //     backgroundColor: "#0f1729",
// // //     borderWidth: 1,
// // //     borderColor: "#1e293b",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: 16,
// // //   },
// // //   addBlipText: {
// // //     color: "#E5ECFF",
// // //     fontSize: 16,
// // //     fontWeight: "600",
// // //   },

// // //   exploreContainer: {
// // //     flex: 1,
// // //     borderRadius: 28,
// // //     backgroundColor: "#0f1729",
// // //     paddingHorizontal: 16,
// // //     paddingTop: 20,
// // //     paddingBottom: 20,
// // //   },
// // //   exploreTitle: {
// // //     color: "#F9FAFF",
// // //     fontSize: 22,
// // //     fontWeight: "700",
// // //     marginBottom: 16,
// // //   },

// // //   searchRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
// // //   searchBox: {
// // //     flex: 1,
// // //     height: 44,
// // //     borderRadius: 22,
// // //     paddingHorizontal: 16,
// // //     backgroundColor: "#1e293b",
// // //     borderWidth: 1,
// // //     borderColor: "#334155",
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   searchInput: {
// // //     flex: 1,
// // //     marginLeft: 10,
// // //     color: "#F9FAFF",
// // //     fontSize: 15,
// // //   },
// // //   filterBtn: {
// // //     marginLeft: 12,
// // //     paddingHorizontal: 16,
// // //     height: 44,
// // //     justifyContent: "center",
// // //   },
// // //   filterText: {
// // //     color: "#3b82f6",
// // //     fontSize: 15,
// // //     fontWeight: "600",
// // //   },

// // //   listContent: {
// // //     paddingBottom: 20,
// // //   },
// // //   cardWrapper: {
// // //     marginBottom: 16,
// // //   },
// // //   cardContainer: {
// // //     flexDirection: "row",
// // //     height: 100,
// // //     borderRadius: 20,
// // //     backgroundColor: "#1e293b",
// // //     overflow: "hidden",
// // //   },
// // //   cardLeft: {
// // //     flex: 1,
// // //     padding: 14,
// // //     justifyContent: "space-between",
// // //   },
// // //   cardHeader: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   avatar: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 20,
// // //     backgroundColor: "#ec4899",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   avatarText: {
// // //     color: "#fff",
// // //     fontSize: 18,
// // //     fontWeight: "700",
// // //   },
// // //   cardInfo: {
// // //     marginLeft: 12,
// // //     flex: 1,
// // //   },
// // //   cardTitle: {
// // //     color: "#F9FAFF",
// // //     fontSize: 15,
// // //     fontWeight: "700",
// // //     marginBottom: 2,
// // //   },
// // //   cardSub: {
// // //     color: "#94a3b8",
// // //     fontSize: 11,
// // //   },
// // //   cardDesc: {
// // //     color: "#e2e8f0",
// // //     fontSize: 12,
// // //     lineHeight: 16,
// // //   },
// // //   cardRight: {
// // //     width: 120,
// // //   },
// // //   cardBg: {
// // //     flex: 1,
// // //     justifyContent: "flex-end",
// // //     alignItems: "flex-end",
// // //     padding: 10,
// // //   },
// // //   cardImage: {
// // //     borderTopRightRadius: 20,
// // //     borderBottomRightRadius: 20,
// // //   },
// // //   cardOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: "rgba(15, 23, 42, 0.5)",
// // //   },
// // //   peopleBtn: {
// // //     width: 36,
// // //     height: 36,
// // //     borderRadius: 12,
// // //     backgroundColor: "#2563eb",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // // });



// // // src/screens/HomeScreen.js
// // // import React, { useMemo, useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   StyleSheet,
// // //   FlatList,
// // //   TouchableOpacity,
// // //   ImageBackground,
// // //   StatusBar,
// // //   Alert,
// // // } from "react-native";
// // // import Icon from "react-native-vector-icons/Feather";

// // // const COMMUNITIES = [
// // //   {
// // //     id: "1",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // //   {
// // //     id: "4",
// // //     name: "Sushis City",
// // //     members: 14879,
// // //     type: "Community",
// // //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// // //     image:
// // //       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //   },
// // // ];

// // // export default function HomeScreen({ navigation }) {
// // //   const [search, setSearch] = useState("");
// // //   const [joined, setJoined] = useState(new Set());

// // //   const filtered = useMemo(() => {
// // //     if (!search.trim()) return COMMUNITIES;
// // //     const s = search.toLowerCase();
// // //     return COMMUNITIES.filter(
// // //       (c) =>
// // //         c.name.toLowerCase().includes(s) ||
// // //         c.description.toLowerCase().includes(s)
// // //     );
// // //   }, [search]);

// // //   const toggleJoin = (id, name) => {
// // //     setJoined((prev) => {
// // //       const next = new Set(prev);
// // //       if (next.has(id)) {
// // //         next.delete(id);
// // //         Alert.alert("Left", `You left ${name}`);
// // //       } else {
// // //         next.add(id);
// // //         Alert.alert("Joined", `You joined ${name}`);
// // //       }
// // //       return next;
// // //     });
// // //   };

// // //   const renderCard = ({ item }) => {
// // //     const isJoined = joined.has(item.id);

// // //     return (
// // //       <TouchableOpacity
// // //         activeOpacity={0.95}
// // //         style={styles.cardWrapper}
// // //         onPress={() => navigation?.navigate("Channel", { communityId: item.id })}
// // //       >
// // //         <View style={styles.cardContainer}>
// // //           <View style={styles.cardLeft}>
// // //             <View style={styles.cardHeader}>
// // //               <View style={styles.avatar}>
// // //                 <Text style={styles.avatarText}>
// // //                   {item.name.charAt(0).toUpperCase()}
// // //                 </Text>
// // //               </View>
// // //               <View style={styles.cardInfo}>
// // //                 <Text style={styles.cardTitle}>{item.name}</Text>
// // //                 <Text style={styles.cardSub}>
// // //                   {item.members.toLocaleString()} Members · {item.type}
// // //                 </Text>
// // //               </View>
// // //             </View>

// // //             <Text style={styles.cardDesc} numberOfLines={2}>
// // //               {item.description}
// // //             </Text>
// // //           </View>

// // //           <View style={styles.cardRight}>
// // //             <ImageBackground
// // //               source={{ uri: item.image }}
// // //               style={styles.cardBg}
// // //               imageStyle={styles.cardImage}
// // //             >
// // //               <View style={styles.cardOverlay} />
// // //               <TouchableOpacity
// // //                 style={styles.peopleBtn}
// // //                 onPress={() => toggleJoin(item.id, item.name)}
// // //               >
// // //                 <Icon name="users" size={18} color="#E5ECFF" />
// // //               </TouchableOpacity>
// // //             </ImageBackground>
// // //           </View>
// // //         </View>
// // //       </TouchableOpacity>
// // //     );
// // //   };

// // //   return (
// // //     <View style={styles.root}>
// // //       <StatusBar barStyle="light-content" />

// // //       <View style={styles.mainContainer}>
// // //         {/* LEFT SIDEBAR */}
// // //         <View style={styles.sidebar}>
// // //           <TouchableOpacity style={styles.sideButton}>
// // //             <Icon name="compass" size={22} color="#E5ECFF" />
// // //           </TouchableOpacity>

// // //           {/* PLUS Button → Navigate to Create_Nexus */}
// // //           <TouchableOpacity
// // //             style={[styles.sideButton, styles.sideButtonActive]}
// // //             onPress={() => navigation.navigate("Create_Nexus")}
// // //           >
// // //             <Icon name="plus" size={24} color="#E5ECFF" />
// // //           </TouchableOpacity>

// // //           {/* NEW: small users icon that opens V44 */}
// // //           {/* <TouchableOpacity
// // //             style={[styles.sideButton, styles.sideButtonSmall]}
// // //             onPress={() => navigation.navigate("Nexuschat")}
// // //           >
// // //             <Icon name="users" size={18} color="#E5ECFF" />
// // //           </TouchableOpacity> */}
// // //         </View>

// // //         {/* RIGHT CONTENT AREA */}
// // //         <View style={styles.contentArea}>
// // //           <View style={styles.addBlipCard}>
// // //             <Text style={styles.addBlipText}>Add Blips</Text>
// // //           </View>

// // //           <View style={styles.exploreContainer}>
// // //             <Text style={styles.exploreTitle}>Explore</Text>

// // //             <View style={styles.searchRow}>
// // //               <View style={styles.searchBox}>
// // //                 <Icon name="search" size={18} color="#64748b" />
// // //                 <TextInput
// // //                   style={styles.searchInput}
// // //                   placeholder="Search"
// // //                   placeholderTextColor="#64748b"
// // //                   value={search}
// // //                   onChangeText={setSearch}
// // //                 />
// // //               </View>

// // //               <TouchableOpacity style={styles.filterBtn}>
// // //                 <Text style={styles.filterText}>Filter</Text>
// // //               </TouchableOpacity>
// // //             </View>

// // //             <FlatList
// // //               data={filtered}
// // //               keyExtractor={(item) => item.id}
// // //               renderItem={renderCard}
// // //               showsVerticalScrollIndicator={false}
// // //               contentContainerStyle={styles.listContent}
// // //             />
// // //           </View>
// // //         </View>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   root: {
// // //     flex: 1,
// // //     backgroundColor: "#0a0f1e",
// // //   },
// // //   mainContainer: {
// // //     flex: 1,
// // //     flexDirection: "row",
// // //     paddingTop: 50,
// // //     paddingLeft: 16,
// // //     paddingRight: 16,
// // //   },

// // //   sidebar: {
// // //     width: 60,
// // //     alignItems: "center",
// // //     paddingTop: 8,
// // //     marginRight: 12,
// // //   },
// // //   sideButton: {
// // //     width: 48,
// // //     height: 48,
// // //     borderRadius: 16,
// // //     backgroundColor: "#0f1729",
// // //     borderWidth: 1,
// // //     borderColor: "#1e293b",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: 12,
// // //   },
// // //   sideButtonActive: {
// // //     backgroundColor: "#1e40af",
// // //     borderColor: "#2563eb",
// // //   },
// // //   sideButtonSmall: {
// // //     width: 42,
// // //     height: 42,
// // //     borderRadius: 12,
// // //     backgroundColor: "#0f1729",
// // //     borderWidth: 1,
// // //     borderColor: "#1e293b",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: 12,
// // //   },

// // //   contentArea: {
// // //     flex: 1,
// // //   },
// // //   addBlipCard: {
// // //     height: 100,
// // //     borderRadius: 20,
// // //     backgroundColor: "#0f1729",
// // //     borderWidth: 1,
// // //     borderColor: "#1e293b",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: 16,
// // //   },
// // //   addBlipText: {
// // //     color: "#E5ECFF",
// // //     fontSize: 16,
// // //     fontWeight: "600",
// // //   },

// // //   exploreContainer: {
// // //     flex: 1,
// // //     borderRadius: 28,
// // //     backgroundColor: "#0f1729",
// // //     paddingHorizontal: 16,
// // //     paddingTop: 20,
// // //     paddingBottom: 20,
// // //   },
// // //   exploreTitle: {
// // //     color: "#F9FAFF",
// // //     fontSize: 22,
// // //     fontWeight: "700",
// // //     marginBottom: 16,
// // //   },

// // //   searchRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
// // //   searchBox: {
// // //     flex: 1,
// // //     height: 44,
// // //     borderRadius: 22,
// // //     paddingHorizontal: 16,
// // //     backgroundColor: "#1e293b",
// // //     borderWidth: 1,
// // //     borderColor: "#334155",
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   searchInput: {
// // //     flex: 1,
// // //     marginLeft: 10,
// // //     color: "#F9FAFF",
// // //     fontSize: 15,
// // //   },
// // //   filterBtn: {
// // //     marginLeft: 12,
// // //     paddingHorizontal: 16,
// // //     height: 44,
// // //     justifyContent: "center",
// // //   },
// // //   filterText: {
// // //     color: "#3b82f6",
// // //     fontSize: 15,
// // //     fontWeight: "600",
// // //   },

// // //   listContent: {
// // //     paddingBottom: 20,
// // //   },
// // //   cardWrapper: {
// // //     marginBottom: 16,
// // //   },
// // //   cardContainer: {
// // //     flexDirection: "row",
// // //     height: 100,
// // //     borderRadius: 20,
// // //     backgroundColor: "#1e293b",
// // //     overflow: "hidden",
// // //   },
// // //   cardLeft: {
// // //     flex: 1,
// // //     padding: 14,
// // //     justifyContent: "space-between",
// // //   },
// // //   cardHeader: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   avatar: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 20,
// // //     backgroundColor: "#ec4899",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   avatarText: {
// // //     color: "#fff",
// // //     fontSize: 18,
// // //     fontWeight: "700",
// // //   },
// // //   cardInfo: {
// // //     marginLeft: 12,
// // //     flex: 1,
// // //   },
// // //   cardTitle: {
// // //     color: "#F9FAFF",
// // //     fontSize: 15,
// // //     fontWeight: "700",
// // //     marginBottom: 2,
// // //   },
// // //   cardSub: {
// // //     color: "#94a3b8",
// // //     fontSize: 11,
// // //   },
// // //   cardDesc: {
// // //     color: "#e2e8f0",
// // //     fontSize: 12,
// // //     lineHeight: 16,
// // //   },
// // //   cardRight: {
// // //     width: 120,
// // //   },
// // //   cardBg: {
// // //     flex: 1,
// // //     justifyContent: "flex-end",
// // //     alignItems: "flex-end",
// // //     padding: 10,
// // //   },
// // //   cardImage: {
// // //     borderTopRightRadius: 20,
// // //     borderBottomRightRadius: 20,
// // //   },
// // //   cardOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: "rgba(15, 23, 42, 0.5)",
// // //   },
// // //   peopleBtn: {
// // //     width: 36,
// // //     height: 36,
// // //     borderRadius: 12,
// // //     backgroundColor: "#2563eb",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // // });
// // import React, { useMemo, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   StyleSheet,
// //   FlatList,
// //   TouchableOpacity,
// //   ImageBackground,
// //   StatusBar,
// //   ScrollView,
// //   Image,
// //   Dimensions,
// // } from "react-native";
// // import Icon from "react-native-vector-icons/Feather";

// // /* --------- RESPONSIVE HELPERS ---------- */
// // const { width: SCREEN_W } = Dimensions.get("window");
// // const guidelineBaseWidth = 375;
// // const scale = (size) => (SCREEN_W / guidelineBaseWidth) * size;

// // /* --------- DUMMY DATA ---------- */
// // const COMMUNITIES = [
// //   {
// //     id: "1",
// //     name: "Sushis City",
// //     members: 14879,
// //     type: "Community",
// //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// //     image:
// //       "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// //   {
// //     id: "2",
// //     name: "Sushis City",
// //     members: 14879,
// //     type: "Community",
// //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// //     image:
// //       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// //   {
// //     id: "3",
// //     name: "Sushis City",
// //     members: 14879,
// //     type: "Community",
// //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// //     image:
// //       "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// //   {
// //     id: "4",
// //     name: "Sushis City",
// //     members: 14879,
// //     type: "Community",
// //     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
// //     image:
// //       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// // ];

// // const BLIPS = [
// //   { id: "add", type: "add" },
// //   {
// //     id: "b1",
// //     name: "Bliss",
// //     avatar:
// //       "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// //   {
// //     id: "b2",
// //     name: "Bliss",
// //     avatar:
// //       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// //   {
// //     id: "b3",
// //     name: "Bliss",
// //     avatar:
// //       "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// //   {
// //     id: "b4",
// //     name: "Bliss",
// //     avatar:
// //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// // ];

// // export default function HomeScreen({ navigation }) {
// //   const [search, setSearch] = useState("");
// //   const [joined, setJoined] = useState(new Set());

// //   const filtered = useMemo(() => {
// //     if (!search.trim()) return COMMUNITIES;
// //     const s = search.toLowerCase();
// //     return COMMUNITIES.filter(
// //       (c) =>
// //         c.name.toLowerCase().includes(s) ||
// //         c.description.toLowerCase().includes(s)
// //     );
// //   }, [search]);

// //   const toggleJoin = (id, name) => {
// //     setJoined((prev) => {
// //       const next = new Set(prev);
// //       if (next.has(id)) {
// //         next.delete(id);
// //       } else {
// //         next.add(id);
// //       }
// //       return next;
// //     });
// //   };

// //   const renderCard = ({ item }) => {
// //     const isJoined = joined.has(item.id);

// //     return (
// //       <TouchableOpacity
// //         activeOpacity={0.95}
// //         style={styles.cardWrapper}
// //         onPress={() => navigation?.navigate("Channel", { communityId: item.id })}
// //       >
// //         <View style={styles.cardContainer}>
// //           {/* LEFT SIDE */}
// //           <View style={styles.cardLeft}>
// //             <View style={styles.cardHeader}>
// //               <View style={styles.avatar}>
// //                 <Text style={styles.avatarText}>
// //                   {item.name.charAt(0).toUpperCase()}
// //                 </Text>
// //               </View>
// //               <View style={styles.cardInfo}>
// //                 <Text style={styles.cardTitle}>{item.name}</Text>
// //                 <Text style={styles.cardSub}>
// //                   {item.members.toLocaleString()} Members · {item.type}
// //                 </Text>
// //               </View>
// //             </View>

// //             <Text style={styles.cardDesc} numberOfLines={2}>
// //               {item.description}
// //             </Text>
// //           </View>

// //           {/* RIGHT SIDE */}
// //           <View style={styles.cardRight}>
// //             <ImageBackground
// //               source={{ uri: item.image }}
// //               style={styles.cardBg}
// //               imageStyle={styles.cardImage}
// //             >
// //               <View style={styles.cardOverlay} />
// //               <TouchableOpacity
// //                 style={[
// //                   styles.peopleBtn,
// //                   isJoined && { backgroundColor: "#1d4ed8" },
// //                 ]}
// //                 onPress={() => toggleJoin(item.id, item.name)}
// //               >
// //                 <Icon name="users" size={scale(18)} color="#E5ECFF" />
// //               </TouchableOpacity>
// //             </ImageBackground>
// //           </View>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   const renderBlips = () => (
// //     <ScrollView
// //       horizontal
// //       showsHorizontalScrollIndicator={false}
// //       contentContainerStyle={styles.blipScrollContent}
// //     >
// //       {BLIPS.map((item) => {
// //         if (item.type === "add") {
// //           // first Add Blips card
// //           return (
// //             <TouchableOpacity
// //               key={item.id}
// //               style={styles.blipAddCard}
// //               activeOpacity={0.9}
// //               onPress={() => navigation.navigate("Create_Nexus")}
// //             >
// //               <View style={styles.blipAddCircle}>
// //                 <Icon name="plus" size={scale(22)} color="#E5ECFF" />
// //               </View>
// //               <Text style={styles.blipAddText}>Add Blips</Text>
// //             </TouchableOpacity>
// //           );
// //         }

// //         return (
// //           <View key={item.id} style={styles.blipCard}>
// //             <View style={styles.blipAvatarWrapper}>
// //               <Image source={{ uri: item.avatar }} style={styles.blipAvatar} />
// //             </View>
// //             <Text style={styles.blipLabel} numberOfLines={1}>
// //               Blos
// //             </Text>
// //           </View>
// //         );
// //       })}
// //     </ScrollView>
// //   );

// //   return (
// //     <View style={styles.root}>
// //       <StatusBar barStyle="light-content" />

// //       <View style={styles.mainContainer}>
// //         {/* LEFT SIDEBAR */}
// //         <View style={styles.sidebar}>
// //           {/* top round active icon */}
// //           <View style={styles.sideCircleWrapper}>
// //             <View style={styles.sideCircleOuter}>
// //               <View style={styles.sideCircleInner}>
// //                 <Icon name="compass" size={scale(18)} color="#E5ECFF" />
// //               </View>
// //             </View>
// //           </View>

// //           {/* plus button */}
// //           <TouchableOpacity
// //             style={styles.sideButton}
// //             onPress={() => navigation.navigate("Create_Nexus")}
// //           >
// //             <Icon name="plus" size={scale(22)} color="#E5ECFF" />
// //           </TouchableOpacity>

// //           {/* example extra icon (optional) */}
// //           <TouchableOpacity
// //             style={styles.sideSmallButton}
// //             onPress={() => navigation.navigate("Nexuschat")}
// //           >
// //             <Icon name="users" size={scale(16)} color="#E5ECFF" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* RIGHT CONTENT */}
// //         <View style={styles.contentArea}>
// //           {/* TOP BLIPS STRIP */}
// //           {renderBlips()}

// //           {/* EXPLORE SECTION */}
// //           <View style={styles.exploreContainer}>
// //             <Text style={styles.exploreTitle}>Explore</Text>

// //             {/* search row */}
// //             <View style={styles.searchRow}>
// //               <View style={styles.searchBox}>
// //                 <Icon name="search" size={scale(18)} color="#64748b" />
// //                 <TextInput
// //                   style={styles.searchInput}
// //                   placeholder="Search communities..."
// //                   placeholderTextColor="#64748b"
// //                   value={search}
// //                   onChangeText={setSearch}
// //                 />
// //               </View>

// //               <TouchableOpacity style={styles.filterBtn}>
// //                 <Icon name="sliders" size={scale(18)} color="#E5ECFF" />
// //               </TouchableOpacity>
// //             </View>

// //             {/* list */}
// //             <FlatList
// //               data={filtered}
// //               keyExtractor={(item) => item.id}
// //               renderItem={renderCard}
// //               showsVerticalScrollIndicator={true}
// //               contentContainerStyle={styles.listContent}
// //             />
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }

// // /* --------- STYLES ---------- */

// // const styles = StyleSheet.create({
// //   root: {
// //     flex: 1,
// //     backgroundColor: "#020617", // deep navy like screenshot
// //   },
// //   mainContainer: {
// //     flex: 1,
// //     flexDirection: "row",
// //     paddingTop: scale(40),
// //     paddingHorizontal: scale(16),
// //   },

// //   /* SIDEBAR */
// //   sidebar: {
// //     width: scale(64),
// //     alignItems: "center",
// //     paddingTop: scale(4),
// //     marginRight: scale(12),
// //   },
// //   sideCircleWrapper: {
// //     marginBottom: scale(16),
// //   },
// //   sideCircleOuter: {
// //     width: scale(48),
// //     height: scale(48),
// //     borderRadius: scale(24),
// //     borderWidth: 2,
// //     borderColor: "#1d4ed8",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#020617",
// //   },
// //   sideCircleInner: {
// //     width: scale(38),
// //     height: scale(38),
// //     borderRadius: scale(19),
// //     backgroundColor: "#0b1220",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   sideButton: {
// //     width: scale(48),
// //     height: scale(48),
// //     borderRadius: scale(16),
// //     backgroundColor: "#0b1220",
// //     borderWidth: 1,
// //     borderColor: "#1f2937",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: scale(12),
// //   },
// //   sideSmallButton: {
// //     width: scale(40),
// //     height: scale(40),
// //     borderRadius: scale(14),
// //     backgroundColor: "#0b1220",
// //     borderWidth: 1,
// //     borderColor: "#1f2937",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginTop: scale(8),
// //   },

// //   /* CONTENT */
// //   contentArea: {
// //     flex: 1,
// //   },

// //   /* BLIPS STRIP */
// //   blipScrollContent: {
// //     paddingVertical: scale(8),
// //   },
// //   blipAddCard: {
// //     width: scale(96),
// //     height: scale(118),
// //     borderRadius: scale(26),
// //     backgroundColor: "#020617",
// //     borderWidth: 1,
// //     borderColor: "#1f2937",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginRight: scale(12),
// //   },
// //   blipAddCircle: {
// //     width: scale(46),
// //     height: scale(46),
// //     borderRadius: scale(23),
// //     backgroundColor: "#1d4ed8",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: scale(8),
// //   },
// //   blipAddText: {
// //     color: "#E5ECFF",
// //     fontSize: scale(13),
// //     fontWeight: "600",
// //   },
// //   blipCard: {
// //     width: scale(96),
// //     height: scale(118),
// //     borderRadius: scale(26),
// //     backgroundColor: "#020617",
// //     borderWidth: 1,
// //     borderColor: "#1f2937",
// //     justifyContent: "flex-start",
// //     alignItems: "center",
// //     paddingTop: scale(14),
// //     marginRight: scale(12),
// //   },
// //   blipAvatarWrapper: {
// //     width: scale(56),
// //     height: scale(56),
// //     borderRadius: scale(28),
// //     borderWidth: 2,
// //     borderColor: "#38bdf8",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: scale(6),
// //   },
// //   blipAvatar: {
// //     width: scale(50),
// //     height: scale(50),
// //     borderRadius: scale(25),
// //   },
// //   blipLabel: {
// //     color: "#E5ECFF",
// //     fontSize: scale(13),
// //     fontWeight: "600",
// //   },

// //   /* EXPLORE CONTAINER */
// //   exploreContainer: {
// //     flex: 1,
// //     marginTop: scale(16),
// //     borderRadius: scale(28),
// //     backgroundColor: "#020617",
// //     paddingHorizontal: scale(16),
// //     paddingTop: scale(18),
// //     paddingBottom: scale(20),
// //     borderWidth: 1,
// //     borderColor: "#1f2937",
// //   },
// //   exploreTitle: {
// //     color: "#F9FAFF",
// //     fontSize: scale(22),
// //     fontWeight: "700",
// //     marginBottom: scale(16),
// //   },

// //   /* SEARCH ROW */
// //   searchRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: scale(18),
// //   },
// //   searchBox: {
// //     flex: 1,
// //     height: scale(46),
// //     borderRadius: scale(23),
// //     paddingHorizontal: scale(16),
// //     backgroundColor: "#020617",
// //     borderWidth: 1,
// //     borderColor: "#1f2937",
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   searchInput: {
// //     flex: 1,
// //     marginLeft: scale(10),
// //     color: "#F9FAFF",
// //     fontSize: scale(15),
// //   },
// //   filterBtn: {
// //     marginLeft: scale(12),
// //     width: scale(44),
// //     height: scale(44),
// //     borderRadius: scale(22),
// //     backgroundColor: "#1d4ed8",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },

// //   /* LIST + CARDS */
// //   listContent: {
// //     paddingBottom: scale(20),
// //   },
// //   cardWrapper: {
// //     marginBottom: scale(14),
// //   },
// //   cardContainer: {
// //     flexDirection: "row",
// //     height: scale(102),
// //     borderRadius: scale(22),
// //     overflow: "hidden",
// //     backgroundColor: "#0b1220",
// //   },
// //   cardLeft: {
// //     flex: 1,
// //     padding: scale(14),
// //     justifyContent: "space-between",
// //   },
// //   cardHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   avatar: {
// //     width: scale(40),
// //     height: scale(40),
// //     borderRadius: scale(20),
// //     backgroundColor: "#ec4899",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   avatarText: {
// //     color: "#fff",
// //     fontSize: scale(18),
// //     fontWeight: "700",
// //   },
// //   cardInfo: {
// //     marginLeft: scale(12),
// //     flex: 1,
// //   },
// //   cardTitle: {
// //     color: "#F9FAFF",
// //     fontSize: scale(15),
// //     fontWeight: "700",
// //     marginBottom: scale(2),
// //   },
// //   cardSub: {
// //     color: "#94a3b8",
// //     fontSize: scale(11),
// //   },
// //   cardDesc: {
// //     color: "#e2e8f0",
// //     fontSize: scale(12),
// //     lineHeight: scale(16),
// //   },
// //   cardRight: {
// //     width: scale(120),
// //   },
// //   cardBg: {
// //     flex: 1,
// //     justifyContent: "flex-end",
// //     alignItems: "flex-end",
// //     padding: scale(10),
// //   },
// //   cardImage: {
// //     borderTopRightRadius: scale(22),
// //     borderBottomRightRadius: scale(22),
// //   },
// //   cardOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: "rgba(15, 23, 42, 0.55)",
// //   },
// //   peopleBtn: {
// //     width: scale(40),
// //     height: scale(40),
// //     borderRadius: scale(14),
// //     backgroundColor: "#2563eb",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// // });
// import React, { useMemo, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   ImageBackground,
//   StatusBar,
// } from "react-native";
// import Icon from "react-native-vector-icons/Feather";

// const COMMUNITIES = [
//   {
//     id: "1",
//     name: "Sushis City",
//     members: 14879,
//     type: "Community",
//     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
//     image:
//       "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: "2",
//     name: "Sushis City",
//     members: 14879,
//     type: "Community",
//     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
//     image:
//       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: "3",
//     name: "Sushis City",
//     members: 14879,
//     type: "Community",
//     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
//     image:
//       "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: "4",
//     name: "Sushis City",
//     members: 14879,
//     type: "Community",
//     description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
//     image:
//       "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];

// export default function HomeScreen({ navigation }) {
//   const [search, setSearch] = useState("");
//   const [joined, setJoined] = useState(new Set());

//   const filtered = useMemo(() => {
//     if (!search.trim()) return COMMUNITIES;
//     const s = search.toLowerCase();
//     return COMMUNITIES.filter(
//       (c) =>
//         c.name.toLowerCase().includes(s) ||
//         c.description.toLowerCase().includes(s)
//     );
//   }, [search]);

//   /* JOIN / LEAVE */
//   const toggleJoin = (id, name) => {
//     setJoined((prev) => {
//       const next = new Set(prev);
//       if (next.has(id)) next.delete(id);
//       else next.add(id);
//       return next;
//     });
//   };

//   /* CARD */
//   const renderCard = ({ item }) => {
//     const isJoined = joined.has(item.id);

//     return (
//       <TouchableOpacity activeOpacity={0.9} style={styles.cardWrapper}>
//         <View style={styles.cardContainer}>
//           {/* LEFT SIDE OF CARD */}
//           <View style={styles.cardLeft}>
//             <View style={styles.cardHeader}>
//               <View style={styles.avatar}>
//                 <Text style={styles.avatarText}>
//                   {item.name.charAt(0).toUpperCase()}
//                 </Text>
//               </View>

//               <View style={styles.cardInfo}>
//                 <Text style={styles.cardTitle}>{item.name}</Text>
//                 <Text style={styles.cardSub}>
//                   {item.members.toLocaleString()} Members · {item.type}
//                 </Text>
//               </View>
//             </View>

//             <Text style={styles.cardDesc} numberOfLines={2}>
//               {item.description}
//             </Text>
//           </View>

//           {/* RIGHT IMAGE + PEOPLE BUTTON */}
//           <View style={styles.cardRight}>
//             <ImageBackground
//               source={{ uri: item.image }}
//               style={styles.cardBg}
//               imageStyle={styles.cardImage}
//             >
//               <View style={styles.cardOverlay} />

//               {/* ⭐ PEOPLE BUTTON → OPEN V55 SCREEN */}
//               <TouchableOpacity
//                 style={styles.peopleBtn}
//                 onPress={() =>
//                   navigation.navigate("Nexuschat", {
//                     communityId: item.id,
//                     name: item.name,
//                   })
//                 }
//               >
//                 <Icon name="users" size={18} color="#E5ECFF" />
//               </TouchableOpacity>
//             </ImageBackground>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.root}>
//       <StatusBar barStyle="light-content" />
//       <View style={styles.mainContainer}>
//         {/* LEFT SIDEBAR */}
//         <View style={styles.sidebar}>
//           <TouchableOpacity style={styles.sideButton}>
//             <Icon name="compass" size={22} color="#E5ECFF" />
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.sideButton, styles.sideButtonActive]}
//             onPress={() => navigation.navigate("Create_Nexus")}
//           >
//             <Icon name="plus" size={24} color="#E5ECFF" />
//           </TouchableOpacity>
//         </View>

//         {/* RIGHT SIDE */}
//         <View style={styles.contentArea}>
//           <View style={styles.addBlipCard}>
//             <Text style={styles.addBlipText}>Add Blips</Text>
//           </View>

//           <View style={styles.exploreContainer}>
//             <Text style={styles.exploreTitle}>Explore</Text>

//             {/* SEARCH + FILTER */}
//             <View style={styles.searchRow}>
//               <View style={styles.searchBox}>
//                 <Icon name="search" size={18} color="#64748b" />
//                 <TextInput
//                   style={styles.searchInput}
//                   placeholder="Search..."
//                   placeholderTextColor="#64748b"
//                   value={search}
//                   onChangeText={setSearch}
//                 />
//               </View>

//               <TouchableOpacity style={styles.filterBtn}>
//                 <Text style={styles.filterText}>Filter</Text>
//               </TouchableOpacity>
//             </View>

//             {/* LIST */}
//             <FlatList
//               data={filtered}
//               keyExtractor={(item) => item.id}
//               renderItem={renderCard}
//               showsVerticalScrollIndicator={false}
//               contentContainerStyle={styles.listContent}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// /* ---------- STYLES ---------- */

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#0a0f1e",
//   },
//   mainContainer: {
//     flex: 1,
//     flexDirection: "row",
//     paddingTop: 50,
//     paddingLeft: 16,
//     paddingRight: 16,
//   },

//   /* SIDEBAR */
//   sidebar: {
//     width: 60,
//     alignItems: "center",
//     marginRight: 12,
//   },
//   sideButton: {
//     width: 48,
//     height: 48,
//     borderRadius: 16,
//     backgroundColor: "#0f1729",
//     borderWidth: 1,
//     borderColor: "#1e293b",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   sideButtonActive: {
//     backgroundColor: "#1e40af",
//     borderColor: "#2563eb",
//   },

//   /* CONTENT AREA */
//   contentArea: {
//     flex: 1,
//   },

//   /* TOP ADD BLIPS CARD */
//   addBlipCard: {
//     height: 100,
//     borderRadius: 20,
//     backgroundColor: "#0f1729",
//     borderWidth: 1,
//     borderColor: "#1e293b",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   addBlipText: { color: "#E5ECFF", fontSize: 16, fontWeight: "600" },

//   /* EXPLORE SECTION */
//   exploreContainer: {
//     flex: 1,
//     borderRadius: 28,
//     backgroundColor: "#0f1729",
//     paddingHorizontal: 16,
//     paddingTop: 20,
//   },
//   exploreTitle: {
//     color: "#F9FAFF",
//     fontSize: 22,
//     fontWeight: "700",
//     marginBottom: 16,
//   },

//   /* SEARCH BAR */
//   searchRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 18,
//   },
//   searchBox: {
//     flex: 1,
//     height: 44,
//     borderRadius: 22,
//     paddingHorizontal: 16,
//     backgroundColor: "#1e293b",
//     borderWidth: 1,
//     borderColor: "#334155",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 10,
//     color: "#F9FAFF",
//     fontSize: 15,
//   },
//   filterBtn: {
//     marginLeft: 12,
//     paddingHorizontal: 16,
//     height: 44,
//     justifyContent: "center",
//   },
//   filterText: {
//     color: "#3b82f6",
//     fontSize: 15,
//     fontWeight: "600",
//   },

//   listContent: { paddingBottom: 20 },

//   /* COMMUNITY CARD */
//   cardWrapper: { marginBottom: 16 },

//   cardContainer: {
//     flexDirection: "row",
//     height: 100,
//     borderRadius: 20,
//     backgroundColor: "#1e293b",
//     overflow: "hidden",
//   },

//   /* LEFT PART */
//   cardLeft: { flex: 1, padding: 14, justifyContent: "space-between" },

//   cardHeader: { flexDirection: "row", alignItems: "center" },

//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#ec4899",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   avatarText: { color: "#fff", fontSize: 18, fontWeight: "700" },

//   cardInfo: { marginLeft: 12, flex: 1 },

//   cardTitle: { color: "#F9FAFF", fontSize: 15, fontWeight: "700" },
//   cardSub: { color: "#94a3b8", fontSize: 11 },
//   cardDesc: { color: "#e2e8f0", fontSize: 12, lineHeight: 16 },

//   /* RIGHT PART */
//   cardRight: { width: 120 },

//   cardBg: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "flex-end",
//     padding: 10,
//   },
//   cardImage: {
//     borderTopRightRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   cardOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(15,23,42,0.5)",
//   },

//   /* PEOPLE BUTTON */
//   peopleBtn: {
//     width: 40,
//     height: 40,
//     borderRadius: 14,
//     backgroundColor: "#2563eb",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const COMMUNITIES = [
  {
    id: "1",
    name: "Sushis City",
    members: 14879,
    type: "Community",
    description: "Night grind + neon vibes",
    description2: "Chill gamers. Cozy lobbies",
    image:
      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    name: "Sushis City",
    members: 14879,
    type: "Community",
    description: "Night grind + neon vibes",
    description2: "Chill gamers. Cozy lobbies",
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    name: "Sushis City",
    members: 14879,
    type: "Community",
    description: "Night grind + neon vibes",
    description2: "Chill gamers. Cozy lobbies",
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    name: "Sushis City",
    members: 14879,
    type: "Community",
    description: "Night grind + neon vibes",
    description2: "Chill gamers. Cozy lobbies",
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [joined, setJoined] = useState(new Set());

  const filtered = useMemo(() => {
    if (!search.trim()) return COMMUNITIES;
    const s = search.toLowerCase();
    return COMMUNITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(s) ||
        c.description.toLowerCase().includes(s)
    );
  }, [search]);

  const toggleJoin = (id, name) => {
    setJoined((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        Alert.alert("Left", `You left ${name}`);
      } else {
        next.add(id);
        Alert.alert("Joined", `You joined ${name}`);
      }
      return next;
    });
  };

  const renderCard = ({ item }) => {
    const isJoined = joined.has(item.id);
    return (
      <TouchableOpacity
        style={styles.cardWrapper}
        activeOpacity={0.8}
        onPress={() => navigation?.navigate("Channel", { communityId: item.id })}
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.cardContainer}
          imageStyle={styles.cardImageStyle}
          resizeMode="cover"
        >
          <View style={styles.cardOverlay} />
          <View style={styles.cardContent}>
            {/* Header with avatar and info */}
            <View style={styles.cardHeader}>
              <View style={styles.avatar}>
               
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSub}>
                  {item.members.toLocaleString()} Members · {item.type}
                </Text>
              </View>
              {/* People button */}
              <TouchableOpacity
                style={styles.peopleBtn}
                onPress={() =>
                  navigation.navigate("Nexuschat", {
                    communityId: item.id,
                    name: item.name,
                  })
                }
              >
                <Icon
                  name={isJoined ? "check" : "users"}
                  size={16}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>

            {/* Description with emoji bullets */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.cardDesc}>
                <Text style={styles.emoji}>🎮 </Text>
                {item.description}
                <Text style={styles.sparkle}> ✨🎮</Text>
              </Text>
              <Text style={styles.cardDesc}>
                <Text style={styles.emoji}>😎 </Text>
                {item.description2}
                <Text style={styles.sparkle}> 🎮🔥</Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.mainContainer}>
        {/* LEFT SIDEBAR */}
        <View style={styles.sidebar}>
          <TouchableOpacity
            style={[styles.sideButton, styles.sideButtonActive]}
          >
            <Icon name="compass" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.sideButton}
            onPress={() => navigation?.navigate("Create_Nexus")}
          >
            <Icon name="plus" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* RIGHT CONTENT AREA */}
        <View style={styles.contentArea}>
          {/* Add Blips Card */}
          <View style={styles.addBlipCard}>
            <Icon name="plus" size={32} color="#fff" />
            <Text style={styles.addBlipText}>Add Blips</Text>
          </View>

          {/* Explore Container */}
          <View style={styles.exploreContainer}>
            <Text style={styles.exploreTitle}>Explore</Text>

            {/* Search Row */}
            <View style={styles.searchRow}>
              <View style={styles.searchBox}>
                <Icon name="search" size={16} color="#64748b" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#64748b"
                  value={search}
                  onChangeText={setSearch}
                />
              </View>
              <TouchableOpacity style={styles.filterBtn}>
                <Text style={styles.filterText}>Filter</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={filtered}
              keyExtractor={(item) => item.id}
              renderItem={renderCard}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
            />
          </View>
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={22} color="#3b82f6" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="message-circle" size={22} color="#64748b" />
          <Text style={styles.tabLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="bell" size={22} color="#64748b" />
          <Text style={styles.tabLabel}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="user" size={22} color="#64748b" />
          <Text style={styles.tabLabel}>You</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0A0E1A",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 50,
    paddingLeft: 12,
    paddingRight: 12,
  },
  // Sidebar
  sidebar: {
    width: 50,
    alignItems: "center",
    paddingTop: 8,
    marginRight: 8,
  },
  sideButton: {
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: "#3255BA",
    borderWidth: 1,
    borderColor: "#3255BA",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffff",
    marginBottom: 10,
  },
  sideButtonActive: {
    backgroundColor: "#3255BA",
    borderColor: "#3255BA",
        color: "#ffff",

  },
  // Content Area
  contentArea: {
    flex: 1,
  },
  // Add Blips Card
  addBlipCard: {
    width: 70,
    height: 102,
    borderRadius: 15,
    backgroundColor: "#1a2332",
      borderWidth: 4,
    borderColor: "#3154BA4D",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  addBlipText: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "500",
    marginTop: 12,
  },
  // Explore Container
  exploreContainer: {
    flex: 1,
    backgroundColor: "#0C142A",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 21,
  },
  exploreTitle: {
    color: "#ffff",
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 17,
  },
  // Search Row
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  searchBox: {
    flex: 1,
    height: 40,
    borderRadius: 100,
    paddingHorizontal: 14,
    backgroundColor: "#3154BA4D",
    borderWidth: 1,
    borderColor: "#3154BA66",
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    marginLeft: 18,
    color: "#Ffff",
    fontSize: 14,
  },
  filterBtn: {
    marginLeft: 10,
    color: "#Ffff",
    height: 40,
    justifyContent: "center",
  },
  filterText: {
    color: "#3255BA",
    fontSize: 10,
    fontWeight: "500",
  },
  // List
  listContent: {
    paddingBottom: 20,
  },
  // Card Styles
  cardWrapper: {
    marginBottom: 12,
  },
  cardContainer: {
    height: 110,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardImageStyle: {
    borderRadius: 16,
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderRadius: 16,
  },
  cardContent: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ec4899",
    justifyContent: "center",
    alignItems: "center",
  },
  
  cardInfo: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 1,
  },
  cardSub: {
    color: "#BDBDBD",
    fontSize: 8,
        fontWeight: "500",
marginTop: 2,
  },

  peopleBtn: {
   paddingHorizontal: 10,
   paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#3255BA",
    justifyContent: "center",
    alignItems: "center",
  },

  
  cardDesc: {
    color: "#FFFFFF",
    fontSize: 8,
        fontWeight: "500",
    lineHeight: 16,
  },

  emoji: {
    fontSize: 8,
  },
  sparkle: {
    fontSize: 8,
  },
  
  // Bottom Tab Bar
  bottomTabBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#0f1729",
    borderTopWidth: 1,
    borderTopColor: "#1e293b",
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  tabLabel: {
    color: "#64748b",
    fontSize: 11,
    marginTop: 4,
    fontWeight: "500",
  },
  tabLabelActive: {
    color: "#3b82f6",
  },
});