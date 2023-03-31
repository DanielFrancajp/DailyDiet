import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { ThemeProvider } from "styled-components";
import theme from './theme'

import Statistics from "./src/screens/Statistics";
import { Loading } from "./src/components/Loading";

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ?
        <Statistics />

        :
        <Loading />
      }
    </ThemeProvider>

  )
}