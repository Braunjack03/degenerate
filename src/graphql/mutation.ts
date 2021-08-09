import { gql } from "@apollo/react-hooks";

export const SEND_HIGHEST_SCORE = gql`
  mutation setHighestScore($UserPK: String,$HighestScore: Int){
    setHighestScore(UserPK:$UserPK,HighestScore:$HighestScore){
      HighestScore
      Flag
    }
  }

`;