import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StoreProvider } from "easy-peasy";
import { store } from "../store/global";
//Screens
import App from "./App";
import Auth from "./Auth";
import { APP_STACK_SCREENS } from "./routeNames";

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <StoreProvider store={store}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name={APP_STACK_SCREENS} component={App} />
      </Stack.Navigator>
    </StoreProvider>
  );
};

export default RootStack;
// return (
//   <Stack.Navigator
//     initialRouteName="Auth"
//     screenOptions={{ headerShown: false }}
//   >
//     {!isSignedIn ? (
//       <Stack.Screen name="Auth" component={Auth} />
//     ) : isAdmin && isTablet ? (
//       <Stack.Screen name="Admin" component={Admin} />
//     ) : (
//       <Stack.Screen name="App" component={App} />
//     )}
//   </Stack.Navigator>
// );
