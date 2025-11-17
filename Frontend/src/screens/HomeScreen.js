// // import React from 'react';
// // import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// // import { useAuth } from '../context/AuthContext';

// // const dummyNexus = ['Tech', 'Design', 'Sports', 'Gaming'];

// // export default function HomeScreen({ navigation }) {
// //   const { user, logout } = useAuth();

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
// //         <Text style={styles.name}>{user?.name}</Text>
// //         <TouchableOpacity onPress={logout}>
// //           <Text style={styles.logout}>Logout</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <FlatList
// //         data={dummyNexus}
// //         horizontal
// //         renderItem={({ item }) => (
// //           <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Channel', { channel: item })}>
// //             <Text style={styles.cardText}>{item}</Text>
// //           </TouchableOpacity>
// //         )}
// //         keyExtractor={(item) => item}
// //         showsHorizontalScrollIndicator={false}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
// //   header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 },
// //   avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
// //   name: { flex: 1, fontSize: 18, fontWeight: '600' },
// //   logout: { color: 'red' },
// //   card: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 10, marginHorizontal: 10, marginTop: 20 },
// //   cardText: { fontSize: 16 },
// // });
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import { useAuth } from '../context/AuthContext';

// const dummyNexus = ['Tech', 'Design', 'Sports', 'Gaming'];

// export default function HomeScreen({ navigation }) {
//   const { user, logout } = useAuth();

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         {/* Placeholder Avatar Circle */}
//         <View style={styles.placeholderAvatar} />
//         <Text style={styles.name}>{user?.name || 'User'}</Text>
//         <TouchableOpacity onPress={logout}>
//           <Text style={styles.logout}>Logout</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={dummyNexus}
//         horizontal
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('Channel', { channel: item })}
//           >
//             <Text style={styles.cardText}>{item}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item}
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
//   header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 },
//   placeholderAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#ccc',
//     marginRight: 10,
//   },
//   name: { flex: 1, fontSize: 18, fontWeight: '600' },
//   logout: { color: 'red' },
//   card: {
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     borderRadius: 10,
//     marginHorizontal: 10,
//     marginTop: 20,
//   },
//   cardText: { fontSize: 16 },
// });
// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const nexusList = [
  { id: '1', name: 'Tech Nexus' },
  { id: '2', name: 'Design Hub' },
  { id: '3', name: 'AI Club' },
  { id: '4', name: 'React Devs' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header with Avatar */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Hello, Amruta 👋</Text>
      </View>

      {/* Horizontal Nexus List */}
      <Text style={styles.sectionTitle}>Your Nexuses</Text>
      <FlatList
        horizontal
        data={nexusList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.nexusCard}
            onPress={() => navigation.navigate('Channel')}
          >
            <Text style={styles.nexusText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  username: { fontSize: 18, fontWeight: '600' },
  sectionTitle: { fontSize: 16, fontWeight: '500', marginBottom: 10 },
  nexusCard: {
    backgroundColor: '#f3f4f6',
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nexusText: { fontWeight: '500', color: '#333' },
});
