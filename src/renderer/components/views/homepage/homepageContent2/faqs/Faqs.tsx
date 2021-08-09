import "./index.scss";
import FaqList from "./faqList/FaqList";
export default function Faqs(): JSX.Element {
  return (
    <div id="faqs" className="hp-faqs" data-aos="zoom-out">
      <h1>Faq'<sup style={{textTransform:"lowercase"}}>s</sup> </h1>
      <FaqList />
    </div>
  );
}
