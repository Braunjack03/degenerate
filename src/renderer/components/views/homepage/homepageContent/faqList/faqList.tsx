import "./index.scss";
import { useState, FC } from "react";
import FaqElement, { IFaqElement } from "./faqElement/faqElement";

const FAQList: FC<{ elements: IFaqElement[] }> = ({ elements }) => {
  const [current, setCurrent] = useState<number>(-1);
  const faqList = Object.entries(elements).map(([key, value], index) => (
    <FaqElement
      index={index}
      key={key}
      element={value}
      onClick={() => {
        if (index === current) {
          setCurrent(-1);
        } else {
          setCurrent(index);
        }
      }}
      open={index === current}
    />
  ));

  return <>{faqList}</>;
};

export default FAQList;
