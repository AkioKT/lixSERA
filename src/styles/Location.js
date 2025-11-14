import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  locationContainer: {
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center"
  },
  locationIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    marginRight: 5,
  },
  locationText: {
    fontSize: 14,
    color: "#666",
  },
  locationBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  locationEdit: {
    fontSize: 14,
    marginLeft: 5,
  },
});

export default styles;