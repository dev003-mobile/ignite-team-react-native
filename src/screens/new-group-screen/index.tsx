import { Input } from "@components/input"
import { Button } from "@components/button"
import { Header } from "@components/header"
import { Highlight } from "@components/highlight"
import { Container, ContentContainer, Icon } from "./styles"

export function NewGroupScreen() {
   return (
      <Container>
         <Header type="SECONDARY"/>

         <ContentContainer>
            <Icon />
            <Highlight title="Nova Turma" subtitle="Crie uma turma para adicionar pessoas"/>

            <Input placeholder="Nome da turma"/>
            <Button title="Criar"/>
         </ContentContainer>
      </Container>
   )
}