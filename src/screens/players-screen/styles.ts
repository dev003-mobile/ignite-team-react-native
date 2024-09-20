import { styled } from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)(({ theme }) => ({
   flex: 1,
   paddingLeft: 24,
   paddingRight: 24,
   paddingBottom: 24,
   backgroundColor: theme.COLORS.GRAY_600
}))

export const GroudParticipantsList = styled.FlatList({
   flex: 1,
   marginBottom: 10,
})

export const ContainerFilter = styled.View({
   paddingBottom: 5,
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
})

export const ContentFilter = styled.View({
   gap: 5,
   paddingTop: 5,
   paddingBottom: 20,
   flexDirection: "row"
})

export const CounterText = styled.Text(({ theme }) => ({
   fontFamily:  theme.FONT_FAMILY.BOLD,
   fontSize: theme.FONT_SIZE.SM,
   color: theme.COLORS.GRAY_200,
}))