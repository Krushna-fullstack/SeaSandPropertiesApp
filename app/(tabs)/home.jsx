import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/800x600/?house1",
      price: "$425,000",
      address: "123 Maple St, Boston, MA",
      beds: 3,
      baths: 2,
      sqft: 1850,
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/800x600/?house2",
      price: "$675,000",
      address: "456 Oak Ave, Cambridge, MA",
      beds: 4,
      baths: 3,
      sqft: 2400,
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/800x600/?house3",
      price: "$1,200,000",
      address: "789 Pine Blvd, Newton, MA",
      beds: 5,
      baths: 4,
      sqft: 3500,
    },
  ];

  return (
    <ScrollView className="bg-gray-50 flex-1">
      {/* Header */}
      <View className="bg-white px-6 py-4 shadow-sm">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-gray-500 text-sm">Current Location</Text>
            <Text className="text-xl font-bold">Boston, MA</Text>
          </View>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <TouchableOpacity className="mx-4 mt-4 bg-white p-3 rounded-lg shadow-sm flex-row items-center">
        <Ionicons name="search" size={20} color="gray" />
        <Text className="ml-2 text-gray-500">Search for properties...</Text>
      </TouchableOpacity>

      {/* Categories */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-bold mb-3">Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity className="bg-blue-600 px-6 py-2 rounded-full mr-3">
            <Text className="text-white">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-6 py-2 rounded-full mr-3 border border-gray-200">
            <Text className="text-gray-700">House</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-6 py-2 rounded-full mr-3 border border-gray-200">
            <Text className="text-gray-700">Apartment</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-6 py-2 rounded-full mr-3 border border-gray-200">
            <Text className="text-gray-700">Condo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-6 py-2 rounded-full mr-3 border border-gray-200">
            <Text className="text-gray-700">Land</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Featured Properties */}
      <View className="mt-6 px-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-bold">Featured Properties</Text>
          <TouchableOpacity>
            <Text className="text-blue-600">See All</Text>
          </TouchableOpacity>
        </View>

        {featuredProperties.map((property) => (
          <TouchableOpacity
            key={property.id}
            className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden"
          >
            <Image
              source={{ uri: property.image }}
              className="w-full h-48"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="text-xl font-bold">{property.price}</Text>
              <Text className="text-gray-700 mt-1">{property.address}</Text>
              <View className="flex-row mt-3">
                <View className="flex-row items-center mr-4">
                  <MaterialIcons name="king-bed" size={20} color="gray" />
                  <Text className="ml-1 text-gray-600">
                    {property.beds} beds
                  </Text>
                </View>
                <View className="flex-row items-center mr-4">
                  <FontAwesome name="bath" size={18} color="gray" />
                  <Text className="ml-1 text-gray-600">
                    {property.baths} baths
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <MaterialIcons name="zoom-out-map" size={20} color="gray" />
                  <Text className="ml-1 text-gray-600">
                    {property.sqft} sqft
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
