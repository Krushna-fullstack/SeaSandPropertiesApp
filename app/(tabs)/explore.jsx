import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Explore = () => {
  const popularCities = [
    {
      id: 1,
      name: "New York",
      image: "https://source.unsplash.com/random/800x600/?newyork",
    },
    {
      id: 2,
      name: "Los Angeles",
      image: "https://source.unsplash.com/random/800x600/?losangeles",
    },
    {
      id: 3,
      name: "Chicago",
      image: "https://source.unsplash.com/random/800x600/?chicago",
    },
    {
      id: 4,
      name: "Houston",
      image: "https://source.unsplash.com/random/800x600/?houston",
    },
    {
      id: 5,
      name: "Miami",
      image: "https://source.unsplash.com/random/800x600/?miami",
    },
    {
      id: 6,
      name: "Seattle",
      image: "https://source.unsplash.com/random/800x600/?seattle",
    },
  ];

  return (
    <ScrollView className="bg-gray-50 flex-1">
      {/* Header */}
      <View className="bg-white px-6 py-4 shadow-sm">
        <Text className="text-xl font-bold">Explore Properties</Text>
      </View>

      {/* Search Bar */}
      <TouchableOpacity className="mx-4 mt-4 bg-white p-3 rounded-lg shadow-sm flex-row items-center">
        <MaterialCommunityIcons name="magnify" size={20} color="gray" />
        <Text className="ml-2 text-gray-500">
          Search by city, neighborhood...
        </Text>
      </TouchableOpacity>

      {/* Popular Cities */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-bold mb-3">Popular Cities</Text>
        <View className="flex-row flex-wrap justify-between">
          {popularCities.map((city) => (
            <TouchableOpacity key={city.id} className="w-[48%] mb-4">
              <Image
                source={{ uri: city.image }}
                className="w-full h-32 rounded-lg"
                resizeMode="cover"
              />
              <Text className="mt-2 font-medium">{city.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Property Types */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-bold mb-3">Property Types</Text>
        <View className="flex-row flex-wrap justify-between">
          <TouchableOpacity className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4 items-center">
            <MaterialCommunityIcons
              name="home-variant"
              size={30}
              color="#3b82f6"
            />
            <Text className="mt-2 font-medium">Houses</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4 items-center">
            <MaterialCommunityIcons
              name="office-building"
              size={30}
              color="#3b82f6"
            />
            <Text className="mt-2 font-medium">Apartments</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4 items-center">
            <MaterialCommunityIcons
              name="home-city"
              size={30}
              color="#3b82f6"
            />
            <Text className="mt-2 font-medium">Condos</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4 items-center">
            <MaterialCommunityIcons
              name="warehouse"
              size={30}
              color="#3b82f6"
            />
            <Text className="mt-2 font-medium">Commercial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Explore;
