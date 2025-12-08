
// import React from 'react';
// import { View } from 'react-native';
// import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// /* Screens */
// import Logoscreen from '../screens/Logoscreen';
// import v2 from '../screens/v2';
// import v3 from '../screens/v3';
// import v4 from '../screens/v4';
// import signin_up from '../screens/signin_up';
// import Loginscreen from '../screens/Loginscreen';
// import CreateAccount from '../screens/CreateAccount';
// import HomeScreen from '../screens/HomeScreen';
// import ChannelScreen from '../screens/ChannelScreen';
// import ChatScreen from '../screens/ChatScreen';
// import Create_Nexus from '../screens/Create_Nexus';
// import My_Own_Nexus from '../screens/My_Own_Nexus';
// import Build_Your_Nexus from '../screens/Build_Your_Nexus';
// import Share_Profile from '../screens/Share_Profile'; 
// /* Footer Component */
// import Footer from '../components/Footer';

// const Stack = createStackNavigator();

// /* Wrapper — add footer to selected screens */
// const withFooter = (ScreenComponent) => {
//   return (props) => (
//     <View style={{ flex: 1 }}>
//       <ScreenComponent {...props} />
//       <Footer />
//     </View>
//   );
// };

// /* Footer-enabled Screens */
// const HomeWithFooter = withFooter(HomeScreen);
// const ChannelWithFooter = withFooter(ChannelScreen);
// const ChatWithFooter = withFooter(ChatScreen);

// export default function RootNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: true,
//         gestureDirection: 'horizontal',
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//       }}
//     >

//       {/* Screens WITHOUT Footer */}
//       <Stack.Screen name="Logoscreen" component={Logoscreen} />
//       <Stack.Screen name="v2" component={v2} />
//       <Stack.Screen name="v3" component={v3} />
//       <Stack.Screen name="v4" component={v4} />
//       <Stack.Screen name="signin_up" component={signin_up} />
//       <Stack.Screen name="Loginscreen" component={Loginscreen} />
//       <Stack.Screen name="CreateAccount" component={CreateAccount} />

//       {/* ⭐ Your Create_Nexus Screen */}
//       <Stack.Screen name="Create_Nexus" component={Create_Nexus} />
//   <Stack.Screen name="My_Own_Nexus" component={My_Own_Nexus} />
//       <Stack.Screen name="Build_Your_Nexus" component={Build_Your_Nexus} />
//         <Stack.Screen name="Share_Profile" component={Share_Profile} />

//       {/* Screens WITH Footer */}
//       <Stack.Screen name="Home" component={HomeWithFooter} />
//       <Stack.Screen name="Channel" component={ChannelWithFooter} />
//       <Stack.Screen name="Chat" component={ChatWithFooter} />
      

//     </Stack.Navigator>
//   );
// }


// import React from 'react';
// import { View } from 'react-native';
// import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// /* Screens */
// import Logoscreen from '../screens/Logoscreen';
// import v2 from '../screens/v2';
// import v3 from '../screens/v3';
// import v4 from '../screens/v4';
// import signin_up from '../screens/signin_up';
// import Loginscreen from '../screens/Loginscreen';
// import CreateAccount from '../screens/CreateAccount';
// import HomeScreen from '../screens/HomeScreen';
// import ChannelScreen from '../screens/ChannelScreen';
// import ChatScreen from '../screens/ChatScreen';
// import Create_Nexus from '../screens/Create_Nexus';
// import My_Own_Nexus from '../screens/My_Own_Nexus';
// import Build_Your_Nexus from '../screens/Build_Your_Nexus';
// import Share_Profile from '../screens/Share_Profile';
// import CommunityDetails from '../screens/CommunityDetails';   // ⭐ New Screen Import

// /* Footer Component */
// import Footer from '../components/Footer';

// const Stack = createStackNavigator();

// /* Wrapper — add footer to selected screens */
// const withFooter = (ScreenComponent) => {
//   return (props) => (
//     <View style={{ flex: 1 }}>
//       <ScreenComponent {...props} />
//       <Footer />
//     </View>
//   );
// };

// /* Footer-enabled Screens */
// const HomeWithFooter = withFooter(HomeScreen);
// const ChannelWithFooter = withFooter(ChannelScreen);
// const ChatWithFooter = withFooter(ChatScreen);
// const CommunityWithFooter = withFooter(CommunityDetails);   // ⭐ Added here

// export default function RootNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: true,
//         gestureDirection: 'horizontal',
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//       }}
//     >
//       {/* Screens WITHOUT Footer */}
//       <Stack.Screen name="Logoscreen" component={Logoscreen} />
//       <Stack.Screen name="v2" component={v2} />
//       <Stack.Screen name="v3" component={v3} />
//       <Stack.Screen name="v4" component={v4} />
//       <Stack.Screen name="signin_up" component={signin_up} />
//       <Stack.Screen name="Loginscreen" component={Loginscreen} />
//       <Stack.Screen name="CreateAccount" component={CreateAccount} />

//       <Stack.Screen name="Create_Nexus" component={Create_Nexus} />
//       <Stack.Screen name="My_Own_Nexus" component={My_Own_Nexus} />
//       <Stack.Screen name="Build_Your_Nexus" component={Build_Your_Nexus} />
//       <Stack.Screen name="Share_Profile" component={Share_Profile} />

//       {/* Screens WITH Footer */}
//       <Stack.Screen name="Home" component={HomeWithFooter} />
//       <Stack.Screen name="Channel" component={ChannelWithFooter} />
//       <Stack.Screen name="Chat" component={ChatWithFooter} />
//       <Stack.Screen name="CommunityDetails" component={CommunityWithFooter} /> {/* ⭐ */}
//     </Stack.Navigator>
//   );
// }
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

/* Screens */
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
import Create_Nexus from '../screens/Create_Nexus';
import My_Own_Nexus from '../screens/My_Own_Nexus';
import Build_Your_Nexus from '../screens/Build_Your_Nexus';
import Share_Profile from '../screens/Share_Profile';
import CommunityDetails from '../screens/CommunityDetails';   
import Footer from '../components/Footer';

const Stack = createStackNavigator();

const withFooter = (ScreenComponent) => {
  return (props) => (
    <View style={{ flex: 1 }}>
      <ScreenComponent {...props} />
      <Footer />
    </View>
  );
};

const HomeWithFooter = withFooter(HomeScreen);
const ChannelWithFooter = withFooter(ChannelScreen);
const ChatWithFooter = withFooter(ChatScreen);
const CommunityWithFooter = withFooter(CommunityDetails);

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Logoscreen" component={Logoscreen} />
      <Stack.Screen name="v2" component={v2} />
      <Stack.Screen name="v3" component={v3} />
      <Stack.Screen name="v4" component={v4} />
      <Stack.Screen name="signin_up" component={signin_up} />
      <Stack.Screen name="Loginscreen" component={Loginscreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />

      <Stack.Screen name="Create_Nexus" component={Create_Nexus} />
      <Stack.Screen name="My_Own_Nexus" component={My_Own_Nexus} />
      <Stack.Screen name="Build_Your_Nexus" component={Build_Your_Nexus} />
      <Stack.Screen name="Share_Profile" component={Share_Profile} />

      <Stack.Screen name="Home" component={HomeWithFooter} />
      <Stack.Screen name="Channel" component={ChannelWithFooter} />
      <Stack.Screen name="Chat" component={ChatWithFooter} />
      <Stack.Screen name="CommunityDetails" component={CommunityWithFooter} />
    </Stack.Navigator>
  );
}
