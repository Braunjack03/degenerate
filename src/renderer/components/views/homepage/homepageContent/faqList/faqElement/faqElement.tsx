import { MouseEventHandler, FC, useRef } from "react";
import "./index.scss";
import Plus from "../../../../../../../assets/images/icons/plus.svg";
import Less from "../../../../../../../assets/images/icons/less.svg";

export interface IFaqElement {
  title: string;
  info: string;
}

interface IFaqElementProps {
  onClick: MouseEventHandler;
  element: IFaqElement;
  open: boolean;
  index: number;
}

const FaqElement: FC<IFaqElementProps> = ({ element, open, onClick }) => {
  const { title, info } = element;
  const refButton = useRef(null);
  return (
    <>
      <button ref={refButton} className="faq-outer" onClick={onClick}>
        <div className={`inner ${open ? "open" : ""}`}>
          <div className="title-container">
            <h1 className="title">{title}</h1>
            <button className="moreless">
              <span className="fidget">
                <img src={open ? Less : Plus} className="faq-svg" alt="" />
              </span>
            </button>
          </div>
          <div className={`info-container ${open ? "open" : ""}`}>
            <p className="info">{info}</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default FaqElement;
