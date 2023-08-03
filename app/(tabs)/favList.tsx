import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import globalStyles, { COLORS } from "@/styles/globalStyles";
import { useAppDispatch, useAppSelector } from "@/store";
import { FlatList } from "react-native-gesture-handler";
import { toggleLikedPokemon } from "@/store/pokemon/likedPokemonsSlice";
import { Ionicons } from "@expo/vector-icons";

const favList = () => {
  const dispatch = useAppDispatch();
  const liked: string[] = useAppSelector((state) => state.likedPokemons);

  return (
    <View>
      <View>
        {liked?.length === 0 ? (
          <>
            <View style={globalStyles.container}>
              <Text style={styles.heading}>
                Your bloved pokemon collection:
              </Text>
            </View>
            <Text style={styles.noPokemonHeading}>No pokemons liked</Text>
          </>
        ) : (
          <FlatList
            ListHeaderComponent={
              <View style={globalStyles.container}>
                <Text style={styles.heading}>
                  Your bloved pokemon collection:
                </Text>
              </View>
            }
            data={liked}
            renderItem={({ item }) => (
              <View style={styles.pokemonCard}>
                <Text style={styles.name}>{item}</Text>
                <Pressable onPress={() => dispatch(toggleLikedPokemon(item))}>
                  <Ionicons
                    name="close"
                    size={25}
                    style={{ marginRight: 15 }}
                  ></Ionicons>
                </Pressable>
              </View>
            )}
          />
        )}
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
    marginBottom: 50,
  },

  noPokemonHeading: {
    marginHorizontal: 10,
    fontSize: 20,
    padding: 25,
    textAlign: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
  },
  infoHeading: {
    textAlign: "center",
    fontSize: 21,
  },
  name: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  pokemonCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightWhite,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
});
