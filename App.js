import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {
  const [active, setActive] = useState('Home');

  const MenuButton = ({ label }) => (
    <TouchableOpacity
      style={[styles.menuButton, active === label && styles.menuButtonActive]}
      onPress={() => setActive(label)}
      activeOpacity={0.7}
    >
      <Text style={[styles.menuText, active === label && styles.menuTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      {/* Menu Bar */}
      <View style={styles.menuBar}>
        <MenuButton label="Home" />
        <MenuButton label="Gallery" />
        <MenuButton label="Profile" />
      </View>

      {/* Body */}
      <View style={styles.body}>
        {active === 'Home' && (
          <View style={styles.card}>
            <Text style={styles.title}>Welcome to my first App</Text>
            <Text style={styles.paragraph}>
              This is the Home screen. Use the menu to switch sections.
            </Text>
          </View>
        )}

        {active === 'Gallery' && (
          <View style={styles.card}>
            <Text style={styles.title}>Gallery</Text>
            <Text style={styles.paragraph}>
              Gallery content goes here. (Later you can add a carousel or images.)
            </Text>
          </View>
        )}

        {active === 'Profile' && (
          <View style={styles.card}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.paragraph}>
              Profile details will appear here.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#45b941ff' },

  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2f8c34',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.12)',
    paddingTop: 40,   
  },

  menuButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  menuButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.12)',
  },

  menuText: {
    color: '#e6f7e9',
    fontSize: 16,
    fontWeight: '500',
  },

  menuTextActive: {
    color: '#fff',
    fontWeight: '700',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  card: {
    width: '100%',
    maxWidth: 760,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2b6f2b',
    marginBottom: 8,
  },

  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 20,
  },
});
