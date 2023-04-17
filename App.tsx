import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { ThemeProvider } from "styled-components";
import theme from './theme'

import RightScreen from "./src/screens/RightScreen";
import { Loading } from "./src/components/Loading";

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ?
        <RightScreen />

        :
        <Loading />
      }
    </ThemeProvider>

  )
}