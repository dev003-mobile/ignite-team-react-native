import AsyncStorage from "@react-native-async-storage/async-storage"

import { getAllClasses } from "./get-all-classes"
import { CLASS_COLLECTION } from "@storage/storage-config"

export async function deleteClassName(className: string): Promise<any> {
   try {
      const allClassNames: Array<string> = await getAllClasses()
      const allClassFiltered: Array<string> = allClassNames.filter((oldClassName) => oldClassName !== className)
      await AsyncStorage.setItem(CLASS_COLLECTION, JSON.stringify([...allClassFiltered]))
   } catch (error) {
      throw error
   }
}