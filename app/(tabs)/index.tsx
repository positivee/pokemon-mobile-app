import { useGetAllPokemonsQuery } from "@/store/pokemon/pokemonApi";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";

import { Text, View } from "react-native";
import { COLORS } from "@/styles/globalStyles";
import Pokemon from "@/components/Pokemons/Pokemon";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function home() {
  const [pager, setPager] = useState(0);

  const { data, isLoading } = useGetAllPokemonsQuery(pager * 20) || {};

  const { count = 0, next = null, previous = null } = data || {};

  const getUrlOffset = (url: string): number => {
    const regex = /[?&]offset=([^&#]*)/;
    const match = regex.exec(url);

    if (match && match[1]) {
      const offset = parseInt(match[1], 10);
      if (!isNaN(offset)) {
        return offset !== 20 ? offset : 20;
      }
    }
    return 20;
  };

  const handlePage = (page: string | null) => {
    if (page === null) return;
    const nextPage = getUrlOffset(page) / 20;
    setPager(nextPage);
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          {isLoading ? (
            <>
              <Text style={styles.loading}>Pokemons are loading...</Text>
              <ActivityIndicator
                size="large"
                color={COLORS.lightWhite}
              ></ActivityIndicator>
            </>
          ) : (
            <View>
              {data?.results && (
                <>
                  <View style={styles.pagerNavigation}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? COLORS.secFont
                            : COLORS.lightWhite,
                        },
                        styles.pagerButton,
                      ]}
                      onPress={() => {
                        handlePage(previous);
                      }}
                    >
                      <Ionicons name="arrow-back-outline" />
                      <Text>Previous page</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? COLORS.secFont
                            : COLORS.lightWhite,
                        },
                        styles.pagerButton,
                      ]}
                      onPress={() => {
                        handlePage(next);
                      }}
                    >
                      <Text>Next page</Text>
                      <Ionicons name="arrow-forward-outline" />
                    </Pressable>
                  </View>
                  <FlatList
                    ListHeaderComponent={
                      <>
                        <View style={styles.imageContainer}>
                          <Image
                            source={require("@/assets/images/pokemon.png")}
                            style={styles.image}
                            resizeMode="contain"
                          />
                        </View>
                        <View style={styles.container}>
                          <Text style={styles.title}>
                            There are currently {data?.count} pokemons
                          </Text>
                        </View>
                      </>
                    }
                    data={data?.results}
                    renderItem={({ item }) => (
                      <Pokemon key={item.name} name={item.name} />
                    )}
                    keyExtractor={(item) => item.name}
                  />
                </>
              )}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pagerNavigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginBottom: 20,
  },
  pagerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,

    padding: 10,
    borderRadius: 10,
  },
  container: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loading: {
    marginTop: 32,
    marginBottom: 10,
    textAlign: "center",
  },
});
