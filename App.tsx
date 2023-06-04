import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  useTheme,
} from "react-native-paper";
import { red100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

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
    <View style={{ paddingHorizontal: "10%", backgroundColor: "red", flex: 1 }}>
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
  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <View
          style={{ backgroundColor: theme.colors.primary, ...styles.container }}
        >
          <View
            style={{
              ...styles.text,
            }}
          >
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Beef" component={Beef} />
              <Stack.Screen name="Chicken" component={Chicken} />
            </Stack.Navigator>
          </View>
        </View>
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",

    ...StyleSheet.absoluteFillObject,
  },
  text: {
    width: "100%",
    flex: 1,

    paddingVertical: "10%",
    justifyContent: "center",

    ...StyleSheet.absoluteFillObject,
  },
});
