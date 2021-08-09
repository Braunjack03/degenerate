import "./index.scss";
import HomeAcordion from "../../homeAcordion/HomeAcordion";
import { useState } from "react";
export default function FaqList(): JSX.Element {
  const [current, setCurrent] = useState(5);

  const handleExpanding = (index: number) => {
    if (current === index) {
      setCurrent(5);
    } else {
      setCurrent(index);
    }
  };
  return (
    <div className="hp-roadmap-list">
      <HomeAcordion
        header="How can i buy an ape?"
        text="Ape purchasing happens through the ‘Apeintosh’ at the top of the website. When minting opens up, login to the computer with the super secret password, connect your wallet and click on ‘mint.exe’. From here you can choose how many apes you want (up to 10 at a time) and BOOM! You’re a fully fledged degenerate student."
        expanded={current === 0}
        onChange={() => handleExpanding(0)}
      />
      <HomeAcordion
        header="When is the drop? How much?"
        text="The drop date is August 12th (follow our social channels for exact times. Mint price, or ‘enrolment fee’ is 6 SOL"
        expanded={current === 1}
        onChange={() => handleExpanding(1)}
      />
      <HomeAcordion
        header="WILL there be a secondary market?"
        text="Yes, we will be listing on Solanart as soon as we go live so you apes can trade immediately. We apologise in advance if there are any issues around this as the NFT space on Solana is still very fresh, we will do all we can to make this a seamless experience though. We will look to move over to our own marketplace in the near future."
        expanded={current === 2}
        onChange={() => handleExpanding(2)}
      />
      <HomeAcordion
        header="How many traits are in the academy?"
        text="Our student apes have a total of 164 possible traits with 7 total different categories (Fur/Skin, Head, Body (Clothing), Mouth, Eyewear, Teeth and background). You can see them in all their glory in the traits section of the website."
        expanded={current === 3}
        onChange={() => handleExpanding(3)}
      />
      <HomeAcordion
        header="Do you have a rarity system?"
        text="Yes, rarity is incredibly important to us. So much so that we have designed a trait hierarchy system that lists the traits from ‘common’ all the way through to ‘mythic’ and each rank has a corresponding % chance of being minted. All of the Academy’s traits and their rarity % can be viewed over in our ‘traits’ section."
        expanded={current === 4}
        onChange={() => handleExpanding(4)}
      />
    </div>
  );
}
