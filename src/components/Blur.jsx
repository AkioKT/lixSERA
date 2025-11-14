import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MapPin, Star } from 'lucide-react';

export default function Blur() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800' }}
        style={styles.card}
        imageStyle={styles.imageStyle}
      >
        {/* Overlay blur effect */}
        <View style={styles.blurOverlay}>
          <View style={styles.contentContainer}>
            {/* Title and Rating */}
            <View style={styles.headerRow}>
              <Text style={styles.title}>MBG Food Street</Text>
              <View style={styles.ratingContainer}>
                <Star fill="#FFD700" color="#FFD700" size={16} />
                <Text style={styles.ratingText}>5.0</Text>
                <Text style={styles.reviewCount}>(2509)</Text>
              </View>
            </View>

            {/* Location */}
            <View style={styles.locationRow}>
              <MapPin color="#FFFFFF" size={16} />
              <Text style={styles.locationText}>Jl. Raya Telagasari</Text>
            </View>
          </View>

          {/* Icon button */}
          <View style={styles.iconButton}>
            <View style={styles.iconDot} />
            <View style={styles.iconDot} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 12,
  },
  blurOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(8px)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  reviewCount: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 13,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  iconDot: {
    width: 4,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});