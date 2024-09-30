import { useState, useEffect, useCallback } from "react"
import { useNavigation, useFocusEffect } from "@react-navigation/native"

import { Container, GroudCardList } from "./styles"

import { Header } from "@components/header"
import { Button } from "@components/button"
import { Highlight } from "@components/highlight"
import { ListEmpty } from "@components/list-empty"
import { GroupCard } from "@components/group-card"
import { getAllClasses } from "@storage/class-storage/get-all-classes"

export function GroupScreen() {
   const [classes, setClasses] = useState<Array<string>>([])
   const { navigate } = useNavigation()

   async function allClasses() {
      try {
         const getClasses: Array<string> = await getAllClasses()
         setClasses(getClasses)
      } catch (error) {
         throw error
      }
   }

   useFocusEffect(useCallback(() => {
      allClasses()
   }, []))

   return (
      <Container>
         <Header />
         <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>

         <GroudCardList
            data={classes}
            showsVerticalScrollIndicator={false}
            renderItem={(group) => <GroupCard
               key={group.index}
               onPress={() => navigate("/players-screen", {
                  className: group.item as string
               })}
               title={group.item as string}
            />}
            contentContainerStyle={classes.length === 0 && {flex: 0.8}}
            ListEmptyComponent={() => <ListEmpty title="Cadastre uma nova turma"/>}
         >
         </GroudCardList>

         <Button
            onPress={() => navigate("/new-group-screen")}
            title="Criar nova turma"
         />
      </Container>
   )
}