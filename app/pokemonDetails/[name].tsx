import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, Stack, useSearchParams } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/store";
import { useGetPokemonDetailsQuery } from "@/store/pokemon/pokemonApi";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "@/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { toggleLikedPokemon } from "@/store/pokemon/likedPokemonsSlice";

const PokemonDetails = () => {
  const { name = "" } = useSearchParams();
  const likedPokemonList = useAppSelector((state) => state.likedPokemons);
  const dispatch = useAppDispatch();
  const { data: pokemonDetails } = useGetPokemonDetailsQuery(name.toString());

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{ title: name ? name.toString() : "Pokemon Details" }}
      />

      <View style={styles.imagesContainer}>
        <Image
          style={styles.image}
          source={{ uri: pokemonDetails?.sprites?.front_default }}
        />
        <Image
          style={styles.image}
          source={{ uri: pokemonDetails?.sprites?.back_default }}
        />
      </View>

      <View>
        <Text style={styles.heading}>Pokemon details: </Text>
        <Text>Name: {pokemonDetails?.name}</Text>
        <Text>Base experience: {pokemonDetails?.base_experience}</Text>
        <Text>Weight: {pokemonDetails?.weight} </Text>
        <Text>Height: {pokemonDetails?.height} </Text>
        <Text style={styles.heading}>Abilites:</Text>
        <View>
          {pokemonDetails?.abilities.map((ability, index) => {
            return <Text key={index}>{ability.ability.name}</Text>;
          })}
        </View>
        <Text style={styles.heading}>Types:</Text>
        <View>
          {pokemonDetails?.types.map((type, index) => {
            return <Text key={index}>{type.type.name}</Text>;
          })}
        </View>
        <Text style={styles.heading}>Base stats:</Text>
        <View>
          {pokemonDetails?.stats.map((stat, index) => {
            return (
              <Text key={index}>
                {`${stat.stat.name.toUpperCase()} ${stat.base_stat}`}{" "}
              </Text>
            );
          })}
        </View>
        <Pressable
          onPress={() => {
            dispatch(toggleLikedPokemon(name));
          }}
          style={styles.likedButton}
        >
          {likedPokemonList?.includes(name.toString()) ? (
            <Ionicons name="heart" size={40}></Ionicons>
          ) : (
            <Ionicons name="heart-outline" size={40}></Ionicons>
          )}
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 96,
    height: 96,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 4,
  },
  likedButton: {
    marginTop: 10,
  },
});
