import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionHeader: {
    // flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  sectionTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleNearby: {
    fontSize: 18,
    fontWeight: "900",
    color: "#333",
  },
  viewAll: {
    fontSize: 14,
    color: "#797979ff",
  },
  restaurantCard: {
    // marginHorizontal: 20,
    // marginBottom: 25,
    // borderRadius: 16,
    // overflow: "hidden",
    // height: 200,
    width: "100%",
    height: 200,
  },
  restaurantImage: {
    width: "100%",
    height: 200,
  },
  restaurantOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 15,
    justifyContent: "space-between",
  },
  openNowBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.32)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  openNowText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  restaurantInfo: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.32)",
    // flexDirection: 
  },
  restaurantNameAndRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },  
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  restaurantRating: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  restaurantLocation: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  chatButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  chatIcon: {
    fontSize: 24,
  },
});

export default styles;
