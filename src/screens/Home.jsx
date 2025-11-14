import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NavigationBar from "../components/NavigationBar";
import RecommendedFood from "../components/RecommendedFood";
import NearbyFoodSection from "../components/NearbyFoodSection";
import Categories from "../components/Categories";
import LocationUser from "../components/LocationUser";
import PromoCard from "../components/PromoCard";
import SearchBar from "../components/SearchBar";
import LogoApp from "../components/LogoApp";

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <StatusBar hidden={true} />
      <LogoApp />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <PromoCard />
          <LocationUser />
          <Categories />
          <NearbyFoodSection />
          <RecommendedFood />
        </View>
      </ScrollView>
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  section: {
    gap: 20,
    marginHorizontal: 20,
  },
});
