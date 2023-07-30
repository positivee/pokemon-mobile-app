import Pokemons from "@/components/Pokemons";
import globalStyles from "@/styles/globalStyles";
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            source={{ uri: "/assets/images/pokemon.png" }}
            style={globalStyles.imgSize}
          />

          <Pokemons />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
});
