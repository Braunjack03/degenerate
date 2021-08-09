import "./index.scss";
import ApesPics from "./apePics/apePics";
import { useEffect } from "react";
import FaqList from "./faqList/faqList";
import TraitRarity from "./traitRarity/traitRarity";
import TeamMembers from "./teamMembers/teamMembers"; /* 
import CollapsableApePic from "./collapsableApePic/collapsableApePic"; */

export default function HomePageContent(): JSX.Element {
  useEffect(() => {});
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus neque a facere in ullam eligendi culpa magni, suscipit, quibusdam enim, veritatis deleniti reprehenderit voluptatem";
  const faqList = [
    { title: "DEGENERATE GALLERY", info: text },
    { title: "INTERACTIVE ACADEMY", info: text },
    { title: "EXCHANGE", info: text },
    { title: "ROADMAP 2.0", info: text },
  ];
  const faqList2 = [
    { title: "How can i buy an ape?", info: text },
    {
      title: "When is the drop? How much?",
      info: text,
    },
    { title: "How many traits are in the academy?", info: text },
    { title: "Do you have a rarity system?", info: text },
  ];

  return (
    <div id="outer">
      <div id="content">
        <main className="container">
          <div className="content">
            <h1 className="content-title">
              WHAT THE HELL IS THE DEGEN APE ACADEMY?
            </h1>
            <div className="content-container">
              <p className="content-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                officiis impedit dolore id? Nesciunt nostrum nihil expedita
                reprehenderit. Ea nihil fugiat sequi vel animi dicta beatae
                numquam error repellat optio. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ipsam officiis impedit dolore id?
                Nesciunt nostrum nihil expedita reprehenderit. repellat optio.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                officiis impedit dolore id? Nesciunt nostrum nihil expedita
                reprehenderit. repellat optio.
              </p>
              <h2 className="content-subtitle">PRICE: 6◎</h2>
            </div>
          </div>
        </main>
        <div className="apes-container">
          <ApesPics></ApesPics>
        </div>

        <section className="containerxl">
          <div className="contentxl">
            <h1 className="contentxl-title">UTILITY & ROADMAP</h1>
            <div className="contentxl-info_container">
              <p className="contentxl-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                officiis impedit dolore id? Nesciunt nostrum nihil expedita
                reprehenderit. Ea nihil fugiat sequi vel animi dicta beatae
                numquam error repellat optio. Lorem ipsum dolor sit amet
              </p>
              <p className="contentxl-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                officiis impedit dolore id? Nesciunt nostrum nihil expedita
                reprehenderit. Ea nihil fugiat sequi vel animi dicta beatae
                numquam error repellat optio. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ipsam officiis impedit dolore id?
                Nesciunt nostrum nihil expedita reprehenderit. repellat optio.
              </p>
            </div>
          </div>
        </section>
        <div className="faqs">
          <FaqList elements={faqList}></FaqList>
        </div>
        <div className="rarities">
          <TraitRarity></TraitRarity>
        </div>
        {/*         <div className="collapsable-container">
          <CollapsableApePic></CollapsableApePic>
        </div> */}
        <div className="section-title">
          <h1>FAQ's</h1>
        </div>
        <div className="faqs2">
          <FaqList elements={faqList2}></FaqList>
        </div>
        <div className="section-title2">
          <h1>TEAM</h1>
        </div>
        <div className="team-container">
          <TeamMembers></TeamMembers>
        </div>
      </div>
    </div>
  );
}
