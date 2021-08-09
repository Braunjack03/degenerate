import "./index.scss";
import { FC } from "react";
const traitRarity: FC<{}> = () => {
  return (
    <>
      <div className="rarity-intro">
        <div className="rarity-intro_inner">
          <h1 className="rarity-intro_title">TRAIT RARITY</h1>
          <p className="rarity-intro_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            eveniet aliquid nisi corrupti esse itaque officia excepturi, enim
            quos voluptates, tempore reiciendis animi earum, repellendus eum.
            Incidunt, ad quia. Optio?
          </p>
        </div>
      </div>
      <div className="raritie-types">
        <ul className="rarity-types_ul">
          <li className="rarity-types_li">
            <div className="rarity-types_name">COMMON</div>
          </li>
          <li className="rarity-types_li">
            <div className="rarity-types_name">UNCOMMON</div>
          </li>
          <li className="rarity-types_li">
            <div className="rarity-types_name">RARE</div>
          </li>
          <li className="rarity-types_li">
            <div className="rarity-types_name">VERY RARE</div>
          </li>
          <li className="rarity-types_li">
            <div className="rarity-types_name">MYTHIC</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default traitRarity;
