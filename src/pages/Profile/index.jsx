import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import { Loader } from "../../utils/style/Loader";
import styled from 'styled-components';
import Card from "../../Components/Card";
import { Link } from "react-router-dom";

export default function Profile () {
    const {idProfile} = useParams()
    const { isLoading, data, error } = useFetch(`http://localhost:8000/freelance?id=${idProfile}`)

    const { freelanceData } = data
    
    return (
        <div>
            <CardWrapper>
            {isLoading ? ( <Loader /> )
            : 
            (<Card 
              key={freelanceData.id}
              label={freelanceData.job}
              name={freelanceData.name}
              picture={freelanceData.picture}
              location={freelanceData.location}
              available={freelanceData.available}
              tjm={freelanceData.tjm}
              skills={freelanceData.skills}
            />
            )}   
        </CardWrapper>
            <Link to={`/freelance`}>Précédent</Link> 
        </div>
        
    )
}

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`