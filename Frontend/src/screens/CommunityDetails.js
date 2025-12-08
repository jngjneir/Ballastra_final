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

export default function CommunityDetails() {
  return (
    <View style={styles.container}>
      {/* LEFT SIDE NAV BUTTONS */}
      <View style={styles.leftNav}>
        <TouchableOpacity style={styles.sideBtn}>
          <Icon name="compass" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideBtnBlue}>
          <Icon name="plus" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarBtn}>
          <Image
            source={{
              uri: "https://i.ibb.co/M8vY7bw/avatar.png",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.mainPanel} showsVerticalScrollIndicator={false}>
        {/* HEADER CARD */}
        <View style={styles.headerCard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://i.ibb.co/M8vY7bw/avatar.png",
              }}
              style={styles.profile}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.title}>Sushis City</Text>
              <Text style={styles.subText}>0 Members • Community</Text>
            </View>
          </View>

          {/* ACTION BUTTONS */}
          <View style={styles.actionBtns}>
            <TouchableOpacity style={styles.iconCircle}>
              <Icon name="search" size={18} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <Icon name="users" size={18} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <Icon name="settings" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* CHAT SPACE */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Chat Space</Text>
            <Icon name="chevron-up" size={18} color="#fff" />
          </View>

          <View style={styles.item}>
            <Icon name="hash" size={16} color="#6edaff" />
            <Text style={styles.itemText}>general</Text>
          </View>

          <View style={styles.item}>
            <Icon name="zap" size={16} color="#6edaff" />
            <Text style={styles.itemText}>announcement</Text>
          </View>
        </View>

        {/* VOICE SPACE */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Voice Space</Text>
            <Icon name="chevron-up" size={18} color="#fff" />
          </View>

          {["Lounge", "Team Talk", "Chill Zone", "Game VC", "Hangout"].map(
            (name, i) => (
              <View style={styles.item} key={i}>
                <Icon name="mic" size={16} color="#6edaff" />
                <Text style={styles.itemText}>{name}</Text>
              </View>
            )
          )}
        </View>
      </ScrollView>

     
    </View>
  );
}

const NavIcon = ({ name, title, active }) => (
  <TouchableOpacity style={styles.navBtn}>
    <Icon name={name} size={22} color={active ? "#fff" : "#8a8f9b"} />
    <Text
      style={[styles.navText, { color: active ? "#fff" : "#8a8f9b" }]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020817", flexDirection: "row" },
  leftNav: { width: 60, paddingTop: 90, alignItems: "center" },
  sideBtn: {
    width: 44,
    height: 44,
    backgroundColor: "#0a1222",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  sideBtnBlue: {
    width: 44,
    height: 44,
    backgroundColor: "#246BFD",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  avatarBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    overflow: "hidden",
  },
  avatar: { width: "100%", height: "100%" },

  mainPanel: {
    flex: 1,
    backgroundColor: "#071121",
    marginTop: 100,
    marginLeft: -10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 20,
  },

  headerCard: {
    backgroundColor: "#0b152b",
    padding: 18,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profile: { width: 48, height: 48, borderRadius: 24 },
  title: { color: "#fff", fontSize: 18, fontWeight: "700" },
  subText: { color: "#7b8ca8", marginTop: 4 },

  actionBtns: { flexDirection: "row" },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#123",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  section: { marginTop: 25 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 15, color: "#fff", fontWeight: "600" },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#08172f",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 10,
  },
  itemText: { color: "#cbd5e1", marginLeft: 10, fontSize: 15 },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    height: 75,
    width: "100%",
    backgroundColor: "#050C1C",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "#0f1a2e",
    borderTopWidth: 1,
  },
  navBtn: { alignItems: "center" },
  navText: { fontSize: 11, marginTop: 3 },
});
