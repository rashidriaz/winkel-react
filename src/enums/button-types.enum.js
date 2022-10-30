import {BaseButton, GoogleSignInButton, InvertedButton} from "../components/button/button.styles";

const BUTTON_TYPES = {
  google: "google",
  inverted: "inverted",
  base: "default",
}

export const getButton = (buttonType)=>{
  return (
    {
      [BUTTON_TYPES.base]: BaseButton,
      [BUTTON_TYPES.google]: GoogleSignInButton,
      [BUTTON_TYPES.inverted]: InvertedButton,
    }[buttonType]
  );
}
