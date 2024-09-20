import Theme from "@themes/theme"
import { Routes } from "@routes/index"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components/native"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

export function App() {
   const [isLoading] = useFonts({Roboto_400Regular, Roboto_700Bold})

   return (
      <ThemeProvider theme={Theme}>
         <StatusBar
            animated
            translucent
            style="light"
            backgroundColor={Theme.COLORS.TRANSPARENT}
         />
         { isLoading && <Routes /> }
      </ThemeProvider>
   )
}