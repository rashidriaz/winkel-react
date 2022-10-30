import {getButton} from "../../enums/button-types.enum";
import {ButtonImage} from "./button.styles"

export const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...otherProps}>
            {buttonType === "google" && <ButtonImage src="/google.svg" alt="google"/>}{children}
        </CustomButton>
    )
}
