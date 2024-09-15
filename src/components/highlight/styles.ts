import { styled } from "styled-components/native"

export const Container = styled.View({
   width: "100%",
   alignItems: "center",
   paddingTop: 30,
   marginBottom: 40,
   justifyContent: "center",
})

export const Title = styled.Text(({ theme }) => ({
   color: theme.COLORS.WHITE,
   fontFamily: theme.FONT_FAMILY.BOLD,
   fontSize: theme.FONT_SIZE.XL
}))

export const Subtitle = styled.Text(({ theme }) => ({
   color: theme.COLORS.GRAY_300,
   fontFamily: theme.FONT_FAMILY.REGULAR,
   fontSize: theme.FONT_SIZE.MD
}))