import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      black: string;
      white: string;
      blue: string;
    };
    button: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
    };
  }
}
