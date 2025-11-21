import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "../styles/NavigationBar";
import HomeIcon from "../../assets/icon/home-icon.png";
import HistoryIcon from "../../assets/icon/history-icon.png";
import ActivityIcon from "../../assets/icon/activity-icon.png";
import ProfileIcon from "../../assets/icon/profile-icon.png";
import GlobalText from "./GlobalText";

export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab("home")}
      >
        <Image
          source={HomeIcon}
          style={[styles.navIcon, activeTab === "home" && styles.navIconActive]}
        />
        <GlobalText
          weight={activeTab === "home" ? "semibold" : "regular"} // ✅ ubah ketebalan
          style={[styles.navText, activeTab === "home" && styles.navTextActive]}
        >
          Beranda
        </GlobalText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab("history")}
      >
        <Image
          source={HistoryIcon}
          style={[
            styles.navIcon,
            activeTab === "history" && styles.navIconActive,
          ]}
        />
        <GlobalText
          weight={activeTab === "history" ? "semibold" : "regular"}
          style={[
            styles.navText,
            activeTab === "history" && styles.navTextActive,
          ]}
        >
          Riwayat
        </GlobalText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab("activity")}
      >
        <Image
          source={ActivityIcon}
          style={[
            styles.navIcon,
            activeTab === "activity" && styles.navIconActive,
          ]}
        />
        <GlobalText
          weight={activeTab === "activity" ? "semibold" : "regular"}
          style={[
            styles.navText,
            activeTab === "activity" && styles.navTextActive,
          ]}
        >
          Aktivitas
        </GlobalText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab("profile")}
      >
        <Image
          source={ProfileIcon}
          style={[
            styles.navIcon,
            activeTab === "profile" && styles.navIconActive,
          ]}
        />
        <GlobalText
          weight={activeTab === "profile" ? "semibold" : "regular"}
          style={[
            styles.navText,
            activeTab === "profile" && styles.navTextActive,
          ]}
        >
          Profil
        </GlobalText>
      </TouchableOpacity>
    </View>
  );
}
