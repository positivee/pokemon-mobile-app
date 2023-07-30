import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import globalStyles from "@/styles/globalStyles";

const favList = () => {
  return (
    <View>
      <View style={globalStyles.container}>
        <Text style={styles.heading}>Your bloved pokemon collection:</Text>
      </View>
      <View style={globalStyles.container}>
        <Text style={styles.infoHeading}>
          There are currently no likes pokemons
        </Text>
      </View>
    </View>
  );
};

export default favList;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },

  infoHeading: {
    textAlign: "center",
    fontSize: 21,
  },
});
