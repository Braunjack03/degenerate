import { gql } from "@apollo/react-hooks";

export const FETCH_HIGHEST_SCORE = gql`
  {
    getHighestScore
  }
`;
export const FETCH_IMAGES = gql`

   query getRarityImages($FilterType:String){
        getRarityImages(FilterType:$FilterType){
            All
            Common
            UnCommon
            Rare
            SuperRare
            Mythic
                    }
    }

`;
