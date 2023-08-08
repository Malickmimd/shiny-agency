import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { Loader } from '../../utils/style/Loader';
import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { SurveyContext } from "../../utils/context/SurveyProvider";
import { useFetch, useTheme } from '../../utils/hooks'


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`


function Survey() {
const {idQuestion} = useParams()
const idQuestionNumber = parseInt(idQuestion)
const previdQuestionNumber = idQuestionNumber === 1 ? idQuestionNumber : idQuestionNumber - 1
const nextidQuestionNumber = idQuestionNumber + 1
const {answers, saveAnswers} = useContext(SurveyContext)
const { theme } = useTheme()

const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)

const { surveyData } = data

    return (
        <SurveyContainer>
          <QuestionTitle theme={theme}>Question {idQuestionNumber}</QuestionTitle>
          {isLoading ? (
            <Loader />
          ) : (
            <QuestionContent theme={theme}>{surveyData && surveyData[idQuestionNumber]}</QuestionContent>
          )}
          <ReplyWrapper>
            <ReplyBox
              onClick={() => saveAnswers({[idQuestionNumber]: true})}
              isSelected={answers[idQuestionNumber] === true}
              theme={theme}
            >
              Oui
            </ReplyBox>
            <ReplyBox
              onClick={() => saveAnswers({[idQuestionNumber]: false})}
              isSelected={answers[idQuestionNumber] === false}
              theme={theme}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>
          <LinkWrapper theme={theme}>
            <Link to={`/survey/${previdQuestionNumber}`}>Précédent</Link>
            {surveyData && surveyData[idQuestionNumber + 1] ? (
              <Link to={`/survey/${nextidQuestionNumber}`}>Suivant</Link>
            ) : (
              <Link to="/results">Résultats</Link>
            )}
          </LinkWrapper>
        </SurveyContainer>
      )
}

export default Survey;