import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  promoCard: {
    // marginHorizontal: 20,
    // marginBottom: 20,
    marginTop: 10,
    backgroundColor: "#FF8C00",
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
    padding: 20,
  },
  promoContent: {
    gap: 10,
    flex: 1,
    justifyContent: "center",
  },
  promoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    // marginBottom: 5,
  },
  promoSubtitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#FFFFFF",
    // marginBottom: 8,
  },
  promoPrice: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    // marginBottom: 15,
  },
  addToCartBtn: {
    backgroundColor: "rgba(248, 189, 27, 0.5)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  addToCartText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  promoImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 10,
  },
});

export default styles;
