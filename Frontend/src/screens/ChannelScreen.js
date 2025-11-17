// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function ChannelScreen({ route, navigation }) {
//   const { channel } = route.params || {};

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>#{channel}</Text>

//       <TouchableOpacity
//         style={styles.chatButton}
//         onPress={() => navigation.navigate('Chat', { channel })}
//       >
//         <Text style={styles.chatText}>Go to Chat</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
//   chatButton: { backgroundColor: '#0a84ff', padding: 15, borderRadius: 10 },
//   chatText: { color: '#fff', fontWeight: '600' },
// });
// src/screens/ChannelScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const channels = [
  { id: '1', name: 'General Chat', icon: 'chatbubbles-outline' },
  { id: '2', name: 'Announcements', icon: 'megaphone-outline' },
  { id: '3', name: 'Projects', icon: 'folder-outline' },
  { id: '4', name: 'Support', icon: 'help-circle-outline' },
];

export default function ChannelScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Channel</Text>
      <FlatList
        data={channels}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.channelCard}
            onPress={() => navigation.navigate('Chat', { channel: item.name })}
          >
            <Ionicons name={item.icon} size={22} color="#007AFF" style={{ marginRight: 10 }} />
            <Text style={styles.channelText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 20 },
  channelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  channelText: { fontSize: 16, fontWeight: '500', color: '#333' },
});
