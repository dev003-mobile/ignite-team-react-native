import AsyncStorage from "@react-native-async-storage/async-storage"

import { PlayerDTO } from "./dto/player-dto"
import { PLAYER_COLLECTION } from "@storage/storage-config"
import { getAllPlayersByClassName } from "./get-players-by-class"

export async function deletePlayerByTeam(className: string, player: PlayerDTO) : Promise<Array<PlayerDTO>> {
   try {
      const allPlayersByClassName: Array<PlayerDTO> = await getAllPlayersByClassName(className)
      const allPlayersByTeam: Array<PlayerDTO> = allPlayersByClassName.filter((oldPlayer) => oldPlayer.team === player.team)
      const newAllPlayersByTeam: Array<PlayerDTO> = allPlayersByTeam.filter((oldPlayer) => oldPlayer.name !== player.name)
      await AsyncStorage.setItem(`${PLAYER_COLLECTION} - ${className}`, JSON.stringify(newAllPlayersByTeam))
      return newAllPlayersByTeam
   } catch (error) {
      throw error
   }
}