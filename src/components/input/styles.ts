import { Plus } from "phosphor-react-native"
import { styled } from "styled-components/native"

export const Container = styled.View({
   width: "100%",
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "center"
})

export const InputText = styled.TextInput.attrs(({ theme }) => ({
   placeholderTextColor: theme.COLORS.GRAY_300,
   fontSize: theme.FONT_SIZE.MD,
   cursorColor: theme.COLORS.WHITE,
   fontFamily: theme.FONT_FAMILY.REGULAR,
}))(({ theme }) => ({
   minHeight: 56,
   maxHeight: 56,
   width: "100%",
   borderRadius: 6,
   paddingLeft: 21,
   marginBottom: 20,
   color: theme.COLORS.WHITE,
   backgroundColor: theme.COLORS.GRAY_700
}))

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
   size: 24,
   color: theme.COLORS.GREEN_700
}))({
   paddingRight: 20,
   position: "absolute",
})