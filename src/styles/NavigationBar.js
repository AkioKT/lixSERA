import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#8B4513",
    paddingVertical: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    width: 20,
    height: 20,
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.6,
  },
  navIconActive: {
    opacity: 1,
  },
  navText: {
    fontSize: 11,
    color: "#FFFFFF",
    opacity: 0.6,
  },
  navTextActive: {
    opacity: 1,
    fontWeight: "bold",
  },
});

export default styles;