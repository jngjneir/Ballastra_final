
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Create_Nexus({ navigation }) {
  const CARDS = [
    {
      id: 1,
      title: "Gaming",
      icon: "https://img.icons8.com/external-fauzidea-flat-fauzidea/512/external-Gamepad-gaming-fauzidea-flat-fauzidea.png",
    },
    {
      id: 2,
      title: "School",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-school-stationery-flaticons-lineal-color-flat-icons.png",
    },
    {
      id: 3,
      title: "Study Group",
      icon: "https://img.icons8.com/external-others-inmotus-design/512/external-books-education-others-inmotus-design.png",
    },
    {
      id: 4,
      title: "Friends",
      icon: "https://img.icons8.com/external-nawicon-flat-nawicon/512/external-Group-friendship-nawicon-flat-nawicon.png",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Close Button */}
    

        {/* Title */}
        <Text style={styles.title}>Create Your Nexus</Text>
        <Text style={styles.subtitle}>
          A Nexus is your space. Build your world with chat,{"\n"}channels and vibes.
        </Text>

        {/* Create My Own Nexus Button */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("My_Own_Nexus")} 
        >
          <Text style={styles.primaryButtonText}>👑  Create My Own Nexus</Text>
        </TouchableOpacity>

        {/* GRID CARDS */}
        <View style={styles.gridContainer}>
          {CARDS.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.icon }} style={styles.cardIcon} />
              <Text style={styles.cardTitle}>{item.title}</Text>

              <TouchableOpacity
                style={styles.cardButton}
                onPress={() =>
                  navigation.navigate("", { category: item.title })
                }
              >
                <Text style={styles.cardButtonText}>Create</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Explore Nexus */}
        <Text style={styles.bottomText}>Don’t have a Nexus to join?</Text>

        {/* <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate("")}
        >
          <Text style={styles.exploreButtonText}>Explore Nexus</Text>
        </TouchableOpacity> */}

        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
}

/* ========== STYLES ========== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#02081A",
    paddingHorizontal: 22,
    paddingTop: 55,
  },

  closeButton: {
    marginBottom: 25,
  },

  title: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    color: "#9BA4C1",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },

  primaryButton: {
    backgroundColor: "#122B5F",
    paddingVertical: 16,
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#2D4DF5",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },

  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  gridContainer: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47%",
    backgroundColor: "#07142D",
    borderRadius: 20,
    paddingVertical: 22,
    alignItems: "center",
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    shadowColor: "#2D4DF5",
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },

  cardIcon: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  cardButton: {
    backgroundColor: "#142A6B",
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 10,
  },

  cardButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },

  bottomText: {
    color: "#8B96B2",
    textAlign: "center",
    marginTop: 25,
    fontSize: 13,
  },

  exploreButton: {
    backgroundColor: "#2455F5",
    paddingVertical: 14,
    borderRadius: 16,
    marginTop: 15,
    alignItems: "center",
  },

  exploreButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
