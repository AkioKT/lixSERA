import {
  View,
  Text,
  Image
} from "react-native";
import styles from "../styles/Location";

export default function Location() {
  const locationUser = "Telagasari, Karawang"
  return (
    <View style={styles.locationContainer}>
      <Image style={styles.locationIcon} source={require('../../assets/location-icon.png')}></Image>
      <Text style={styles.locationText}>Location: </Text>
      <Text style={styles.locationBold}>{locationUser}</Text>
      <Text style={styles.locationEdit}>✏️</Text>
    </View>
  );
}
