import { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import "./index.scss";
import RarityView from "./RarityView";
export default function Rarity(): JSX.Element {
  const [bodyFilter, setBodyFilter] = useState({
    filter: "Head",
    rarities: "All",
  });
  const [listView] = useState(false);
  const [dropdownState, setdropdownState] = useState(false)
  const handleRarity = (value: string) => {
    setBodyFilter({
      ...bodyFilter,
      rarities: value,
    });
  };
  const handleDropDownState = (value:string) =>{
    setdropdownState(false)
    setBodyFilter({
      ...bodyFilter,
      filter:value
    })
  }
  return (
    <div className="rarity-page-wrapper">
      <div className="filter">
        {/* <div className="view-option">
          <span className="option-item" onClick={() => setListView(true)}>
            <div className={listView ? "activeRadio" : "radio"} />
            <p>List View</p>
          </span>
          <span className="option-item" onClick={() => setListView(false)}>
            <div className={!listView ? "activeRadio" : "radio"} />
            <p>Image View</p>
          </span>
        </div> */}
        <div>
          <div className="dropdown-wrapper">
            <div onClick={()=>setdropdownState(!dropdownState)} className="dropdown-selector">
              <span>{bodyFilter.filter === "BackGround" ? "Background" : bodyFilter.filter}</span>
              <span>
                {" "}
                <ArrowDropDownCircleOutlinedIcon className="dropDownLogo" style={{color:"aquamarine"}} />
              </span>
            </div>
            <div className={`${ !dropdownState ? "dropdown-selections-inactive" : "dropdown-selections" }`}>
              <p onClick={()=>handleDropDownState("Head")}>Head</p>
              <p onClick={()=>handleDropDownState("Clothing")}>Clothing</p>
              <p onClick={()=>handleDropDownState("Mouth")}>Mouth</p>
              <p onClick={()=>handleDropDownState("Fur/Skin")}>Fur/Skin</p>
              <p onClick={()=>handleDropDownState("Teeth")}>Teeth</p>
              <p onClick={()=> handleDropDownState("Eyewear")}>Eyewear</p>
              <p onClick={()=> handleDropDownState("BackGround")}>Background</p>
            </div>
          </div>
        </div>
        <div className="rarities-selection">
          <span onClick={() => handleRarity("All")} className="rarity">
            <div
              className={
                bodyFilter.rarities === "All"
                  ? "rarity-selector-active"
                  : "rarity-selector"
              }
            />
            <label>All</label>
          </span>
          <span onClick={() => handleRarity("Common")} className="rarity">
            <div
              className={
                bodyFilter.rarities === "Common"
                  ? "rarity-selector-active"
                  : "rarity-selector"
              }
            />
            <label>Common</label>
          </span>
          <span onClick={() => handleRarity("UnCommon")} className="rarity">
            <div
              className={
                bodyFilter.rarities === "UnCommon"
                  ? "rarity-selector-active"
                  : "rarity-selector"
              }
            />
            <label>Uncommon</label>
          </span>
          <span onClick={() => handleRarity("Rare")} className="rarity">
            <div
              className={
                bodyFilter.rarities === "Rare"
                  ? "rarity-selector-active"
                  : "rarity-selector"
              }
            />
            <label>Rare</label>
          </span>
          <span onClick={() => handleRarity("Super Rare")} className="rarity">
            <div
              className={
                bodyFilter.rarities === "Super Rare"
                  ? "rarity-selector-active"
                  : "rarity-selector"
              }
            />
            <label>Super Rare</label>
          </span>
          <span onClick={() => handleRarity("Mythic")} className="rarity">
            <div
              className={
                bodyFilter.rarities === "Mythic"
                  ? "rarity-selector-active"
                  : "rarity-selector"
              }
            />
            <label>Mythic</label>
          </span>
        </div>
      </div>
      <div className="carousel">
      <RarityView filter={bodyFilter.filter} rarities={bodyFilter.rarities} listView={listView} />
      </div>
    </div>
  );
}
