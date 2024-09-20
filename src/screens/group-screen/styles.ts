import { styled } from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)(({ theme }) => ({
   flex: 1,
   paddingLeft: 24,
   paddingRight: 24,
   paddingBottom: 24,
   backgroundColor: theme.COLORS.GRAY_600
}))

export const GroudCardList = styled.FlatList({
   flex: 1,
   marginBottom: 10,
})