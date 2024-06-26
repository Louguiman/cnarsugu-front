
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import RootStack from "./src/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { isTablet } from "./src/utils/Styles";
import { Platform } from "react-native";
import NotAMobileScreen from "./src/screens/App/NotAMobileScreen";
import { default as AppMobile } from './App.js'
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 10));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (!isTablet && Platform.OS === "web") {
    return <AppMobile />;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {/* <SafeAreaView style={{flex:1}}> */}

      <StatusBar style="inverted" />
      <RootStack />
      {/* <Toast config={toastConfig} position="bottom" bottomOffset={20} /> */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}
