import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",

        headerRight: () => (
          <Link href="/copyright" asChild>
            <Pressable>
              {({ pressed }) => (
                <Ionicons
                  name="information-circle-outline"
                  size={25}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                ></Ionicons>
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokemon App",
          tabBarLabel: "All pokemons",
          tabBarIcon: () => <Ionicons name="home-outline" size={20} />,
          tabBarInactiveTintColor: "#222222",
        }}
      />
      <Tabs.Screen
        name="favList"
        options={{
          headerTitle: "Your liked pokemons",
          tabBarLabel: "Liked Pokemons",
          tabBarIcon: () => <Ionicons name="bookmark-outline" size={20} />,
          tabBarInactiveTintColor: "#222222",
        }}
      />
    </Tabs>
  );
}
