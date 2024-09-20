import { GroupScreen } from "@screens/group-screen"
import { NewGroupScreen } from "@screens/new-group-screen"
import { PlayersScreen } from "@screens/players-screen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
   return (
      <Navigator screenOptions={{headerShown: false}}>
         <Screen name="/groups-screen" component={GroupScreen} />
         <Screen name="/new-group-screen" component={NewGroupScreen} />
         <Screen name="/players-screen" component={PlayersScreen} />
      </Navigator>
   )
}