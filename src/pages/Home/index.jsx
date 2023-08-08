import { Link } from "react-router-dom";
import styled from 'styled-components';
import colors from '../../utils/style/colors'
import illustration from '../../assets/home-illustration.svg'
import { useTheme } from "../../utils/hooks";

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    padding: 15px;
    color: #8186a0;
    ${({$isFullLink}) => 
        $isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    width: 35%;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyleDiv = styled.div`
background-color: ${({ theme }) =>
theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: auto;
    height: 100vh;
    margin-top: 60px;
`

const StyleDivTexte = styled.div`
    width: 34%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 20px;
    margin-left: 80px;
    
`
const StyleImage = styled.img`
    width: 60%;
    height: 60vh;

`
const Styleh1 = styled.h1`
    width: 90%;
    margin-bottom: 50px;
    line-height: 50px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`


function Home() {
    const { theme } = useTheme()

  return (
      <StyleDiv theme={theme}>
          <StyleDivTexte>
              <Styleh1 theme={theme}>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</Styleh1>
              <StyledLink to="/survey/1" $isFullLink >Faire le test</StyledLink>
          </StyleDivTexte>
          <StyleImage src={illustration} alt="home-illustration" />
      </StyleDiv>
  )
}

export default Home;
