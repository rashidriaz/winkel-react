import {ButtonTypesEnum} from "../../enums/button-types.enum";
import "./button.styles.scss"

export const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button {...otherProps} className={`button-container  ${ButtonTypesEnum[buttonType]}`}>
            {buttonType === "google" && <img src="/google.svg" alt="google"/>}{children}
        </button>
    )
}
