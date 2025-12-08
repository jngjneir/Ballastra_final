
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   StatusBar,
//   Image,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// export default function BuildNexusScreen({ navigation }) {
//   const [selectedEmoji, setSelectedEmoji] = useState("🤠");
//   const [avatarImage, setAvatarImage] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [nexusName, setNexusName] = useState("");

//   const EMOJIS = ["🤠","😎","👑","🔥","⚡","🌟","🚀","🐉","🎯","🌐","🎮","🧠","🤖","💎","💫","🍀","🏆","🐺","🦁","🐯"];

//   // Pick from gallery
//   const pickFromGallery = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//       allowsEditing: true,
//     });

//     if (!result.canceled) {
//       setAvatarImage(result.assets[0].uri);
//       setModalVisible(false);
//     }
//   };

//   const handleCreateNexus = () => {
//     if (!nexusName.trim()) return;
//     navigation.navigate("Home", { name: nexusName, icon: selectedEmoji, image: avatarImage });
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#050B18" />

//       <Text style={styles.title}>Build Your Nexus</Text>
//       <Text style={styles.subtitle}>
//         Your Nexus is your space. Shape it, name it, and {"\n"}make it yours.
//       </Text>

//       {/* Avatar */}
//       <TouchableOpacity style={styles.emojiCircle} onPress={() => setModalVisible(true)}>
//         {avatarImage ? (
//           <Image source={{ uri: avatarImage }} style={{ width: 90, height: 90, borderRadius: 50 }} />
//         ) : (
//           <Text style={styles.emoji}>{selectedEmoji}</Text>
//         )}
//       </TouchableOpacity>

//       <Text style={styles.chooseIcon}>Choose an Icon</Text>

//       {/* Input */}
//       <Text style={styles.label}>Nexus Name</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Choose your nexus name"
//         placeholderTextColor="#8b93b6"
//         value={nexusName}
//         onChangeText={setNexusName}
//       />

//       <Text style={styles.guideline}>
//         By creating a nexus, you agree to ballastra. <Text style={styles.link}>Community Guidelines.</Text>
//       </Text>

//       {/* Create button */}
//       <TouchableOpacity style={styles.createBtn} onPress={handleCreateNexus}>
//         <Text style={styles.createText}>Create Nexus</Text>
//       </TouchableOpacity>

//       {/* Modal */}
//       <Modal visible={modalVisible} animationType="slide" transparent>
//         <View style={styles.modalBg}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalTitle}>Choose an Icon</Text>

//             {/* Gallery Picker */}
//             <TouchableOpacity style={styles.galleryBtn} onPress={pickFromGallery}>
//               <Text style={{ color: "#fff", fontSize: 14 }}>Add from Gallery</Text>
//             </TouchableOpacity>

//             <FlatList
//               data={EMOJIS}
//               numColumns={5}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.emojiItem}
//                   onPress={() => {
//                     setSelectedEmoji(item);
//                     setAvatarImage(null);
//                     setModalVisible(false);
//                   }}
//                 >
//                   <Text style={styles.emojiSelect}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//             />

//             <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{ flex:1, backgroundColor:"#050B18", paddingHorizontal:28, paddingTop:80 },
//   title:{ color:"#fff", fontSize:26, fontWeight:"700", textAlign:"center" },
//   subtitle:{ color:"#A7AFCB", fontSize:14, textAlign:"center", marginTop:10, marginBottom:30 },
//   emojiCircle:{ width:100, height:100, borderRadius:60, backgroundColor:"#7fffc3", alignSelf:"center", justifyContent:"center", alignItems:"center" },
//   emoji:{ fontSize:55 },
//   chooseIcon:{ color:"#A7AFCB", textAlign:"center", marginTop:10, marginBottom:40 },
//   label:{ color:"#fff", fontSize:15, marginBottom:8 },
//   input:{ backgroundColor:"#0b1543", borderRadius:15, padding:15, color:"#fff", borderWidth:1, borderColor:"#1F2B4D" },
//   guideline:{ fontSize:11, color:"#A7AFCB", marginTop:10 },
//   link:{ color:"#4A80FF" },
//   createBtn:{ backgroundColor:"#1d3bff", paddingVertical:15, borderRadius:18, marginTop:40 },
//   createText:{ color:"#fff", textAlign:"center", fontSize:16, fontWeight:"600" },

//   // modal
//   modalBg:{ flex:1, backgroundColor:"rgba(0,0,0,0.6)", justifyContent:"center", alignItems:"center" },
//   modalBox:{ width:"85%", backgroundColor:"#0B0E1E", borderRadius:20, padding:20 },
//   modalTitle:{ color:"#fff", fontSize:18, fontWeight:"600", marginBottom:10, textAlign:"center" },
//   galleryBtn:{ backgroundColor:"#1d3bff", padding:10, borderRadius:12, alignItems:"center", marginBottom:15 },
//   emojiItem:{ flex:1, padding:10, alignItems:"center" },
//   emojiSelect:{ fontSize:28 },
//   closeBtn:{ marginTop:10, padding:10, backgroundColor:"#1F2B4D", borderRadius:10 },
//   closeText:{ color:"#fff", textAlign:"center", fontSize:14 },
// });
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   StatusBar,
//   Image,
//   ScrollView,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// export default function BuildNexusScreen({ navigation }) {
//   const [selectedEmoji, setSelectedEmoji] = useState("🤠");
//   const [avatarImage, setAvatarImage] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [nexusName, setNexusName] = useState("");

//   const EMOJIS = ["🤠","😎","👑","🔥","⚡","🌟","🚀","🐉","🎯","🌐","🎮","🧠","🤖","💎","💫","🍀","🏆","🐺","🦁","🐯"];

//   const pickFromGallery = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//       allowsEditing: true,
//     });

//     if (!result.canceled) {
//       setAvatarImage(result.assets[0].uri);
//       setModalVisible(false);
//     }
//   };

//   const handleCreateNexus = () => {
//     if (!nexusName.trim()) return;
//     navigation.navigate("Home", { name: nexusName, icon: selectedEmoji, image: avatarImage });
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0B1527" />

//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         <View style={styles.topSection}>
//           <Text style={styles.title}>Build Your Nexus</Text>
//           <Text style={styles.subtitle}>
//             Your Nexus is your space. Shape it, name it, and{"\n"}make it yours.
//           </Text>

//           {/* Avatar */}
//           <TouchableOpacity style={styles.emojiCircle} onPress={() => setModalVisible(true)}>
//             {avatarImage ? (
//               <Image source={{ uri: avatarImage }} style={styles.avatarImage} />
//             ) : (
//               <Text style={styles.emoji}>{selectedEmoji}</Text>
//             )}
//           </TouchableOpacity>

//           <Text style={styles.chooseIcon}>Choose an Icon</Text>

//           {/* Input */}
//           <Text style={styles.label}>Nexus Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Choose your nexus name"
//             placeholderTextColor="#6B7196"
//             value={nexusName}
//             onChangeText={setNexusName}
//           />

//           <Text style={styles.guideline}>
//             By creating a nexus, you agree to ballastra.{" "}
//             <Text style={styles.link}>Community Guidelines.</Text>
//           </Text>
//         </View>

//         {/* Create button */}
//         <TouchableOpacity 
//           style={[styles.createBtn, !nexusName.trim() && styles.createBtnDisabled]} 
//           onPress={handleCreateNexus}
//           disabled={!nexusName.trim()}
//         >
//           <Text style={styles.createText}>Create Nexus</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* Modal */}
//       <Modal visible={modalVisible} animationType="slide" transparent>
//         <View style={styles.modalBg}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalTitle}>Choose an Icon</Text>

//             {/* Gallery Picker */}
//             <TouchableOpacity style={styles.galleryBtn} onPress={pickFromGallery}>
//               <Text style={styles.galleryText}>📷 Add from Gallery</Text>
//             </TouchableOpacity>

//             <FlatList
//               data={EMOJIS}
//               numColumns={5}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.emojiItem}
//                   onPress={() => {
//                     setSelectedEmoji(item);
//                     setAvatarImage(null);
//                     setModalVisible(false);
//                   }}
//                 >
//                   <Text style={styles.emojiSelect}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//               contentContainerStyle={styles.emojiGrid}
//             />

//             <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0B1527",
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingHorizontal: 28,
//     paddingTop: 80,
//     paddingBottom: 40,
//     justifyContent: "space-between",
//   },
//   topSection: {
//     flex: 1,
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 28,
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 12,
//   },
//   subtitle: {
//     color: "#9BA3C1",
//     fontSize: 15,
//     textAlign: "center",
//     lineHeight: 22,
//     marginBottom: 48,
//   },
//   emojiCircle: {
//     width: 110,
//     height: 110,
//     borderRadius: 55,
//     backgroundColor: "#7FFFD4",
//     alignSelf: "center",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 14,
//   },
//   emoji: {
//     fontSize: 62,
//   },
//   avatarImage: {
//     width: 110,
//     height: 110,
//     borderRadius: 55,
//   },
//   chooseIcon: {
//     color: "#9BA3C1",
//     textAlign: "center",
//     fontSize: 15,
//     marginBottom: 60,
//   },
//   label: {
//     color: "#FFFFFF",
//     fontSize: 15,
//     fontWeight: "500",
//     marginBottom: 10,
//   },
//   input: {
//     backgroundColor: "#1E2B47",
//     borderRadius: 14,
//     padding: 18,
//     color: "#FFFFFF",
//     fontSize: 15,
//     borderWidth: 1,
//     borderColor: "#2A3852",
//   },
//   guideline: {
//     fontSize: 12,
//     color: "#9BA3C1",
//     marginTop: 14,
//     textAlign: "center",
//     lineHeight: 18,
//   },
//   link: {
//     color: "#5B8FF9",
//   },
//   createBtn: {
//     backgroundColor: "#2F4E9E",
//     paddingVertical: 18,
//     borderRadius: 14,
//     marginTop: 60,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   createBtnDisabled: {
//     opacity: 0.5,
//   },
//   createText: {
//     color: "#FFFFFF",
//     textAlign: "center",
//     fontSize: 17,
//     fontWeight: "600",
//   },

//   // Modal styles
//   modalBg: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.75)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalBox: {
//     width: "88%",
//     maxHeight: "70%",
//     backgroundColor: "#1E2B47",
//     borderRadius: 24,
//     padding: 24,
//   },
//   modalTitle: {
//     color: "#FFFFFF",
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   galleryBtn: {
//     backgroundColor: "#2F4E9E",
//     padding: 16,
//     borderRadius: 14,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   galleryText: {
//     color: "#FFFFFF",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   emojiGrid: {
//     paddingBottom: 10,
//   },
//   emojiItem: {
//     flex: 1,
//     padding: 12,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   emojiSelect: {
//     fontSize: 34,
//   },
//   closeBtn: {
//     marginTop: 16,
//     padding: 16,
//     backgroundColor: "#2A3852",
//     borderRadius: 14,
//   },
//   closeText: {
//     color: "#FFFFFF",
//     textAlign: "center",
//     fontSize: 15,
//     fontWeight: "600",
//   },
// });


import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function BuildNexusScreen({ navigation }) {
  const [selectedEmoji, setSelectedEmoji] = useState("🤠");
  const [avatarImage, setAvatarImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [nexusName, setNexusName] = useState("");

  const EMOJIS = ["🤠","😎","👑","🔥","⚡","🌟","🚀","🐉","🎯","🌐","🎮","🧠","🤖","💎","💫","🍀","🏆","🐺","🦁","🐯"];

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setAvatarImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleCreateNexus = () => {
    if (!nexusName.trim()) return;

    navigation.navigate("Share_Profile", {
      name: nexusName,
      icon: selectedEmoji,
      image: avatarImage,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B1527" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Build Your Nexus</Text>
        <Text style={styles.subtitle}>
          Your Nexus is your space. Shape it, name it, and{"\n"}make it yours.
        </Text>

        <TouchableOpacity style={styles.emojiCircle} onPress={() => setModalVisible(true)}>
          {avatarImage ? (
            <Image source={{ uri: avatarImage }} style={styles.avatarImage} />
          ) : (
            <Text style={styles.emoji}>{selectedEmoji}</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.chooseIcon}>Choose an Icon</Text>

        <Text style={styles.label}>Nexus Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Choose your nexus name"
          placeholderTextColor="#6B7196"
          value={nexusName}
          onChangeText={setNexusName}
        />

        <Text style={styles.guideline}>
          By creating a nexus, you agree to ballastra.{" "}
          <Text style={styles.link}>Community Guidelines.</Text>
        </Text>

        {/* Create Button */}
        <TouchableOpacity 
          style={[styles.createBtn, !nexusName.trim() && styles.createBtnDisabled]} 
          onPress={handleCreateNexus}
          disabled={!nexusName.trim()}
        >
          <Text style={styles.createText}>Create Nexus</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Emoji / Gallery Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Choose an Icon</Text>

            <TouchableOpacity style={styles.galleryBtn} onPress={pickFromGallery}>
              <Text style={styles.galleryText}>📷 Add from Gallery</Text>
            </TouchableOpacity>

            <FlatList
              data={EMOJIS}
              numColumns={5}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.emojiItem}
                  onPress={() => {
                    setSelectedEmoji(item);
                    setAvatarImage(null);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.emojiSelect}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.emojiGrid}
            />

            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B1527" },
  scrollContent: { flexGrow: 1, paddingHorizontal: 28, paddingTop: 70, paddingBottom: 40 },
  title: { color: "#FFFFFF", fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 12 },
  subtitle: { color: "#9BA3C1", fontSize: 15, textAlign: "center", lineHeight: 22, marginBottom: 48 },
  emojiCircle: {
    width: 110, height: 110, borderRadius: 55, backgroundColor: "#7FFFD4",
    alignSelf: "center", justifyContent: "center", alignItems: "center", marginBottom: 14,
  },
  emoji: { fontSize: 62 },
  avatarImage: { width: 110, height: 110, borderRadius: 55 },
  chooseIcon: { color: "#9BA3C1", textAlign: "center", fontSize: 15, marginBottom: 60 },
  label: { color: "#FFFFFF", fontSize: 15, fontWeight: "500", marginBottom: 10 },
  input: {
    backgroundColor: "#1E2B47", borderRadius: 14, padding: 18, color: "#FFFFFF",
    fontSize: 15, borderWidth: 1, borderColor: "#2A3852",
  },
  guideline: { fontSize: 12, color: "#9BA3C1", marginTop: 14, textAlign: "center", lineHeight: 18 },
  link: { color: "#5B8FF9" },
  createBtn: {
    backgroundColor: "#2F4E9E", paddingVertical: 18, borderRadius: 14, marginTop: 60,
    shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8,
  },
  createBtnDisabled: { opacity: 0.5 },
  createText: { color: "#FFFFFF", textAlign: "center", fontSize: 17, fontWeight: "600" },
  modalBg: {
    flex: 1, backgroundColor: "rgba(0,0,0,0.75)", justifyContent: "center", alignItems: "center",
  },
  modalBox: { width: "88%", maxHeight: "70%", backgroundColor: "#1E2B47", borderRadius: 24, padding: 24 },
  modalTitle: { color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginBottom: 20, textAlign: "center" },
  galleryBtn: { backgroundColor: "#2F4E9E", padding: 16, borderRadius: 14, alignItems: "center", marginBottom: 20 },
  galleryText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },
  emojiItem: { flex: 1, padding: 12, alignItems: "center", justifyContent: "center" },
  emojiSelect: { fontSize: 34 },
  closeBtn: { marginTop: 16, padding: 16, backgroundColor: "#2A3852", borderRadius: 14 },
  closeText: { color: "#FFFFFF", textAlign: "center", fontSize: 15, fontWeight: "600" },
});
