import { CaretLeft } from "phosphor-react-native"
import { styled } from "styled-components/native"
import { TouchableOpacityProps } from "react-native"

export type HeaderType = "PRIMARY" | "SECONDARY"

interface HeaderStyleProps {
   type?: HeaderType
}

export const Container = styled.View<HeaderStyleProps>(({ type }) => ({
   width: "100%",
   flexDirection: "row",
   alignItems: "center",
   justifyContent: type === "PRIMARY" ? "center" : "space-between",
   paddingTop: 22
}))

export const Logo = styled.Image({ })

export const BackButton = styled(CaretLeft).attrs(({ theme }) => ({
   size: 32,
   color: theme.COLORS.WHITE
}))({ })