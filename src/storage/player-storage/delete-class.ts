import AsyncStorage from "@react-native-async-storage/async-storage"

import { CLASS_COLLECTION, PLAYER_COLLECTION } from "@storage/storage-config"

export async function deleteParticipantsByTeam(className: string): Promise<any> {
   try {
      await AsyncStorage.removeItem(`${PLAYER_COLLECTION} - ${className}`)
   } catch (error) {
      throw error
   }
}