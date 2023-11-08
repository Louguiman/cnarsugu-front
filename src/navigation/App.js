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
import Product from "../screens/App/Product";
import {
  CHECKOUT_SCREEN,
  CONFIRMATION_SCREEN,
  CONTACT_SCREEN,
  COVERAGE_SCREEN,
  DEVIS_SCREEN,
  ENROLMENT_SCREEN,
  PRODUCT_SCREEN,
  RECEIPT_SCREEN,
  STEP1_SCREEN,
  STEP2_SCREEN,
  VEHICLE_DETAILS_SCREEN,
} from "./routeNames";
import ConfirmationDevis from "../screens/App/ConfirmationDevis";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName={VEHICLE_DETAILS_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={STEP1_SCREEN} component={Step1} />
      <Stack.Screen name={STEP2_SCREEN} component={Step2} />
      <Stack.Screen name={COVERAGE_SCREEN} component={Coverage} />
      <Stack.Screen name={PRODUCT_SCREEN} component={Product} />
      <Stack.Screen name={ENROLMENT_SCREEN} component={Enrolment} />
      <Stack.Screen name={CONTACT_SCREEN} component={Contact} />
      <Stack.Screen name={CHECKOUT_SCREEN} component={Checkout} />
      <Stack.Screen name={CONFIRMATION_SCREEN} component={Confirmation} />
      <Stack.Screen name={VEHICLE_DETAILS_SCREEN} component={VehicleDetails} />
      <Stack.Screen name={RECEIPT_SCREEN} component={Receipt} />
      <Stack.Screen name={DEVIS_SCREEN} component={ConfirmationDevis} />
    </Stack.Navigator>
  );
};

export default App;
