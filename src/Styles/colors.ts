import { StyleSheet } from "react-native";

export const neutral = {
  100: "#FFFFFF",
  200: "#F8F9F9",
  300: "#EBECF0",
  600: "#939393",
  700: "#707070",
  800: "#656565",
  900: "#0D0D0D",
};

export const theme = {
  "red-100": "#EB5A46",
  "red-200": "#E74570",
  yellow: "#FFC400",
  green: "#70b500",
  "blue-100": "#2CA7EF",
  "blue-200": "#3179BE",
  "blue-300": "#2A6AA6",
  "blue-400": "#083854",
  "purple-100": "#DC2BF1",
  "purple-200": "#6554C0",
  "purple-300": "#403294",
};

// neutral[800];

export const background = {
  neutral: StyleSheet.create({
    100: {
      backgroundColor: neutral[100],
    },
    600: {
      backgroundColor: neutral[600],
    },
    700: {
      backgroundColor: neutral[700],
    },
    800: {
      backgroundColor: neutral[800],
    },
    900: {
      backgroundColor: neutral[900],
    },
  }),
  theme: {
    // ...
  },
};

export const text = {
  neutral: StyleSheet.create({
    100: {
      color: neutral[100],
    },
    600: {
      color: neutral[600],
    },
    700: {
      color: neutral[700],
    },
    800: {
      color: neutral[800],
    },
    900: {
      color: neutral[900],
    },
  }),
  theme: {
    // ...
  },
};
