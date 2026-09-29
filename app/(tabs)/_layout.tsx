import { View, Text } from "react-native";
import React from "react";
import { Color, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "search" : "search-outline"} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="savedMovies"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
