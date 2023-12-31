import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Color } from "./GlobalStyles";

import Home from "./screens/Home";
import Account from "./screens/Account";
import Splash from "./screens/Splash";
import Schedule from "./screens/Schedule";
import NextSplash from "./screens/NextSplash";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Info from "./screens/Infomation";
import PaymentMethod from "./screens/Payment";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SplashStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="NextSplash" component={NextSplash} />
      <Stack.Screen
        name="Home"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Payment" component={PaymentMethod} />
    </Stack.Navigator>
  )
}

const ScheduleStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Schedule"
      screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
  )
}

const AccountStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Infomation" component={Info} />
    </Stack.Navigator>
  )
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: Color.slateblue, headerShown: false }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleStack"
        component={ScheduleStack}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const BottomTabStaff = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: Color.slateblue, headerShown: false }}
    >
      <Tab.Screen
        name="ScheduleStack"
        component={ScheduleStack}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  const [isFirstRun, setFirstRun] = useState(null);
  const [fontsLoaded, error] = useFonts({
    "Nunito Sans_regular": require("./assets/fonts/Nunito_Sans_regular.ttf"),
    "Nunito Sans_semibold": require("./assets/fonts/Nunito_Sans_semibold.ttf"),
    "Nunito Sans_bold": require("./assets/fonts/Nunito_Sans_bold.ttf"),
    "Nunito Sans_extrabold": require("./assets/fonts/Nunito_Sans_extrabold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    "Roboto Mono_medium": require("./assets/fonts/Roboto_Mono_medium.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Ubuntu_regular: require("./assets/fonts/Ubuntu_regular.ttf"),
    Ubuntu_bold: require("./assets/fonts/Ubuntu_bold.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Nunito_regular: require("./assets/fonts/Nunito_regular.ttf"),
  });
  

  useEffect(() => {
    const checkFirstRun = async () => {
      const isFirstRunValue = await AsyncStorage.getItem("isFirstRun");
      if (isFirstRunValue) {
        setFirstRun(false);
      } else {
        setFirstRun(true);
        await AsyncStorage.setItem("isFirstRun", "false");
      }
    };
    checkFirstRun();
  }, []);

  if ((!fontsLoaded && !error) || isFirstRun === null) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {isFirstRun ? (
          <SplashStack />
        ) :(
          <BottomTab />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
