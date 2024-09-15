import { useState } from "react"
import { Header } from "@components/header"
import { Container, GroudCardList } from "./styles"
import { Highlight } from "@components/highlight"
import { GroupCard } from "@components/group-card"
import { Button } from "@components/button"
import { ListEmpty } from "@components/list-empty"

export function GroupScreen() {
   const [groups, setGroups] = useState<Array<string>>([])

   return (
      <Container>
         <Header />
         <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>

         <GroudCardList
            data={groups}
            showsVerticalScrollIndicator={false}
            renderItem={(group) => <GroupCard
               title={group.item as string}
               key={group.index}
            />}
            contentContainerStyle={groups.length === 0 && {flex: 0.8}}
            ListEmptyComponent={() => <ListEmpty title="Cadastre uma nova turma"/>}
         >
         </GroudCardList>

         <Button
            onPress={() => {}}
            title="Criar nova turma"
         />
      </Container>
   )
}