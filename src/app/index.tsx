import Theme from "@themes/theme"
import { StatusBar } from "expo-status-bar"
import { GroupScreen } from "@screens/group-screen"
import { ThemeProvider } from "styled-components/native"

export function App() {
   return (
      <ThemeProvider theme={Theme}>
         <StatusBar
            animated
            translucent
            style="dark"
            backgroundColor="transparent"
         />
         <GroupScreen />
      </ThemeProvider>
   )
}