import { View, Text } from "react-native";
import React from "react";
import { Color, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const _layout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#AB8BFF",
        tabBarInactiveTintColor: "#E6E6FA",
        tabBarItemStyle: {
          justifyContent: "center",
        },
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          position: "absolute",
          marginHorizontal: 10,
          marginBottom: 36,
          height: 52,
          borderRadius: 50,
          backgroundColor: "#0f0d23",
          borderTopWidth: 0,
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text style={{ color, fontSize: 14, fontWeight: "600" }}>
                Home
              </Text>
            ) : null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text style={{ color, fontSize: 14, fontWeight: "600" }}>
                Search
              </Text>
            ) : null,
        }}
      />
      <Tabs.Screen
        name="savedMovies"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text style={{ color, fontSize: 14, fontWeight: "600" }}>
                Saved
              </Text>
            ) : null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),

          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text style={{ color, fontSize: 14, fontWeight: "600" }}>
                Profile
              </Text>
            ) : null,
        }}
      />
    </Tabs>
  );
};

export default _layout;
