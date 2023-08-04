import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useGetPokemonDetailsQuery } from "@/store/pokemon/pokemonApi";
import { useAppDispatch, useAppSelector } from "@/store";
import { COLORS } from "@/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { toggleLikedPokemon } from "@/store/pokemon/likedPokemonsSlice";
import { Link, Redirect } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const Pokemon = ({ name }: { name: string }) => {
  const likedPokemonList = useAppSelector((state) => state.likedPokemons);
  const dispatch = useAppDispatch();

  const { data: pokemon } = useGetPokemonDetailsQuery(name);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: pokemon?.sprites?.front_default }}
          resizeMode="contain"
        />

        <Text style={styles.name}>{name}</Text>
        <View style={styles.typesContainer}>
          {pokemon?.types.map((item, index) => (
            <Text key={index} style={styles.types}>
              {item?.type?.name + " "}
            </Text>
          ))}
        </View>
        <View style={styles.icons}>
          <Pressable
            onPress={() => {
              dispatch(toggleLikedPokemon(name));
            }}
          >
            {likedPokemonList?.includes(name ?? "") ? (
              <Ionicons name="heart" size={40}></Ionicons>
            ) : (
              <Ionicons name="heart-outline" size={40}></Ionicons>
            )}
          </Pressable>
          <Link href={`/pokemonDetails/${name}`} asChild>
            <Pressable style={styles.button}>
              <Ionicons name={"information-circle"} size={40} />
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: 96,
    height: 96,
  },
  button: {
    padding: 15,
  },
  name: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
  },
  typesContainer: {
    display: "flex",
  },
  types: {
    fontSize: 13,
    color: COLORS.secFont,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 10,
    gap: 10,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
