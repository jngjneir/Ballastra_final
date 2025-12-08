// // ShareNexusScreen.js
// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TextInput,
// } from "react-native";

// const CONTACTS = [
//   { id: "1", name: "! 7 SUII _Notashish15", subtitle: "", color: "#f97373" },
//   { id: "2", name: "Lofi#8098", subtitle: "", color: "#6ee7b7" },
//   {
//     id: "3",
//     name: "Max gamer58588, Faysal_gaming143",
//     subtitle: "Devil Gaming",
//     color: "#a855f7",
//   },
//   { id: "4", name: "Gaming Piro Yug", subtitle: "", color: "#facc15" },
//   { id: "5", name: "SHERNI", subtitle: "", color: "#fb7185" },
// ];

// export default function ShareNexusScreen({ navigation }) {
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [search, setSearch] = useState("");

//   const toggleSelect = (id) => {
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const isSelected = (id) => selectedIds.includes(id);

//   const handleClose = () => {
//     navigation?.goBack?.();
//   };

//   const filteredContacts = CONTACTS.filter((c) =>
//     c.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="light-content" backgroundColor="#020617" />
//       <View style={styles.screen}>
//         {/* top fake sheet */}
//         <View style={styles.topCard}>
//           {/* close icon */}
//           <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
//             <Text style={styles.closeText}>✕</Text>
//           </TouchableOpacity>

//           <Text style={styles.shareTitle}>Share nexus link</Text>

//           {/* avatar */}
//           <View style={styles.avatarWrapper}>
//             <View style={styles.avatarOuter}>
//               {/* here you can replace with <Image /> */}
//               <View style={styles.avatarInner} />
//             </View>
//           </View>
//           <Text style={styles.avatarName}>Shusshi Clean</Text>

//           {/* share icons row */}
//           <View style={styles.shareRow}>
//             <View style={[styles.shareIcon, { backgroundColor: "#22c55e" }]}>
//               <Text style={styles.shareIconText}>WA</Text>
//             </View>
//             <View style={[styles.shareIcon, { backgroundColor: "#020617" }]}>
//               <Text style={styles.shareIconText}>🔗</Text>
//             </View>
//             <View style={[styles.shareIcon, { backgroundColor: "#22c55e" }]}>
//               <Text style={styles.shareIconText}>SMS</Text>
//             </View>
//             <View style={[styles.shareIcon, { backgroundColor: "#ffffff" }]}>
//               <Text style={[styles.shareIconText, { color: "#0f172a" }]}>
//                 m
//               </Text>
//             </View>
//             <View style={[styles.shareIcon, { backgroundColor: "#2563eb" }]}>
//               <Text style={styles.shareIconText}>f</Text>
//             </View>
//             <View style={[styles.shareIcon, { backgroundColor: "#020617" }]}>
//               <Text style={styles.shareIconText}>✉</Text>
//             </View>
//           </View>

//           {/* search bar */}
//           <View style={styles.searchContainer}>
//             <TextInput
//               value={search}
//               onChangeText={setSearch}
//               placeholder="Search"
//               placeholderTextColor="#64748b"
//               style={styles.searchInput}
//             />
//           </View>
//         </View>

//         {/* bottom list card */}
//         <View style={styles.listCard}>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             {filteredContacts.map((item) => (
//               <TouchableOpacity
//                 key={item.id}
//                 style={styles.contactRow}
//                 activeOpacity={0.8}
//                 onPress={() => toggleSelect(item.id)}
//               >
//                 {/* avatar circle */}
//                 <View style={[styles.contactAvatar, { backgroundColor: item.color }]}>
//                   <Text style={styles.contactAvatarText}>
//                     {item.name.charAt(0).toUpperCase()}
//                   </Text>
//                 </View>

//                 {/* text */}
//                 <View style={styles.contactTextWrapper}>
//                   <Text style={styles.contactName} numberOfLines={1}>
//                     {item.name}
//                   </Text>
//                   {item.subtitle ? (
//                     <Text style={styles.contactSubtitle} numberOfLines={1}>
//                       {item.subtitle}
//                     </Text>
//                   ) : null}
//                 </View>

//                 {/* right side indicator */}
//                 <View
//                   style={[
//                     styles.sendPill,
//                     isSelected(item.id) && styles.sendPillSelected,
//                   ]}
//                 >
//                   {isSelected(item.id) ? (
//                     <>
//                       <Text style={styles.sendPillTextSelected}>Selected</Text>
//                       <Text style={styles.sendPillIcon}>✓</Text>
//                     </>
//                   ) : (
//                     <Text style={styles.sendPillText}>Send</Text>
//                   )}
//                 </View>
//               </TouchableOpacity>
//             ))}

//             <View style={{ height: 40 }} />
//           </ScrollView>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const BG = "#020617";
// const CARD = "#020819";
// const BORDER = "#1f2937";

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: BG,
//   },
//   screen: {
//     flex: 1,
//     backgroundColor: BG,
//   },
//   topCard: {
//     marginHorizontal: 16,
//     marginTop: 8,
//     paddingTop: 16,
//     paddingBottom: 18,
//     borderRadius: 28,
//     backgroundColor: CARD,
//     alignItems: "center",
//     shadowOpacity: 0.45,
//     shadowRadius: 25,
//     shadowOffset: { width: 0, height: 18 },
//     elevation: 10,
//   },
//   closeButton: {
//     position: "absolute",
//     left: 18,
//     top: 18,
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   closeText: {
//     color: "#e5e7eb",
//     fontSize: 18,
//   },
//   shareTitle: {
//     color: "#e5e7eb",
//     fontSize: 16,
//     fontWeight: "500",
//   },
//   avatarWrapper: {
//     marginTop: 18,
//     marginBottom: 8,
//   },
//   avatarOuter: {
//     width: 84,
//     height: 84,
//     borderRadius: 42,
//     backgroundColor: "#22c55e",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   avatarInner: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: "#0f172a",
//   },
//   avatarName: {
//     color: "#e5e7eb",
//     fontSize: 15,
//     marginBottom: 18,
//   },
//   shareRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "88%",
//     marginBottom: 16,
//   },
//   shareIcon: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   shareIconText: {
//     color: "#e5e7eb",
//     fontSize: 14,
//     fontWeight: "600",
//   },
//   searchContainer: {
//     width: "88%",
//     marginTop: 6,
//   },
//   searchInput: {
//     height: 40,
//     borderRadius: 999,
//     paddingHorizontal: 16,
//     backgroundColor: "#020617",
//     borderWidth: 1,
//     borderColor: BORDER,
//     color: "#e5e7eb",
//     fontSize: 13,
//   },
//   listCard: {
//     flex: 1,
//     marginTop: 18,
//     marginHorizontal: 16,
//     borderRadius: 28,
//     backgroundColor: CARD,
//     paddingHorizontal: 14,
//     paddingTop: 10,
//   },
//   contactRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   contactAvatar: {
//     width: 42,
//     height: 42,
//     borderRadius: 21,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },
//   contactAvatarText: {
//     color: "#0f172a",
//     fontWeight: "700",
//   },
//   contactTextWrapper: {
//     flex: 1,
//     paddingRight: 8,
//   },
//   contactName: {
//     color: "#e5e7eb",
//     fontSize: 14,
//   },
//   contactSubtitle: {
//     color: "#9ca3af",
//     fontSize: 11,
//     marginTop: 2,
//   },
//   sendPill: {
//     minWidth: 64,
//     height: 26,
//     borderRadius: 13,
//     borderWidth: 1,
//     borderColor: BORDER,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 10,
//   },
//   sendPillSelected: {
//     backgroundColor: "#0f172a",
//     borderColor: "#22c55e",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   sendPillText: {
//     color: "#94a3b8",
//     fontSize: 11,
//   },
//   sendPillTextSelected: {
//     color: "#bbf7d0",
//     fontSize: 11,
//     marginRight: 4,
//   },
//   sendPillIcon: {
//     color: "#4ade80",
//     fontSize: 13,
//   },
// });
// ShareNexusScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
} from "react-native";

const CONTACTS = [
  { id: "1", name: "! 7 SUII _Notashish15", subtitle: "", color: "#f97373" },
  { id: "2", name: "Lofi#8098", subtitle: "", color: "#6ee7b7" },
  {
    id: "3",
    name: "Max gamer58588, Faysal_gaming143",
    subtitle: "Devil Gaming",
    color: "#a855f7",
  },
  { id: "4", name: "Gaming Piro Yug", subtitle: "", color: "#facc15" },
  { id: "5", name: "SHERNI", subtitle: "", color: "#fb7185" },
];

export default function ShareNexusScreen({ navigation }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selectedIds.includes(id);

  const handleClose = () => {
    navigation.navigate("CommunityDetails"); 
  };

  const filteredContacts = CONTACTS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#020617" />
      <View style={styles.screen}>
        {/* top card */}
        <View style={styles.topCard}>

          {/* Close */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.shareTitle}>Share nexus link</Text>

          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarOuter}>
              <View style={styles.avatarInner} />
            </View>
          </View>
          <Text style={styles.avatarName}>Shusshi Clean</Text>

          {/* Share icons */}
          <View style={styles.shareRow}>
            <View style={[styles.shareIcon, { backgroundColor: "#22c55e" }]}>
              <Text style={styles.shareIconText}>WA</Text>
            </View>
            <View style={[styles.shareIcon, { backgroundColor: "#020617" }]}>
              <Text style={styles.shareIconText}>🔗</Text>
            </View>
            <View style={[styles.shareIcon, { backgroundColor: "#22c55e" }]}>
              <Text style={styles.shareIconText}>SMS</Text>
            </View>
            <View style={[styles.shareIcon, { backgroundColor: "#ffffff" }]}>
              <Text style={[styles.shareIconText, { color: "#0f172a" }]}>m</Text>
            </View>
            <View style={[styles.shareIcon, { backgroundColor: "#2563eb" }]}>
              <Text style={styles.shareIconText}>f</Text>
            </View>
            <View style={[styles.shareIcon, { backgroundColor: "#020617" }]}>
              <Text style={styles.shareIconText}>✉</Text>
            </View>
          </View>

          {/* Search */}
          <View style={styles.searchContainer}>
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search"
              placeholderTextColor="#64748b"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* List Card */}
        <View style={styles.listCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredContacts.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.contactRow}
                activeOpacity={0.8}
                onPress={() => toggleSelect(item.id)}
              >
                <View style={[styles.contactAvatar, { backgroundColor: item.color }]}>
                  <Text style={styles.contactAvatarText}>
                    {item.name.charAt(0).toUpperCase()}
                  </Text>
                </View>

                <View style={styles.contactTextWrapper}>
                  <Text style={styles.contactName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  {item.subtitle ? (
                    <Text style={styles.contactSubtitle} numberOfLines={1}>
                      {item.subtitle}
                    </Text>
                  ) : null}
                </View>

                <View style={[styles.sendPill, isSelected(item.id) && styles.sendPillSelected]}>
                  {isSelected(item.id) ? (
                    <>
                      <Text style={styles.sendPillTextSelected}>Selected</Text>
                      <Text style={styles.sendPillIcon}>✓</Text>
                    </>
                  ) : (
                    <Text style={styles.sendPillText}>Send</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
            <View style={{ height: 40 }} />
          </ScrollView>
        </View>

        {/* ⭐ Bottom SEND Button */}
        {selectedIds.length > 0 && (
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send ({selectedIds.length})</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const BG = "#020617";
const CARD = "#020819";
const BORDER = "#1f2937";

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: BG },
  screen: { flex: 1, backgroundColor: BG },
  topCard: {
    marginHorizontal: 16,
    marginTop: 8,
    paddingTop: 16,
    paddingBottom: 18,
    borderRadius: 28,
    backgroundColor: CARD,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    left: 18,
    top: 18,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: { color: "#e5e7eb", fontSize: 18 },
  shareTitle: { color: "#e5e7eb", fontSize: 16, fontWeight: "500" },
  avatarWrapper: { marginTop: 18, marginBottom: 8 },
  avatarOuter: {
    width: 84, height: 84, borderRadius: 42,
    backgroundColor: "#22c55e", justifyContent: "center", alignItems: "center",
  },
  avatarInner: {
    width: 70, height: 70, borderRadius: 35, backgroundColor: "#0f172a",
  },
  avatarName: { color: "#e5e7eb", fontSize: 15, marginBottom: 18 },
  shareRow: {
    flexDirection: "row", alignItems: "center",
    justifyContent: "space-between", width: "88%", marginBottom: 16,
  },
  shareIcon: {
    width: 44, height: 44, borderRadius: 22,
    justifyContent: "center", alignItems: "center",
  },
  shareIconText: { color: "#e5e7eb", fontSize: 14, fontWeight: "600" },
  searchContainer: { width: "88%", marginTop: 6 },
  searchInput: {
    height: 40, borderRadius: 999, paddingHorizontal: 16,
    backgroundColor: "#020617", borderWidth: 1, borderColor: BORDER,
    color: "#e5e7eb", fontSize: 13,
  },
  listCard: {
    flex: 1, marginTop: 18, marginHorizontal: 16,
    borderRadius: 28, backgroundColor: CARD, paddingHorizontal: 14, paddingTop: 10,
  },
  contactRow: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  contactAvatar: {
    width: 42, height: 42, borderRadius: 21,
    justifyContent: "center", alignItems: "center", marginRight: 12,
  },
  contactAvatarText: { color: "#0f172a", fontWeight: "700" },
  contactTextWrapper: { flex: 1, paddingRight: 8 },
  contactName: { color: "#e5e7eb", fontSize: 14 },
  contactSubtitle: { color: "#9ca3af", fontSize: 11, marginTop: 2 },
  sendPill: {
    minWidth: 64, height: 26, borderRadius: 13, borderWidth: 1,
    borderColor: BORDER, justifyContent: "center", alignItems: "center",
    paddingHorizontal: 10,
  },
  sendPillSelected: {
    backgroundColor: "#0f172a", borderColor: "#22c55e",
    flexDirection: "row", justifyContent: "space-between",
  },
  sendPillText: { color: "#94a3b8", fontSize: 11 },
  sendPillTextSelected: { color: "#bbf7d0", fontSize: 11, marginRight: 4 },
  sendPillIcon: { color: "#4ade80", fontSize: 13 },

  // ⭐ new send bottom button
  sendButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
  },
  sendButtonText: { color: "#000", fontSize: 16, fontWeight: "700" },
});
