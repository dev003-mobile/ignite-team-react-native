import { CLASS_COLLECTION } from "@storage/storage-config"
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function getAllClasses() : Promise<Array<string>> {
   try {
      const allClasses: string | null = await AsyncStorage.getItem(CLASS_COLLECTION)
      const classes: Array<string> = allClasses != null ? JSON.parse(allClasses) : []
      return classes
   } catch (error) {
      throw error
   }
}