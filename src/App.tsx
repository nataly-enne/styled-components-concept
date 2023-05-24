import { ThemeProvider, styled } from 'styled-components';
import { theme } from './theme';

enum ButtonTypeEnum {
  primary,
  normal,
}
interface IProps {
  buttonType?: ButtonTypeEnum,
}
const Button = styled.button<IProps>`
  margin: 8px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: none;
  cursor: pointer;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border-radius: 10px;
  
  ${props => {
    switch (props.buttonType) {
      case ButtonTypeEnum.primary:
        return `
          color: ${props.theme.colors.white};
          background-color: ${props.theme.button.primary};
          &:hover{
            background-color: ${props.theme.button.primaryDark};
          }
        `;
      case ButtonTypeEnum.normal:
      default:
        return `
          color: ${props.theme.colors.white};
          background-color: ${props.theme.button.secondary};
          &:hover{
            background-color: ${props.theme.button.secondaryDark};
          }
        `;
    }
  }}
`;

const H4Styled = styled.h4`
  color: ${({ theme }) => theme.colors.blue};
  margin: 8px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Normal Button</Button>
      <Button
        buttonType={ButtonTypeEnum.primary}
      >
      Primary Button
     </Button>
     <H4Styled>Sem IProps</H4Styled>
    </ThemeProvider>
  )
}

export default App;
