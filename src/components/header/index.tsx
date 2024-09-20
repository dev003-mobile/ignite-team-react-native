import logo from "@assets/logo.png"
import { TouchableOpacity } from "react-native"
import { TouchableOpacityProps } from "react-native"
import { Container, Logo, BackButton, HeaderType } from './styles'
import { useNavigation } from "@react-navigation/native"

type HeaderProps = TouchableOpacityProps & {
   type?: HeaderType
}

export function Header({ type = "PRIMARY", ...rest } : HeaderProps) {
   const { goBack } = useNavigation()

   return (
      <Container type={type}>
         { type === "SECONDARY" &&
            <TouchableOpacity {...rest} onPress={() => goBack()}>
               <BackButton />
            </TouchableOpacity>
         }

         <Logo source={logo}/>
      </Container>
   )
}