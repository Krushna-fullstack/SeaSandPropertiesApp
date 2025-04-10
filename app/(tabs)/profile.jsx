import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import React from "react";

const Profile = () => {
  // Real estate agent data
  const agent = {
    name: "Sarah Johnson",
    title: "Licensed Real Estate Agent",
    company: "Premiere Realty Group",
    experience: "8 years",
    specialties: ["Residential", "Luxury Homes", "First-Time Buyers"],
    rating: 4.9,
    reviews: 142,
    phone: "(555) 123-4567",
    email: "sarah.johnson@premiere.com",
    website: "www.premiere.com/sarah",
    bio: "Specializing in helping clients find their dream homes in the metropolitan area. Committed to providing exceptional service with a focus on your unique needs.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    listings: [
      {
        id: 1,
        price: "$425,000",
        address: "123 Maple St",
        image: "https://source.unsplash.com/random/300x300/?house1",
      },
      {
        id: 2,
        price: "$675,000",
        address: "456 Oak Ave",
        image: "https://source.unsplash.com/random/300x300/?house2",
      },
      {
        id: 3,
        price: "$1,200,000",
        address: "789 Pine Blvd",
        image: "https://source.unsplash.com/random/300x300/?house3",
      },
    ],
  };

  const handleCall = () => Linking.openURL(`tel:${agent.phone}`);
  const handleEmail = () => Linking.openURL(`mailto:${agent.email}`);
  const handleWebsite = () => Linking.openURL(`https://${agent.website}`);

  return (
    <ScrollView className="bg-gray-50 flex-1">
      {/* Header with Avatar */}
      <View className="bg-white pb-6 pt-12 px-6 items-center shadow-sm">
        <View className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md -mt-16">
          <Image
            source={{ uri: agent.avatar }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <Text className="text-2xl font-bold mt-4">{agent.name}</Text>
        <Text className="text-blue-600 font-medium">{agent.title}</Text>
        <Text className="text-gray-600 mt-1">{agent.company}</Text>

        {/* Rating */}
        <View className="flex-row items-center mt-2">
          <Ionicons name="star" size={20} color="#f59e0b" />
          <Text className="text-gray-800 ml-1 font-medium">{agent.rating}</Text>
          <Text className="text-gray-500 ml-1">({agent.reviews} reviews)</Text>
        </View>
      </View>

      {/* Contact Card */}
      <View className="bg-white mx-4 my-4 p-5 rounded-lg shadow-sm">
        <Text className="text-lg font-semibold mb-3">Contact Information</Text>

        <TouchableOpacity
          className="flex-row items-center py-2 border-b border-gray-100"
          onPress={handleCall}
        >
          <MaterialIcons name="phone" size={24} color="#3b82f6" />
          <Text className="ml-3 text-gray-800">{agent.phone}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center py-2 border-b border-gray-100"
          onPress={handleEmail}
        >
          <MaterialIcons name="email" size={24} color="#3b82f6" />
          <Text className="ml-3 text-gray-800">{agent.email}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center py-2"
          onPress={handleWebsite}
        >
          <Feather name="globe" size={24} color="#3b82f6" />
          <Text className="ml-3 text-gray-800">{agent.website}</Text>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View className="bg-white mx-4 my-4 p-5 rounded-lg shadow-sm">
        <Text className="text-lg font-semibold mb-3">About</Text>
        <Text className="text-gray-700 leading-6">{agent.bio}</Text>

        <View className="mt-4">
          <Text className="font-medium text-gray-800">Experience:</Text>
          <Text className="text-gray-700 mt-1">
            {agent.experience} in real estate
          </Text>
        </View>

        <View className="mt-4">
          <Text className="font-medium text-gray-800">Specialties:</Text>
          <View className="flex-row flex-wrap mt-2">
            {agent.specialties.map((specialty, index) => (
              <View
                key={index}
                className="bg-blue-50 px-3 py-1 rounded-full mr-2 mb-2"
              >
                <Text className="text-blue-700 text-sm">{specialty}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Current Listings */}
      <View className="bg-white mx-4 my-4 p-5 rounded-lg shadow-sm">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Current Listings</Text>
          <TouchableOpacity>
            <Text className="text-blue-600">View All</Text>
          </TouchableOpacity>
        </View>

        {agent.listings.map((listing) => (
          <View key={listing.id} className="mb-4 border-b border-gray-100 pb-4">
            <Image
              source={{ uri: listing.image }}
              className="w-full h-48 rounded-lg"
              resizeMode="cover"
            />
            <View className="mt-2">
              <Text className="text-lg font-bold text-gray-900">
                {listing.price}
              </Text>
              <Text className="text-gray-600">{listing.address}</Text>
            </View>
            <TouchableOpacity className="mt-2 flex-row items-center">
              <Text className="text-blue-600 mr-1">View Details</Text>
              <FontAwesome name="arrow-right" size={12} color="#3b82f6" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Call to Action */}
      <View className="mx-4 my-6">
        <TouchableOpacity
          className="bg-blue-600 py-4 rounded-lg items-center shadow-md"
          onPress={handleCall}
        >
          <Text className="text-white font-bold text-lg">Contact Agent</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
