import "./index.scss";
import shirt from "../../../../../../../assets/images/pictures/traits/ape-trait-body-icon.svg";
import mouth from "../../../../../../../assets/images/pictures/traits/ape-trait-mouth-icon.svg";
import cap from "../../../../../../../assets/images/pictures/traits/ape-trait-fur-icon.svg";
import hair from "../../../../../../../assets/images/pictures/traits/ape-trait-head-icon.svg";
import ape from "../../../../../../../assets/images/pictures/traits/ape-trait-logo.svg";
interface ICollapsableItem {
  Ape: any;
}

export default function CollapsableItem({
  Ape,
}: ICollapsableItem): JSX.Element {
  return (
    <div className="collapsable-pic">
      <img className="collapsable-pic_ape" src={Ape} alt=""></img>
      <div className="display-info">
        <div className="display-info_header">
          <h2 className="display-info_number">#3184 &nbsp;</h2>
          <p className="display-info_class">| Overall Rank:</p>
          <h2 className="display-info_number">782</h2>
        </div>
        <div className="stats">
          <div className="stats-item">
            <div className="stats-item_inner">
              <div className="stats-info">
                <div className="stats-row">
                  <img className="stats-icon" src={shirt} alt="" />
                  <p className="stats-info_header">BODY&nbsp;</p>
                  <p className="stats-info_text"> - SUPER RARE</p>
                </div>
                <div className="stats-column">
                  <p className="stats-info_header">ASTROUNAUT</p>
                  <p className="stats-info_text"> 0.05% has this trait</p>
                </div>
              </div>
              <div className="stats-item-img">
                <img src={ape} alt="" />
              </div>
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item_inner">
              <div className="stats-info">
                <div className="stats-row">
                  <img className="stats-icon" src={mouth} alt="" />
                  <p className="stats-info_header">MOUTH&nbsp;</p>
                  <p className="stats-info_text"> - UNCOMMON</p>
                </div>

                <div className="stats-column">
                  <p className="stats-info_header">HOTDOG</p>
                  <p className="stats-info_text"> 6% has this trait</p>
                </div>
              </div>
              <div className="stats-item-img">
                <img src={ape} alt="" />
              </div>
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item_inner">
              <div className="stats-info">
                <div className="stats-row">
                  <img className="stats-icon" src={hair} alt="" />
                  <p className="stats-info_header">FUR&nbsp;</p>
                  <p className="stats-info_text"> - COMMON</p>
                </div>

                <div className="stats-column">
                  <p className="stats-info_header">RED / PEACH</p>
                  <p className="stats-info_text"> 22% has this trait</p>
                </div>
              </div>
              <div className="stats-item-img">
                <img src={ape} alt="" />
              </div>
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item_inner">
              <div className="stats-info">
                <div className="stats-row">
                  <img className="stats-icon" src={cap} alt="" />
                  <p className="stats-info_header">HEAD&nbsp;</p>
                  <p className="stats-info_text"> - COMMON</p>
                </div>
                <div className="stats-column">
                  <p className="stats-info_header">ACADEMY CAP</p>
                  <p className="stats-info_text"> 8% has this trait</p>
                </div>
              </div>
              <div className="stats-item-img">
                <img src={ape} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
