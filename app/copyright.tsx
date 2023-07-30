import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const copyright = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Copyright Information",
          headerShadowVisible: false,
        }}
      />
      <Text style={styles.text}>
        App created by{" "}
        <Link href="https://github.com/positivee" style={styles.link}>
          https://github.com/positivee
        </Link>
      </Text>
    </View>
  );
};

export default copyright;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
  },
  link: {
    color: "#153131",
  },
});
