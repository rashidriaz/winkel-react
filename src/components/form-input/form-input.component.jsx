import "./form-input.styles.scss"

export const FormInput = ({label, ...otherProps}) => {

    const getLabelClassName = () => {
        let className = otherProps.value.length ? "shrink" : "";
        className += " form-input-label";
        return className;
    }

    return (
        <div className="form-group">
            <input className="form-input" {...otherProps}/>
            {
                label &&
                <label htmlFor={otherProps.id} className={`${getLabelClassName()}`}>{label}</label>
            }

        </div>
    );
}
