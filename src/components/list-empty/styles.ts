import { styled } from "styled-components/native"

export const Container = styled.View({
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
})

export const Title = styled.Text(({ theme }) => ({
   textAlign: "center",
   fontSize: theme.FONT_SIZE.SM,
   fontFamily: theme.FONT_FAMILY.REGULAR,
   color: theme.COLORS.GRAY_300,
}))