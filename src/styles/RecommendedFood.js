import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionHeader: {
    // flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 20,
  },
  sectionTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleRecommended: {
    fontSize: 18,
    fontWeight: "900",
    color: "#333",
  },
  viewAll: {
    fontSize: 14,
    color: "#797979ff",
  },
  recommendedItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  recommendedImage: {
    width: 100,
    height: 110,
  },
  recommendedInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  badgeText: {
    fontSize: 12,
    color: "#FF8C00",
    fontWeight: "semibold",
  },
  recommendedName: {
    fontSize: 13,
    color: "#333",
    marginBottom: 8,
    lineHeight: 18,
  },
  recommendedBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recommendedPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  recommendedRating: {
    position: "absolute",
    top: 5,
    right: 0,
    width: "100%",
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
  },
  ratingAndAddBtn: {
    position: "relative",
    // backgroundColor: "red",
    height: "100%",
    width: 70,
    alignItems: "center"
  },
  sectionAddAndRating: {
    // backgroundColor: "red",
    height: 55,
    justifyContent: "center",
    alignItems: "center"
  },
  addButton: {
    position: "absolute",
    backgroundColor: "#F8BD1B",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    bottom: 10,
    right: 10,
  },
  addButtonText: {
    fontSize: 32,
    color: "#ffffffff",
    fontWeight: "bold",
  },
});

export default styles;
