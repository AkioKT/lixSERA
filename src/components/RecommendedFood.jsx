import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/RecommendedFood";

export default function RecommendedFood() {
  // Data rekomendasi makanan
  const recommendations = [
    {
      id: 1,
      name: "Nasi padang paket lengkap khas padang",
      price: 12000,
      rating: 4.6,
      reviews: 2509,
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
      badge: "New Items",
      badgeColor: "#FFE4B5",
    },
    {
      id: 2,
      name: "Mie ayam paket komplit",
      price: 16000,
      rating: 5.0,
      reviews: 2509,
      image:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      badge: "New Items",
      badgeColor: "#FFE4B5",
    },
    {
      id: 3,
      name: "Paket mukbang | seafood jhochowwo...",
      price: 56500,
      rating: 5.0,
      reviews: 1945,
      image: "https://images.unsplash.com/photo-1559737558-2f5a7ab3e184?w=400",
      badge: "Best Seller",
      badgeColor: "#FFE4B5",
    },
  ];
  const formatPrice = (price) => {
    return `Rp${price.toLocaleString("id-ID")}`;
  };
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitle}>
        <Text style={styles.titleRecommended}>Recommended</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      {/* Generate Rekomendasi Makanan */}
      {recommendations.map((item) => (
        <View key={item.id} style={styles.recommendedItem}>
          <Image source={{ uri: item.image }} style={styles.recommendedImage} />

          <View style={styles.recommendedInfo}>
            {item.badge && (
              <View
                style={[styles.badge, { backgroundColor: item.badgeColor }]}
              >
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
            <Text style={styles.recommendedName}>{item.name}</Text>
            <View style={styles.recommendedBottom}>
              <Text style={styles.recommendedPrice}>
                {formatPrice(item.price)}
              </Text>
            </View>
          </View>
          <View style={styles.ratingAndAddBtn}>
            <Text style={styles.recommendedRating}>
              ⭐ {item.rating.toFixed(1)} ({item.reviews})
            </Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
