import { styled } from "styled-components/native"

export type ButtonType = "PRIMARY" | "SECONDARY"

type ButtonStyleProps = {
   type?: ButtonType
}

export const Container = styled.TouchableOpacity<ButtonStyleProps>(({ type, theme }) => ({
   height: 56,
   width: "100%",
   borderRadius: 6,
   alignItems: "center",
   justifyContent: "center",
   backgroundColor: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
}))

export const Title = styled.Text(({ theme }) => ({
   color: theme.COLORS.WHITE,
   fontFamily: theme.FONT_FAMILY.BOLD,
   fontSize: theme.FONT_SIZE.MD
}))