import type { ExpoConfig } from "@expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";
const IS_PRODUCTION = process.env.APP_VARIANT === "production";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.a_chatare.easdemo.dev";
  }
  if (IS_PREVIEW) {
    return "com.a_chatare.easdemo.preview";
  }
  if (IS_PRODUCTION) {
    return "com.a_chatare.easdemo";
  }
  return "com.a_chatare.easdemo";
};

const getAppName = () => {
  if (IS_DEV) {
    return "EAS Demo Dev";
  }
  if (IS_PREVIEW) {
    return "EAS Demo Preview";
  }
  if (IS_PRODUCTION) {
    return "EAS Demo";
  }
  return "EAS Demo";
};

export default {
  expo: {
    name: getAppName(),
    slug: "easdemo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "easdemo",
    userInterfaceStyle: "automatic",
    ios: {
      icon: "./assets/expo.icon",
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
      package: getUniqueIdentifier(),
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#208AEF",
          image: "./assets/images/splash-icon.png",
          imageWidth: 76,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    updates: {
      url: "https://u.expo.dev/2aa87890-ea1e-49f3-8d59-3568538d8dcc",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    extra: {
      router: {},
      eas: {
        projectId: "2aa87890-ea1e-49f3-8d59-3568538d8dcc",
      },
    },
  } satisfies ExpoConfig,
};
