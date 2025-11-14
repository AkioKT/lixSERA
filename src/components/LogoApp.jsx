import { View, Image, StyleSheet } from "react-native";
import Logo from "../../assets/logo-lixsera.png";

export default function LogoApp() {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    width: 100,
    height: 40
  }
});
