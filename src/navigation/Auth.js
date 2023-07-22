import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/Auth/Onboarding";
import Terms from "../screens/Auth/Terms";

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Terms" component={Terms} />
    </Stack.Navigator>
  );
};

export default Auth;
