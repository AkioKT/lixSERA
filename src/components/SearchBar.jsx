import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/SearchBar";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (text) => {
    setSearchQuery(text);
    // Validasi: minimal 2 karakter untuk pencarian
    if (text.length >= 2) {
      console.log("Mencari:", text);
      // Implementasi logika pencarian di sini
    }
  };
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.searchIcon}>
        <Image
          source={require("../../assets/search-glass-icon.png")}
          style={{width: 20, height: 20}}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
