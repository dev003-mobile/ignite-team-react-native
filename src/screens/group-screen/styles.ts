import { styled } from "styled-components/native"

export const Container = styled.View(({ theme }) => ({
   flex: 1,
   padding: 24,
   backgroundColor: theme.COLORS.GRAY_600
}))

export const GroudCardList = styled.FlatList({
   flex: 1,
   paddingTop: 40,
   paddingBottom: 10,
})