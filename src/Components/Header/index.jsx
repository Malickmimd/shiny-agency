import { Link } from "react-router-dom";
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Darklogo from '../../assets/dark-logo.png'
import Lightlogo from '../../assets/light-logo.png'
import { useTheme } from "../../utils/hooks";

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    padding: 15px;
    color: #8186a0;
    ${({$isFullLink}) => 
        $isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const StyleNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyleLinks = styled.div`
    margin-right: 40px;

`

function Header() {
    const { theme } = useTheme()

    return (
            <StyleNav>
                {theme === 'light' ? <img src={Darklogo} alt="shiny-logo" /> : 
                    <img src={Lightlogo} alt="shiny-logo" />
                }
                <StyleLinks>
                        <StyledLink to="/">Accueil</StyledLink>
                        <StyledLink to="/freelance">Profils</StyledLink>
                        <StyledLink to="/survey/1" $isFullLink >Faire le test</StyledLink>
                </StyleLinks>
            </StyleNav>                
    )   
}

export default Header