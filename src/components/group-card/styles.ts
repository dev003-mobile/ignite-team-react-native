import { styled } from "styled-components/native"
import { UsersThree } from "phosphor-react-native"

export const Container = styled.TouchableOpacity(({ theme }) => ({
   width: "100%",
   gap: 10,
   height: 80,
   flexDirection: "row",
   paddingLeft: 29,
   paddingRight: 29,
   marginBottom: 10,
   borderRadius: 6,
   alignItems: "center",
   justifyContent: "flex-start",
   backgroundColor: theme.COLORS.GRAY_500,
}))

export const Title = styled.Text(({ theme }) => ({
   color: theme.COLORS.GRAY_100,
   fontFamily: theme.FONT_FAMILY.REGULAR,
   fontSize: theme.FONT_SIZE.MD
}))

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
   weight: "fill",
   color: theme.COLORS.GREEN_500
}))({ })