import { TextInputProps } from "react-native"
import { TouchableOpacity } from "react-native"
import { Container, InputText, AddIcon } from "./styles"

type InputProps = TextInputProps & {
   showButtonAdd?: boolean
   onPress?: () => void
}

export function Input({ showButtonAdd = false, onPress, ...rest } : InputProps) {
   return (
      <Container showAddButton={showButtonAdd}>
         <InputText autoCorrect={false} showAddButton={showButtonAdd} {...rest} />

         { showButtonAdd &&
            <TouchableOpacity onPress={onPress}>
               <AddIcon />
            </TouchableOpacity>
         }
      </Container>
   )
}