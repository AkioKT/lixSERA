import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/PromoCard";
import GlobalText from "./GlobalText";
export default function PromoCard() {
  const promoCard = [
    {
      itemPromo : 'Sushi Ghiebrun',
      price : 23000,
      

    }
  ]
  return (
    <LinearGradient
      colors={["#77512D", "#FF7C00"]} // warna gradien
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.promoCard}
    >
      <View style={styles.promoContent}>
        <View>
          <GlobalText style={styles.promoTitle}>Sushi Ghiebrun</GlobalText>
          <GlobalText style={styles.promoSubtitle}>PROMO PAKET HEMAT HANYA</GlobalText>
        </View>
        <View>
          <Text style={styles.promoPrice}>Rp23.000*</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
        }}
        style={styles.promoImage}
      />
    </LinearGradient>
  );
}
