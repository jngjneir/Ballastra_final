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
//   Alert,
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

//   const toggleJoin = (id, name) => {
//     setJoined((prev) => {
//       const next = new Set(prev);
//       if (next.has(id)) {
//         next.delete(id);
//         Alert.alert("Left", `You left ${name}`);
//       } else {
//         next.add(id);
//         Alert.alert("Joined", `You joined ${name}`);
//       }
//       return next;
//     });
//   };

//   const renderCard = ({ item }) => {
//     const isJoined = joined.has(item.id);

//     return (
//       <TouchableOpacity
//         activeOpacity={0.95}
//         style={styles.cardWrapper}
//         onPress={() => navigation.navigate("Channel", { communityId: item.id })}
//       >
//         <ImageBackground
//           source={{ uri: item.image }}
//           style={styles.cardBg}
//           imageStyle={styles.cardImage}
//         >
//           <View style={styles.cardOverlay} />

//           {/* top row */}
//           <View style={styles.cardTopRow}>
//             <View style={styles.avatar}>
//               <Text style={styles.avatarText}>
//                 {item.name.charAt(0).toUpperCase()}
//               </Text>
//             </View>

//             <View style={{ flex: 1 }}>
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <Text style={styles.cardSub}>
//                 {item.members.toLocaleString()} Members · {item.type}
//               </Text>
//             </View>

//             <View style={styles.peopleBtn}>
//               <Icon name="users" size={20} color="#E5ECFF" />
//             </View>
//           </View>

//           {/* description */}
//           <Text style={styles.cardDesc} numberOfLines={2}>
//             {item.description}
//           </Text>

//           {/* bottom row */}
//           <View style={styles.cardBottomRow}>
//             <TouchableOpacity
//               style={[styles.joinBtn, isJoined && styles.joinBtnActive]}
//               onPress={() => toggleJoin(item.id, item.name)}
//             >
//               <Text
//                 style={[
//                   styles.joinText,
//                   isJoined && { color: "#0B1020", fontWeight: "700" },
//                 ]}
//               >
//                 {isJoined ? "Joined" : "Join"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.root}>
//       <StatusBar barStyle="light-content" />

//       {/* TOP LEFT SIDEBAR + ADD BLIPS (like image) */}
//       <View style={styles.topRow}>
//         <View style={styles.sideColumn}>
//           <TouchableOpacity style={styles.sideButton}>
//             <Icon name="compass" size={20} color="#E5ECFF" />
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.sideButton, styles.sideButtonBlue]}>
//             <Icon name="plus" size={24} color="#E5ECFF" />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.addBlipCard}>
//           <Text style={styles.addBlipText}>Add Blips</Text>
//         </TouchableOpacity>
//       </View>

//       {/* MAIN SCROLL AREA (Explore card) */}
//       <View style={styles.exploreContainer}>
//         <Text style={styles.exploreTitle}>Explore</Text>

//         {/* search row */}
//         <View style={styles.searchRow}>
//           <View style={styles.searchBox}>
//             <Icon name="search" size={18} color="#64748b" />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search"
//               placeholderTextColor="#64748b"
//               value={search}
//               onChangeText={setSearch}
//             />
//           </View>

//           <TouchableOpacity style={styles.filterBtn}>
//             <Text style={styles.filterText}>Filter</Text>
//           </TouchableOpacity>
//         </View>

//         {/* list of community cards */}
//         <FlatList
//           data={filtered}
//           keyExtractor={(item) => item.id}
//           renderItem={renderCard}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 120 }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#020617", // full bg
//     paddingTop: 40,
//     paddingHorizontal: 18,
//   },

//   /** side bar + add blips **/
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 18,
//   },
//   sideColumn: {
//     width: 64,
//     alignItems: "center",
//     marginRight: 16,
//   },
//   sideButton: {
//     width: 52,
//     height: 52,
//     borderRadius: 18,
//     backgroundColor: "#020617",
//     borderWidth: 1,
//     borderColor: "#1f2937",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   sideButtonBlue: {
//     backgroundColor: "#0f172a",
//     borderColor: "#1d4ed8",
//   },
//   addBlipCard: {
//     flex: 1,
//     height: 110,
//     borderRadius: 24,
//     backgroundColor: "#050b1f",
//     borderWidth: 1,
//     borderColor: "#111827",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   addBlipText: {
//     color: "#E5ECFF",
//     fontSize: 16,
//     fontWeight: "500",
//   },

//   /** explore container **/
//   exploreContainer: {
//     flex: 1,
//     marginTop: 4,
//     borderRadius: 32,
//     backgroundColor: "rgba(8,15,35,0.98)",
//     paddingHorizontal: 18,
//     paddingTop: 18,
//   },
//   exploreTitle: {
//     color: "#E5ECFF",
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//   },

//   /** search **/
//   searchRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   searchBox: {
//     flex: 1,
//     height: 42,
//     borderRadius: 999,
//     paddingHorizontal: 14,
//     backgroundColor: "rgba(15,23,42,0.9)",
//     borderWidth: 1,
//     borderColor: "#111827",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 8,
//     color: "#F9FAFF",
//     fontSize: 14,
//   },
//   filterBtn: {
//     marginLeft: 10,
//     paddingHorizontal: 10,
//     height: 36,
//     borderRadius: 999,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   filterText: {
//     color: "#64748b",
//     fontSize: 13,
//   },

//   /** community cards **/
//   cardWrapper: {
//     marginBottom: 14,
//     borderRadius: 22,
//     overflow: "hidden",
//   },
//   cardBg: {
//     height: 120,
//     borderRadius: 22,
//     overflow: "hidden",
//   },
//   cardImage: {
//     borderRadius: 22,
//   },
//   cardOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(10,18,45,0.65)",
//   },
//   cardTopRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 14,
//     paddingTop: 12,
//   },
//   avatar: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//     backgroundColor: "#f97316",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   avatarText: {
//     color: "#F9FAFF",
//     fontWeight: "700",
//   },
//   cardTitle: {
//     color: "#F9FAFF",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   cardSub: {
//     color: "#E5ECFF",
//     fontSize: 11,
//     marginTop: 2,
//   },
//   peopleBtn: {
//     width: 40,
//     height: 40,
//     borderRadius: 16,
//     backgroundColor: "#1D4ED8",
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 8,
//   },
//   cardDesc: {
//     color: "#E5ECFF",
//     fontSize: 11,
//     marginHorizontal: 14,
//     marginTop: 8,
//   },
//   cardBottomRow: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     paddingHorizontal: 14,
//     paddingBottom: 10,
//     marginTop: 4,
//   },
//   joinBtn: {
//     paddingHorizontal: 16,
//     paddingVertical: 6,
//     borderRadius: 999,
//     borderWidth: 1,
//     borderColor: "#38bdf8",
//     backgroundColor: "transparent",
//   },
//   joinBtnActive: {
//     backgroundColor: "#38bdf8",
//   },
//   joinText: {
//     color: "#E0F2FE",
//     fontSize: 12,
//     fontWeight: "500",
//   },
// });
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
//   Alert,
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

//   const toggleJoin = (id, name) => {
//     setJoined((prev) => {
//       const next = new Set(prev);
//       if (next.has(id)) {
//         next.delete(id);
//         Alert.alert("Left", `You left ${name}`);
//       } else {
//         next.add(id);
//         Alert.alert("Joined", `You joined ${name}`);
//       }
//       return next;
//     });
//   };

//   const renderCard = ({ item }) => {
//     const isJoined = joined.has(item.id);

//     return (
//       <TouchableOpacity
//         activeOpacity={0.95}
//         style={styles.cardWrapper}
//         onPress={() => navigation?.navigate("Channel", { communityId: item.id })}
//       >
//         <View style={styles.cardContainer}>
//           {/* Left side - Content */}
//           <View style={styles.cardLeft}>
//             {/* Avatar and title */}
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

//             {/* Description */}
//             <Text style={styles.cardDesc} numberOfLines={2}>
//               {item.description}
//             </Text>
//           </View>

//           {/* Right side - Image and button */}
//           <View style={styles.cardRight}>
//             <ImageBackground
//               source={{ uri: item.image }}
//               style={styles.cardBg}
//               imageStyle={styles.cardImage}
//             >
//               <View style={styles.cardOverlay} />
//               <TouchableOpacity
//                 style={styles.peopleBtn}
//                 onPress={() => toggleJoin(item.id, item.name)}
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

//           <TouchableOpacity style={[styles.sideButton, styles.sideButtonActive]}>
//             <Icon name="plus" size={24} color="#E5ECFF" />
//           </TouchableOpacity>
//         </View>

//         {/* RIGHT CONTENT AREA */}
//         <View style={styles.contentArea}>
//           {/* Add Blips Card */}
//           <View style={styles.addBlipCard}>
//             <Text style={styles.addBlipText}>Add Blips</Text>
//           </View>

//           {/* Explore Container */}
//           <View style={styles.exploreContainer}>
//             <Text style={styles.exploreTitle}>Explore</Text>

//             {/* Search Row */}
//             <View style={styles.searchRow}>
//               <View style={styles.searchBox}>
//                 <Icon name="search" size={18} color="#64748b" />
//                 <TextInput
//                   style={styles.searchInput}
//                   placeholder="Search"
//                   placeholderTextColor="#64748b"
//                   value={search}
//                   onChangeText={setSearch}
//                 />
//               </View>

//               <TouchableOpacity style={styles.filterBtn}>
//                 <Text style={styles.filterText}>Filter</Text>
//               </TouchableOpacity>
//             </View>

//             {/* Community Cards List */}
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

//   /** SIDEBAR **/
//   sidebar: {
//     width: 60,
//     alignItems: "center",
//     paddingTop: 8,
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

//   /** CONTENT AREA **/
//   contentArea: {
//     flex: 1,
//   },
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
//   addBlipText: {
//     color: "#E5ECFF",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   /** EXPLORE CONTAINER **/
//   exploreContainer: {
//     flex: 1,
//     borderRadius: 28,
//     backgroundColor: "#0f1729",
//     paddingHorizontal: 16,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   exploreTitle: {
//     color: "#F9FAFF",
//     fontSize: 22,
//     fontWeight: "700",
//     marginBottom: 16,
//   },

//   /** SEARCH **/
//   searchRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
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

//   /** COMMUNITY CARDS **/
//   listContent: {
//     paddingBottom: 20,
//   },
//   cardWrapper: {
//     marginBottom: 16,
//   },
//   cardContainer: {
//     flexDirection: "row",
//     height: 100,
//     borderRadius: 20,
//     backgroundColor: "#1e293b",
//     overflow: "hidden",
//   },
//   cardLeft: {
//     flex: 1,
//     padding: 14,
//     justifyContent: "space-between",
//   },
//   cardHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#ec4899",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   avatarText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "700",
//   },
//   cardInfo: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   cardTitle: {
//     color: "#F9FAFF",
//     fontSize: 15,
//     fontWeight: "700",
//     marginBottom: 2,
//   },
//   cardSub: {
//     color: "#94a3b8",
//     fontSize: 11,
//   },
//   cardDesc: {
//     color: "#e2e8f0",
//     fontSize: 12,
//     lineHeight: 16,
//   },
//   cardRight: {
//     width: 120,
//     position: "relative",
//   },
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
//     backgroundColor: "rgba(15, 23, 42, 0.5)",
//   },
//   peopleBtn: {
//     width: 36,
//     height: 36,
//     borderRadius: 12,
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
    description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
    image:
      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    name: "Sushis City",
    members: 14879,
    type: "Community",
    description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    name: "Sushis City",
    members: 14879,
    type: "Community",
    description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    name: "Sushis City",
    members: 14879,
    type: "Community",
    description: "Night grind + neon vibes 👾 Chill gamers. Cozy lobbies 🔥",
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
        activeOpacity={0.95}
        style={styles.cardWrapper}
        onPress={() => navigation?.navigate("Channel", { communityId: item.id })}
      >
        <View style={styles.cardContainer}>
          <View style={styles.cardLeft}>
            <View style={styles.cardHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.name.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSub}>
                  {item.members.toLocaleString()} Members · {item.type}
                </Text>
              </View>
            </View>

            <Text style={styles.cardDesc} numberOfLines={2}>
              {item.description}
            </Text>
          </View>

          <View style={styles.cardRight}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.cardBg}
              imageStyle={styles.cardImage}
            >
              <View style={styles.cardOverlay} />
              <TouchableOpacity
                style={styles.peopleBtn}
                onPress={() => toggleJoin(item.id, item.name)}
              >
                <Icon name="users" size={18} color="#E5ECFF" />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      <View style={styles.mainContainer}>
        {/* LEFT SIDEBAR */}
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.sideButton}>
            <Icon name="compass" size={22} color="#E5ECFF" />
          </TouchableOpacity>

          {/* ✅ PLUS Button → Navigate to v12 */}
          <TouchableOpacity
            style={[styles.sideButton, styles.sideButtonActive]}
            onPress={() => navigation.navigate("Create_Nexus")}
          >
            <Icon name="plus" size={24} color="#E5ECFF" />
          </TouchableOpacity>
        </View>

        {/* RIGHT CONTENT AREA */}
        <View style={styles.contentArea}>
          <View style={styles.addBlipCard}>
            <Text style={styles.addBlipText}>Add Blips</Text>
          </View>

          <View style={styles.exploreContainer}>
            <Text style={styles.exploreTitle}>Explore</Text>

            <View style={styles.searchRow}>
              <View style={styles.searchBox}>
                <Icon name="search" size={18} color="#64748b" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0a0f1e",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },

  sidebar: {
    width: 60,
    alignItems: "center",
    paddingTop: 8,
    marginRight: 12,
  },
  sideButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#0f1729",
    borderWidth: 1,
    borderColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  sideButtonActive: {
    backgroundColor: "#1e40af",
    borderColor: "#2563eb",
  },

  contentArea: {
    flex: 1,
  },
  addBlipCard: {
    height: 100,
    borderRadius: 20,
    backgroundColor: "#0f1729",
    borderWidth: 1,
    borderColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  addBlipText: {
    color: "#E5ECFF",
    fontSize: 16,
    fontWeight: "600",
  },

  exploreContainer: {
    flex: 1,
    borderRadius: 28,
    backgroundColor: "#0f1729",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  exploreTitle: {
    color: "#F9FAFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchBox: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#F9FAFF",
    fontSize: 15,
  },
  filterBtn: {
    marginLeft: 12,
    paddingHorizontal: 16,
    height: 44,
    justifyContent: "center",
  },
  filterText: {
    color: "#3b82f6",
    fontSize: 15,
    fontWeight: "600",
  },

  listContent: {
    paddingBottom: 20,
  },
  cardWrapper: {
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: "row",
    height: 100,
    borderRadius: 20,
    backgroundColor: "#1e293b",
    overflow: "hidden",
  },
  cardLeft: {
    flex: 1,
    padding: 14,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ec4899",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  cardInfo: {
    marginLeft: 12,
    flex: 1,
  },
  cardTitle: {
    color: "#F9FAFF",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },
  cardSub: {
    color: "#94a3b8",
    fontSize: 11,
  },
  cardDesc: {
    color: "#e2e8f0",
    fontSize: 12,
    lineHeight: 16,
  },
  cardRight: {
    width: 120,
  },
  cardBg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
  cardImage: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.5)",
  },
  peopleBtn: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },
});
