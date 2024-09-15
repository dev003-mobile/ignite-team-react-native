import { TouchableOpacityProps } from "react-native"
import { Container, Title, ButtonType } from "./styles"

type ButtonProps = TouchableOpacityProps & {
   type?: ButtonType,
   title: string
}

export function Button({ title, type = "PRIMARY", ...rest } : ButtonProps) {
   return (
      <Container {...rest} type={type}>
         <Title> { title } </Title>
      </Container>
   )
}