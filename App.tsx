import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import theme from './theme'

import Home from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ?
        <Home />
       
        :
        <Loading />
      }
    </ThemeProvider>

  )
}