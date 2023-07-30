import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useRouter } from "expo-router";
import PokemonCard from "./PokemonCard";
import { COLORS } from "@/styles/globalStyles";

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>There are currently X pokemons</Text>
      </View>

      <View>
        {isLoading && (
          <>
            <Text style={styles.loading}>Pokemons are loading...</Text>
            <ActivityIndicator
              size="large"
              color={COLORS.lightWhite}
            ></ActivityIndicator>
          </>
        )}
      </View>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 32,
  },
  loading: {
    marginTop: 32,
    marginBottom: 10,
    textAlign: "center",
  },
});
