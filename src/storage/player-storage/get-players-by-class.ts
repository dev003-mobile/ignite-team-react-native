import AsyncStorage from "@react-native-async-storage/async-storage"

import { PLAYER_COLLECTION } from "@storage/storage-config"
import { PlayerDTO } from "./dto/player-dto"

export async function getAllPlayersByClassName(className: string) : Promise<Array<PlayerDTO>> {
   try {
      const storage: string | null = await AsyncStorage.getItem(`${PLAYER_COLLECTION} - ${className}`)
      const allPlayers: Array<PlayerDTO> = storage != null ? JSON.parse(storage) : []
      return allPlayers
   } catch (error) {
      throw error
   }
}