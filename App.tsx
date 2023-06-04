import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Beef = () => {
  return (
    <View>
      <Text>Beef</Text>
    </View>
  );
};

const Chicken = () => {
  return (
    <View>
      <Text>Chicken</Text>
    </View>
  );
};

const Main = ({ navigation }: any) => {
  return (
    <View style={{ paddingHorizontal: "10%" }}>
      <Text>Welcome to BBQ It, the app that helps you BBQ!</Text>
      <Text>To get started, select a meat</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Beef")}>
        <Text>Beef</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Beef" component={Beef} />
            <Stack.Screen name="Chicken" component={Chicken} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    ...StyleSheet.absoluteFillObject,
  },
  text: {
    width: "100%",
    flex: 3,
    backgroundColor: "#fff",

    paddingVertical: "10%",
    justifyContent: "center",

    ...StyleSheet.absoluteFillObject,
  },
});
