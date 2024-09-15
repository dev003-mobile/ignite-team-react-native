import logo from "@assets/logo.png"
import { TouchableOpacity } from "react-native"
import { TouchableOpacityProps } from "react-native"
import { Container, Logo, BackButton, HeaderType } from './styles'

type HeaderProps = TouchableOpacityProps & {
   type?: HeaderType
}

export function Header({ type = "PRIMARY", ...rest } : HeaderProps) {
   return (
      <Container type={type}>
         { type === "SECONDARY" &&
            <TouchableOpacity {...rest}>
               <BackButton />
            </TouchableOpacity>
         }

         <Logo source={logo}/>
      </Container>
   )
}