import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  roundness: 10, // Increase roundness here 
  colors: {
    ...DefaultTheme.colors,
    primary: "#1e90ff", // Color principal
    accent: "#ff6347", // Color de acento
    background: "#fff", // Fondo de las pantallas
    text: "#333333", // Color del texto
  },
};