import { Plus } from "phosphor-react-native"
import { styled } from "styled-components/native"

type InputStyleProps = {
   showAddButton?: boolean
}

export const Container = styled.View<InputStyleProps>(({ showAddButton = false, theme }) => ({
   width: "100%",
   minHeight: 56,
   maxHeight: 56,
   paddingLeft: 21,
   paddingRight: showAddButton ? 35 : 21,
   flexDirection: "row",
   alignItems: "center",
   marginBottom: 20,
   borderRadius: 6,
   backgroundColor: theme.COLORS.GRAY_700
}))

export const InputText = styled.TextInput.attrs<InputStyleProps>(({ theme }) => ({
   placeholderTextColor: theme.COLORS.GRAY_300,
   fontSize: theme.FONT_SIZE.MD,
   cursorColor: theme.COLORS.WHITE,
   fontFamily: theme.FONT_FAMILY.REGULAR,
}))(({ showAddButton = false, theme }) => ({
   width: "100%",
   paddingRight: showAddButton ? 5 : 0,
   color: theme.COLORS.WHITE,
}))

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
   size: 20,
   color: theme.COLORS.GREEN_700
}))({ })