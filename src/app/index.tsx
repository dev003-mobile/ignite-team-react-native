import Theme from "@themes/theme"
import { StatusBar } from "expo-status-bar"
import { GroupScreen } from "@screens/group-screen"
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
         { isLoading && <GroupScreen /> }
      </ThemeProvider>
   )
}