import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/Categories";
import FoodIcon from "../../assets/food-icon.png";
import BeverageIcon from "../../assets/beverage-icon.png";
import CakeIcon from "../../assets/cake-icon.png";
import TraditionalIcon from "../../assets/traditional-icon.png";

export default function Categories() {
  const categories = [
    { id: 1, name: "Food", icon: FoodIcon, isImage: true },
    { id: 2, name: "Beverage", icon: BeverageIcon, isImage: true },
    { id: 3, name: "Cake", icon: CakeIcon, isImage: true },
    { id: 4, name: "Traditional", icon: TraditionalIcon, isImage: true },
  ];

  return (
    <View style={styles.categoriesContainer}>
      {categories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.categoryItem}>
          <View style={styles.categoryIcon}>
            {category.isImage ? (
              <Image source={category.icon} style={{ width: 30, height: 30 }} />
            ) : (
              <Text style={styles.categoryEmoji}>{category.icon}</Text>
            )}
          </View>
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
