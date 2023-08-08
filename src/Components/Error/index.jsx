import ErrorImage from '../../assets/404.svg'
import styled from 'styled-components'


const Stylediv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyleImage = styled.img`
    width: 50%;
    height: 50vh;

`


function Error() {
    return (
      <Stylediv>
          <h1>Oups...</h1>
          <StyleImage src={ErrorImage} alt="404-error" />
          <h1>Il semblerait qu'il y'ait un problème</h1>
      </Stylediv>
    )
  }
  
  export default Error