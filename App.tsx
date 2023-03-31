import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { ThemeProvider } from "styled-components";
import theme from './theme'

import DietRecord from "./src/screens/DietRecord";
import { Loading } from "./src/components/Loading";

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ?
        <DietRecord />

        :
        <Loading />
      }
    </ThemeProvider>

  )
}