import { useState } from "react"
import { Header } from "@components/header"
import { Container, GroudCardList } from "./styles"
import { Highlight } from "@components/highlight"
import { GroupCard } from "@components/group-card"
import { Button } from "@components/button"
import { ListEmpty } from "@components/list-empty"
import { useNavigation } from "@react-navigation/native"

export function GroupScreen() {
   const [groups, _] = useState<Array<string>>([])

   const { navigate } = useNavigation()

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
            onPress={() => navigate("/new-group-screen")}
            title="Criar nova turma"
         />
      </Container>
   )
}