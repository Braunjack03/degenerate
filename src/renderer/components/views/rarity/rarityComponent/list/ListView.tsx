import "./index.scss";
import { useQuery } from "@apollo/react-hooks";
// import Swiper core and required modules
import { FETCH_IMAGES } from "../../../../../../graphql/queries";
import { useEffect, useState } from "react";
import { getName, getRarityName } from "../carousel/name";

// install Swiper modules
interface IBodyFilter {
  filter: string;
  rarities: string;
}

export default function ListView({
  filter,
  rarities,
}: IBodyFilter): JSX.Element {
  const [imageArray, setImageArray] = useState<string[] | undefined>([
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/222/200/300",
    "https://picsum.photos/id/111/200/300",
  ]);
  const { loading, data } = useQuery(FETCH_IMAGES, {
    variables: { FilterType: filter },
  });
  useEffect(() => {
    if (!loading) {
      switch (rarities) {
        case "All":
          setImageArray(data.getRarityImages.All);
          break;
        case "Common":
          setImageArray(data.getRarityImages.Common);
          break;
        case "UnCommon":
          setImageArray(data.getRarityImages.UnCommon);
          break;
        case "Rare":
          setImageArray(data.getRarityImages.Rare);
          break;
        case "Super Rare":
          setImageArray(data.getRarityImages.SuperRare);
          break;
        case "Mythic":
          setImageArray(data.getRarityImages.Mythic);
          break;

        default:
          break;
      }
    } // eslint-disable-next-line
  }, [filter, loading, rarities]);

  if (loading) {
    return <h1>loading</h1>;
  } else if (imageArray?.length === 0) {
    return (
      <>
        <h1>No Images to show..</h1>
        <h1>please choose another filter </h1>
      </>
    );
  } else {
    return (
      <div className="list-wrapper">
          <h4 style={{textAlign:"left", width:"fit-content"}}>{filter.toLocaleUpperCase()} - {rarities.toLocaleUpperCase()}</h4>
        {imageArray?.map((el, index) => {
          return (
            <div
              className={`list-item ${
                rarities === "All"
                  ? getRarityName(imageArray![index]).toString()
                  : rarities === "Super Rare"
                  ? "super-rare"
                  : rarities.toLowerCase()
              }-list`}
            >
              <span>
                <p id="header">Name:</p>
                <p id="value">{getName(imageArray![index])}</p>
              </span>
              <span>
                <p id="header">Category:</p>
                <p id="value">{getName(getRarityName(imageArray![index]).toString())}</p>
              </span>
              <span>
                <p id="header">Rarity %</p>
                <p id="value">
                  {/* {getName(
                    getRarityName(imageArray![index]).toString()
                  ).toLocaleLowerCase() === "common"
                    ? "13%"
                    : getName(
                        getRarityName(imageArray![index]).toString()
                      ).toLocaleLowerCase() === "uncommon"
                    ? "4%"
                    : getName(
                        getRarityName(imageArray![index]).toString()
                      ).toLocaleLowerCase() === "rare"
                    ? "2%"
                    : getName(
                        getRarityName(imageArray![index]).toString()
                      ).toLocaleLowerCase() === "super-rare"
                    ? "0.5%"
                    : "0.1%"} */}
                    TBD
                </p>
              </span>
              
            </div>
          );
        })}
      </div>
    );
  }
}
