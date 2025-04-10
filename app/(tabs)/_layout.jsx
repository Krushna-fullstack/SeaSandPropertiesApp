import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3b82f6", // blue-600
          tabBarInactiveTintColor: "#64748b", // slate-500
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopWidth: 0,
            height: 80,
            paddingBottom: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <View className="items-center justify-center">
                <MaterialCommunityIcons
                  name="home-outline"
                  size={28}
                  color={color}
                />
                <Text className="text-xs mt-1" style={{ color }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarIcon: ({ color, size }) => (
              <View className="items-center justify-center">
                <Ionicons name="search-outline" size={28} color={color} />
                <Text className="text-xs mt-1" style={{ color }}>
                  Explore
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <View className="items-center justify-center">
                <FontAwesome name="user-o" size={24} color={color} />
                <Text className="text-xs mt-1" style={{ color }}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
