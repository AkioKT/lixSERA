import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#F8BD1B",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 28,
  },
  categoryText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
});

export default styles;
