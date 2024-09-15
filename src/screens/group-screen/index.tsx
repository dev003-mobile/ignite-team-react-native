import { Container, GroudCardList } from "./styles"
import { Header } from "@components/header"
import { Highlight } from "@components/highlight"
import { GroupCard } from "@components/group-card"
import { Button } from "@components/button"

export function GroupScreen() {
   return (
      <Container>
         <Header />
         <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>

         <GroudCardList
            data={[""]}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => <GroupCard
               title="Nome da turma"
               onPress={() => {}}
            />}
         >
         </GroudCardList>

         <Button
            onPress={() => {}}
            title="Criar nova turma"
         />
      </Container>
   )
}