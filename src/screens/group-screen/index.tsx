import { Container } from "./styles"
import { Header } from "@components/header"
import { Highlight } from "@components/highlight"


export function GroupScreen() {
   return (
      <Container>
         <Header />
         <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>
      </Container>
   )
}