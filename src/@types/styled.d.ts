import "styled-components/native";
import Theme from "@themes/theme"

declare module "styled-components/native" {
   type ThemeType = typeof Theme

   export interface DefaultTheme extends ThemeType {}
}