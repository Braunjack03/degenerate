import "./index.scss";
import { Accordion } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { ReactComponent as Plus } from "../../../../../../assets/images/icons/plus.svg";
import { ReactComponent as Less } from "../../../../../../assets/images/icons/less.svg";
export default function HomeAcordion({
  expanded,
  onChange,
  header,
  text,
}: {
  expanded: boolean;
  onChange: () => void;
  header: string;
  text: string;
}): JSX.Element {
  return (
    <div className="hp-acordion">
      <Accordion
        style={{
          backgroundColor: expanded ? "var(--light-blue)" : "#2E1964",
          border: expanded ? "1.5px solid #fff" : "none",
          transition: "0.5s",
        }}
        expanded={expanded}
        onChange={onChange}
      >
        <AccordionSummary>
          <h2>{header}</h2>
          <div className={`hp-a-simbol`}>
            {expanded ? (
              <Less className="a-spin" />
            ) : (
              <Plus className="a-spin-reverse" />
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>{text}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
