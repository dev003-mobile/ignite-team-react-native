import AsyncStorage from "@react-native-async-storage/async-storage"

import { CLASS_COLLECTION } from "@storage/storage-config"

import { getAllClasses } from "./get-all-classes"

export async function classCreate(className: string) {
   try {
      const allClasses: Array<string> = await getAllClasses()
      await AsyncStorage.setItem(CLASS_COLLECTION, JSON.stringify([...allClasses, className]))
   } catch (error) {
      throw error
   }
}