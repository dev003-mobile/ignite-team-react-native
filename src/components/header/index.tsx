import logo from "@assets/logo.png"
import { TouchableOpacity } from "react-native"
import { Container, Logo, BackButton, HeaderProps } from './styles'

export function Header({ type = "PRIMARY" } : HeaderProps) {
   return (
      <Container type={type}>
         { type === "SECONDARY" &&
            <TouchableOpacity onPress={() => {}}>
               <BackButton />
            </TouchableOpacity>
         }

         <Logo source={logo}/>
      </Container>
   )
}