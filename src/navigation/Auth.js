import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/Auth/Onboarding";
import Terms from "../screens/Auth/Terms";
import { ONBOARDING_SCREEN, TERMS_AND_CONDITIONS, TERMS_AND_CONDITIONS_SCREEN } from "./routeNames";

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ONBOARDING_SCREEN}
    >
      <Stack.Screen name={ONBOARDING_SCREEN} component={Onboarding} />
      <Stack.Screen name={TERMS_AND_CONDITIONS_SCREEN} component={Terms} />
    </Stack.Navigator>
  );
};

export default Auth;
