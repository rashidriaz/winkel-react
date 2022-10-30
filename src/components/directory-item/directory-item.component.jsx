import {DirectoryContainer, BackgroundImage, DirectoryBodyContainer} from "./directory-item.styles";
import {useNavigate} from "react-router-dom";

export const DirectoryItem = ({category: {title, imageUrl, route}}) => {

    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryContainer onClick={onNavigateHandler}>
            <BackgroundImage
                style={{backgroundImage: `url(${imageUrl})`}}/>
            <DirectoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now!</p>
            </DirectoryBodyContainer>
        </DirectoryContainer>
    )
}
