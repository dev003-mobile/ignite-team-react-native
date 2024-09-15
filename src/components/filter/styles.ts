import { styled } from "styled-components/native"

export type FilterStyleProps = {
   isActive?: boolean
}

export const Container = styled.TouchableOpacity<FilterStyleProps>(({ isActive, theme }) => ({
   height: 38,
   width: 70,
   borderRadius: 4,
   alignItems: "center",
   justifyContent: "center",
   borderWidth: isActive ? 1 : 0,
   borderColor: isActive ? theme.COLORS.GREEN_700 : theme.COLORS.TRANSPARENT,
}))

export const Title = styled.Text<FilterStyleProps>(({ isActive, theme }) => ({
   fontFamily: theme.FONT_FAMILY.BOLD,
   fontSize: theme.FONT_SIZE.SM,
   color: isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_200,
}))