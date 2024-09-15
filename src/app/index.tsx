import Theme from "@themes/theme"
import { StatusBar } from "expo-status-bar"
import { GroupScreen } from "@screens/group-screen"
import { PlayersScreen } from "@screens/players-screen"
import { ThemeProvider } from "styled-components/native"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { NewGroupScreen } from "@screens/new-group-screen"

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
         { isLoading && <PlayersScreen /> }
      </ThemeProvider>
   )
}