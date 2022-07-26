import {ButtonTypes} from "../../enums/button-types";
import "./button.styles.scss"
export const Button = ({child, buttonType, ...otherProps}) => {
    return (
        <button {...otherProps} className={`button-container  ${ButtonTypes[buttonType]}`} >
            {child}
        </button>
    )
}
