import { useState } from "react"
import { Alert, Keyboard } from "react-native"

import { Container, ContentContainer, Icon } from "./styles"
import { classCreate } from "@storage/class-storage/create-class"

import { Input } from "@components/input"
import { Button } from "@components/button"
import { Header } from "@components/header"
import { Highlight } from "@components/highlight"
import { useNavigation } from "@react-navigation/native"

export function NewGroupScreen() {
   const [className, setClassName] = useState<string>("")
   const { navigate } = useNavigation()

   async function handleCreateClassName(className: string) {
      Keyboard.dismiss()

      if (className.length === 0) {
         return Alert.alert(
            "Inválido",
            "Informe obrigatoriamente o nome da turma!",
            [
               {
                  text: "Ok",
                  style: "default"
               }
            ]
         )
      }
      
      try {
         await classCreate(className)
         return navigate("/players-screen", {className: className})
      } catch (error) {
         throw error
      }
   }

   return (
      <Container>
         <Header type="SECONDARY"/>

         <ContentContainer>
            <Icon />
            <Highlight title="Nova Turma" subtitle="Crie uma turma para adicionar pessoas"/>

            <Input
               value={className}
               onChangeText={setClassName}
               placeholder="Nome da turma"
            />
            <Button
               title="Criar"
               onPress={() => handleCreateClassName(className)}
            />
         </ContentContainer>
      </Container>
   )
}