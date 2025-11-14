import React from "react";
import { Text } from "react-native";

export default function GlobalText({ style, weight = "regular", ...props }) {
  let fontFamily = "Poppins-Regular"; // default font

  if (weight === "semibold") fontFamily = "Poppins-SemiBold";
  if (weight === "bold") fontFamily = "Poppins-Bold";

  return <Text {...props} style={[{ fontFamily }, style]} />;
}
