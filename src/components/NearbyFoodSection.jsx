import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/NearbyFoodSection";
import ShopIcon from "../../assets/shop-icon.png";

export default function NearbyFoodSection() {
  const nearbyRestaurants = [
    {
      id: 1,
      name: "MBG Food Street",
      location: "Jl. Raya Telagasari",
      rating: 5.0,
      reviews: 2609,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
      status: "Open Now",
    },
  ];
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitle}>
        <Text style={styles.titleNearby}>Nearby in Telagasari</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      {nearbyRestaurants.map((restaurant) => (
        <TouchableOpacity key={restaurant.id} style={styles.restaurantCard}>
          <Image
            source={{ uri: restaurant.image }}
            style={styles.restaurantImage}
          />
          <View style={styles.restaurantOverlay}>
            <View style={styles.openNowBadge}>
              <Text style={styles.openNowText}>{restaurant.status}</Text>
            </View>
            <View style={styles.restaurantInfo}>
              <View>
                <View style={styles.restaurantNameAndRating}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <Text style={styles.restaurantRating}>
                    ⭐ {restaurant.rating} ({restaurant.reviews})
                  </Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <Text style={styles.restaurantLocation}>
                    📍 {restaurant.location}
                  </Text>
                </View>
              </View>
              <Image
                source={ShopIcon}
                style={{ width: 30, height: 30 }}
              ></Image>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
