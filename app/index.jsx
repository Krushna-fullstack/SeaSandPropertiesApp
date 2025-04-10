import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="flex-1 justify-center items-center px-6">
        <Image
          source={{
            uri: "https://source.unsplash.com/random/800x600/?realestate",
          }}
          className="w-full h-64 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-3xl font-bold mt-8 text-center">
          Find Your Dream Home
        </Text>
        <Text className="text-gray-600 mt-2 text-center">
          Discover the perfect property that matches your lifestyle
        </Text>
      </View>

      {/* CTA Buttons */}
      <View className="px-6 pb-12">
        <Link href="/(tabs)/home" asChild>
          <TouchableOpacity className="bg-blue-600 py-4 rounded-lg items-center shadow-md">
            <Text className="text-white font-bold text-lg">
              Browse Properties
            </Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/explore" asChild>
          <TouchableOpacity className="bg-white border border-blue-600 py-4 rounded-lg items-center mt-4">
            <Text className="text-blue-600 font-bold text-lg">
              Explore Locations
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Index;
