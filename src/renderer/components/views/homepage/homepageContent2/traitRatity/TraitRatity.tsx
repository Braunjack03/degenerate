import "./index.scss";
import TraitLevel from "./traitLevel/traitLevel";
import PrimaryButton from "../../../../common/primaryButton/primaryButton";
import { useHistory } from "react-router-dom";

export default function TraitRatity(): JSX.Element {
  const history = useHistory()
  return (
    <div id="traits" className="hp-trait" data-aos="zoom-in">
      <div className="hp-trait-content">
        <h1>Trait Ratity</h1>
        <p>
          All apes are equal, but some apes are more eqaul than others. That’s
          why we’ve established a trait rarity system to tell which of our
          students are likely destined for greatness.
        </p>
        <p>
          There are 164 total traits in the academy and these have been
          categorized into a teir based system (seen on the right). Traits are
          ranked from ‘common’ all the way through to ‘mythic’ and each rank has
          a corresponding % chance of being minted. All of the Academy’s traits
          and their rairity % can be viewed over in our ‘traits’ section. Click
          below to check them out.
        </p>
        <PrimaryButton
          className="hp-trait-btn"
          onClick={() => history.push('/rarities') }
        >
          View Traits
        </PrimaryButton>
      </div>
      <div className="hp-trait-levels">
        <TraitLevel text="common" color="var(--common)" />
        <TraitLevel text="uncommon" color="var(--uncommon)" />
        <TraitLevel text="rare" color="var(--rare)" />
        <TraitLevel text="very rare" color="var(--veryrare)" />
        <TraitLevel text="mythic" color="var(--mythic)" />
      </div>
    </div>
  );
}
