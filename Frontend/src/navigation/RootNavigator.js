// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Logoscreen from '../screens/Logoscreen'; 
// import  v2 from '../screens/v2';
// import LoginScreen from '../screens/LoginScreen';
// import SignupScreen from '../screens/SignupScreen';
// import HomeScreen from '../screens/HomeScreen';
// import ChannelScreen from '../screens/ChannelScreen';
// import ChatScreen from '../screens/ChatScreen';

// const Stack = createStackNavigator();

// export default function RootNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
// <Stack.Screen name="Logoscreen" component={Logoscreen} />
// <Stack.Screen name="v2" component={v2} />

//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Channel" component={ChannelScreen} />
//       <Stack.Screen name="Chat" component={ChatScreen} />
//     </Stack.Navigator>
//   );
// }


import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Logoscreen from '../screens/Logoscreen'; 
import v2 from '../screens/v2';
import v3 from '../screens/v3';
import v4 from '../screens/v4';
import signin_up from '../screens/signin_up';
import Loginscreen from '../screens/Loginscreen';
import CreateAccount from '../screens/CreateAccount';
import HomeScreen from '../screens/HomeScreen';
import ChannelScreen from '../screens/ChannelScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true, // 👈 allows swipe gestures
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 👈 smooth slide transition
      }}
    >
      <Stack.Screen name="Logoscreen" component={Logoscreen} />
      <Stack.Screen name="v2" component={v2} />
      <Stack.Screen name="v3" component={v3} />
      <Stack.Screen name="v4" component={v4} />
      <Stack.Screen name="signin_up" component={signin_up} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
  <Stack.Screen name="Loginscreen" component={Loginscreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} /> */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Channel" component={ChannelScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
