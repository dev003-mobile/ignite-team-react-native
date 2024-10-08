import { styled } from "styled-components/native"
import { UsersThree } from "phosphor-react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)(({ theme }) => ({
   flex: 1,
   paddingLeft: 24,
   paddingRight: 24,
   paddingBottom: 24,
   alignItems: "center",
   backgroundColor: theme.COLORS.GRAY_600
}))

export const ContentContainer = styled.View({
   flex: 1,
   width: "100%",
   alignItems: "center",
   paddingBottom: 120,
   justifyContent: "center",
})

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
   size: 56,
   weight: "regular",
   color: theme.COLORS.GREEN_500
}))({ })