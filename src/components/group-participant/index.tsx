import { TouchableOpacity } from "react-native"
import { TouchableOpacityProps } from "react-native"
import { Container, ContentItems, UserIcon, Title, RemoveIcon } from "./styles"

type GroupParticipantProps = TouchableOpacityProps & {
   title: string
}

export function GroupParticipant({ title, ...rest } : GroupParticipantProps) {
   return (
      <Container>
         <ContentItems>
            <UserIcon />
            <Title> { title } </Title>
         </ContentItems>

         <TouchableOpacity {...rest}>
            <RemoveIcon />
         </TouchableOpacity>
      </Container>
   )
}