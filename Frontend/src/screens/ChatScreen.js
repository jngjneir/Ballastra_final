// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from 'react-native';

// export default function ChatScreen({ route }) {
//   const { channel } = route.params || {};
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     const newMessage = { id: Date.now().toString(), text: input };
//     setMessages((prev) => [...prev, newMessage]);
//     setInput('');
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.container}>
//           <Text style={styles.header}>#{channel}</Text>

//           <FlatList
//             data={messages}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.messageBubble}>
//                 <Text style={styles.messageText}>{item.text}</Text>
//               </View>
//             )}
//             contentContainerStyle={{ padding: 16 }}
//           />

//           <View style={styles.inputContainer}>
//             <TextInput
//               value={input}
//               onChangeText={setInput}
//               placeholder="Type a message..."
//               style={styles.input}
//             />
//             <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
//               <Text style={styles.sendText}>Send</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 16,
//     backgroundColor: '#0a84ff',
//     color: '#fff',
//   },
//   messageBubble: {
//     backgroundColor: '#f0f0f0',
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 10,
//     alignSelf: 'flex-start',
//   },
//   messageText: { fontSize: 16 },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#0a84ff',
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     borderRadius: 25,
//   },
//   sendText: { color: '#fff', fontWeight: 'bold' },
// });
// src/screens/ChatScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatScreen({ route }) {
  const { channel } = route.params || {};
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), text: input }]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.header}>{channel}</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  header: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  messageBubble: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    alignSelf: 'flex-start',
  },
  messageText: { color: '#fff', fontSize: 15 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
  },
});
