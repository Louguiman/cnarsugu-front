import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Step1 from "../screens/App/Step1";
import Step2 from "../screens/App/Step2";
import Coverage from "../screens/App/Coverage";
import Enrolment from "../screens/App/Enrolment";
import Contact from "../screens/App/Contact";
import Checkout from "../screens/App/Checkout";
import Confirmation from "../screens/App/Confirmation";
import VehicleDetails from "../screens/App/VehicleDetails";
import Receipt from "../screens/App/Receipt";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="Coverage" component={Coverage} />
      <Stack.Screen name="Enrolment" component={Enrolment} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      <Stack.Screen name="Receipt" component={Receipt} />
    </Stack.Navigator>
  );
};

export default App;
