import { User, X } from "phosphor-react-native"
import { styled } from "styled-components/native"

export const Container = styled.View(({ theme }) => ({
   flexDirection: "row",
   width: "100%",
   minHeight: 54,
   maxHeight: 54,
   borderRadius: 6,
   marginBottom: 15,
   paddingLeft: 17,
   paddingRight: 17,
   alignItems: "center",
   justifyContent: "space-between",
   backgroundColor: theme.COLORS.GRAY_500
}))

export const ContentItems = styled.View({
   gap: 5,
   flexDirection: "row",
})

export const RemoveIcon = styled(X).attrs(({ theme }) => ({
   size: 18,
   color: theme.COLORS.RED_DARK
}))({})

export const Title = styled.Text(({ theme }) => ({
   color: theme.COLORS.GRAY_200,
   fontSize: theme.FONT_SIZE.MD,
   fontFamily: theme.FONT_FAMILY.REGULAR
}))

export const UserIcon = styled(User).attrs(({ theme }) => ({
   size: 18,
   weight: "regular",
   color: theme.COLORS.GRAY_200
}))({})