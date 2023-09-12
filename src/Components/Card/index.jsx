import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import DefaultPicture from '../../assets/profile.png'

const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`
const CardP = styled.p`
  margin-bottom: 5px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 400px;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
function enumSkills(skills) {
  
  const result = [];
  for (let i = 0; i < skills.length; i++) {
    result.push(skills[i]);
    if (i !== skills.length - 1) {
      result.push(",");
    }
  }
  return result.join("");
}



function Card({ label, name, picture, location, available, tjm, skills }) {
  const { theme } = useTheme()
  const [isFavorite, setIsFavorite] = useState(false)
  const star = isFavorite ? '⭐️' : ''

  return (
    <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle theme={theme}>
        {star} {name} {star}
      </CardTitle>
      <CardP theme={theme}>{location && `Vis à : ${location}`}</CardP>
      {available && <CardP theme={theme}>Actuellement {available && 'disponible'}</CardP>}
      {tjm && <CardP theme={theme}>{`TJM: ${tjm}$`}</CardP>}
      {skills && <CardP theme={theme}>{ `Skills : ${enumSkills(skills)}`}</CardP>}
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  location: PropTypes.string,
  available: PropTypes.bool,
  tjm: PropTypes.number,
  skills: PropTypes.array
}

Card.defaultProps = {
  label: '',
  name: '',
  picture: DefaultPicture,
}

export default Card