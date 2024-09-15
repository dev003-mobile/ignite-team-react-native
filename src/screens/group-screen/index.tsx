import { Container, GroudCardList } from "./styles"
import { Header } from "@components/header"
import { Highlight } from "@components/highlight"
import { GroupCard } from "@components/group-card"

export function GroupScreen() {
   return (
      <Container>
         <Header />
         <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>

         <GroudCardList
            data={["", ""]}
            renderItem={(item) => <GroupCard title="Nome da turma"/>}
         >
         </GroudCardList>
      </Container>
   )
}