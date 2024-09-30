import AsyncStorage from "@react-native-async-storage/async-storage"

import { CLASS_COLLECTION } from "@storage/storage-config"

import { getAllClasses } from "./get-all-classes"
import { AppError } from "@utils/errors/app-error"

export async function classCreate(className: string) {
   try {
      const allClasses: Array<string> = await getAllClasses()
      const classAlreadyExists: boolean = allClasses.includes(className)

      if (classAlreadyExists) {
         throw new AppError("Já existe uma classe cadastrada")
      } else {
         await AsyncStorage.setItem(CLASS_COLLECTION, JSON.stringify([...allClasses, className]))
      }

   } catch (error) {
      throw error
   }
}