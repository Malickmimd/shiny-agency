import Card from '../../Components/Card';
import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { Loader } from '../../utils/style/Loader'
import { useFetch, useTheme } from '../../utils/hooks';
import { useState } from 'react';
import { Link } from "react-router-dom";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
text-decoration: none;
`


function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`)

  const freelancersList  = data?.freelancersList

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="Loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <StyledLink key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              name={profile.name}
              picture={profile.picture}
            />
            </StyledLink>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances