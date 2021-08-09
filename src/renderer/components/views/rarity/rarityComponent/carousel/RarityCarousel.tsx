import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_IMAGES } from "../../../../../../graphql/queries";
import { useEffect, useState } from "react";
import { getName, getRarityName } from "./name";
import "./index.scss";
import { Divider } from "@material-ui/core";
import Head from "../../../../../../assets/images/pictures/traits/Head.svg";
import Fur from "../../../../../../assets/images/pictures/traits/Fur _ Skin.svg";
import Mouth from "../../../../../../assets/images/pictures/traits/Mouth.svg";
import BackGround from "../../../../../../assets/images/pictures/traits/Background.svg";
import Teeth from "../../../../../../assets/images/pictures/traits/Teeth.svg";
import Clothing from "../../../../../../assets/images/pictures/traits/Body.svg";
import Eyewear from "../../../../../../assets/images/pictures/traits/Glasses.svg";
import _ from "lodash";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);
interface IBodyFilter {
  filter: string;
  rarities: string;
}

export default function RarityCarousel({
  filter,
  rarities,
}: IBodyFilter): JSX.Element {
  const [imageArray, setImageArray] = useState<string[] | undefined>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [Logo, setLogo] = useState<string>("");
  const { loading, data } = useQuery(FETCH_IMAGES, {
    variables: { FilterType: filter },
  });
  useEffect(() => {
    console.log(filter);
    switch (filter) {
      case "Head":
        setLogo(Head);
        break;
      case "Clothing":
        setLogo(Clothing);
        break;
      case "Mouth":
        setLogo(Mouth);
        break;
      case "Fur/Skin":
        setLogo(Fur);
        break;
      case "Teeth":
        setLogo(Teeth);
        break;
      case "Eyewear":
        setLogo(Eyewear);
        break;
      case "BackGround":
        setLogo(BackGround);
        break;

      default:
        break;
    }
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
    return <h1>Loading...</h1> ;
  } else if (imageArray?.length === 0) {
    return (
      <Swiper
        effect={"coverflow"}
        navigation={true}
        speed={1000}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
        breakpoints={{
          "360": {
            slidesPerView: 1,
          },
          "1024": {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div style={{display:"flex",flexDirection:"column"}}>
          <h2 style={{width:"100%"}}>No Images to show..</h2>
          <h2 style={{width:"100%"}}>please choose another filter </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  } else {
    return (
      <Swiper
        slidesPerView={3}
        navigation={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        speed={500}
        initialSlide={0}
        watchOverflow={false}
        centeredSlides={true}
        onSlideChange={(i) => {
          setActiveIndex(i.activeIndex);
        }}
        className="mySwiper"
        breakpoints={{
          "360": {
            slidesPerView: 1,
          },
          "600": {
            slidesPerView: 1,
          },
          "980": {
            slidesPerView: 3,

          },
        }}
      >
        {imageArray!.map((value, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <img
                  src={`${process.env.REACT_APP_IMAGE_LINK}${value}.png`}
                  alt="alt"
                />
              </SwiperSlide>
            </>
          );
        })}
        <div className={`label-wrapper ${
              rarities === "All"
                ? getRarityName(imageArray![activeIndex]).toString()
                : rarities === "Super Rare"
                ? "super-rare"
                : rarities.toLowerCase()
            }-border`} >
          <div
            className={`inner-wrapper ${
              rarities === "All"
                ? getRarityName(imageArray![activeIndex]).toString()
                : rarities === "Super Rare"
                ? "super-rare"
                : rarities.toLowerCase()
            }`}
          >
            {activeIndex < imageArray?.length! ? (
              <span className="left-label">
                <p id="top-label" style={{textAlign:"left"}}>
                  {getName(imageArray![activeIndex])}
                </p>
                <p id="bottom-line">Rarity %: TBD</p>
              </span>
            ) : (
              <span className="left-label">
                <p id="top-label" style={{textAlign:"left"}}>{getName(imageArray![0])}</p>
                <p id="bottom-line">Rarity %: TBD</p>
              </span>
            )}
            <Divider
              style={{ backgroundColor: "white" }}
              orientation="vertical"
              flexItem
            />
            <span className="right-label">
              <span>
              <p id="top-label" style={{margin:0,textAlign: "right" }}>
                {filter.toLocaleUpperCase()}
              </p>
              <p style={{ textAlign: "right" }} id="bottom-line">
                {rarities === "All"
                  ? getName(getRarityName(imageArray![activeIndex]).toString())
                  : rarities.toUpperCase()}
              </p>
              </span>
              <img src={Logo} id="logo-trait" alt="" />
            </span>
           
          </div>
        </div>
      </Swiper>
    );
  }
}
//     {/* {getName(
//   getRarityName(imageArray![0]).toString()
// ).toLocaleLowerCase() === "common"
//   ? "13%"
//   : getName(
//       getRarityName(imageArray![0]).toString()
//     ).toLocaleLowerCase() === "uncommon"
//   ? "4%"
//   : getName(
//       getRarityName(imageArray![0]).toString()
//     ).toLocaleLowerCase() === "rare"
//   ? "2%"
//   : getName(
//       getRarityName(imageArray![0]).toString()
//     ).toLocaleLowerCase() === "super-rare"
//   ? "0.5%"
//   : "0.1%"} */}
