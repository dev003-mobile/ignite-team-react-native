import { TextInputProps } from "react-native"
import { TouchableOpacity } from "react-native"
import { TouchableOpacityProps } from "react-native"
import { Container, InputText, AddIcon } from "./styles"

type InputProps = TouchableOpacityProps & TextInputProps & {
   showButtonAdd?: boolean
}

export function Input({ showButtonAdd = false, ...rest } : InputProps) {
   return (
      <Container>
         <InputText {...rest} />

         { showButtonAdd &&
            <TouchableOpacity {...rest}>
               <AddIcon />
            </TouchableOpacity>
         }
      </Container>
   )
}