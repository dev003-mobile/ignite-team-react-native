import AsyncStorage from "@react-native-async-storage/async-storage"

import { PlayerDTO } from "./dto/player-dto"
import { AppError } from "@utils/errors/app-error"
import { PLAYER_COLLECTION } from "@storage/storage-config"
import { getAllPlayersByClassName } from "./get-players-by-class"

export async function createPlayerByClassName(className: string, newPlayer: PlayerDTO) {
   try {
      const allPlayers: Array<PlayerDTO> = await getAllPlayersByClassName(className)
      const playerAlreadyExists: Array<PlayerDTO> = allPlayers.filter((oldPlayer) => oldPlayer.name === newPlayer.name)
      if (playerAlreadyExists.length > 0) {
         throw new AppError("Essa pessoa já está adicionada em um time aqui")
      }

      await AsyncStorage.setItem(`${PLAYER_COLLECTION} - ${className}`, JSON.stringify([...allPlayers, newPlayer]))
   } catch (error) {

   }
}