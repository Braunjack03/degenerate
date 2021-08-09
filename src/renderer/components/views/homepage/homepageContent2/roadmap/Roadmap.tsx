import "./index.scss";
import { ReactComponent as Banana } from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
import RoadmapList from "./roadmapList/RoadmapList";

export default function RoadMap(): JSX.Element {
  return (
    <>
      <div id="roadmap" className="hp-roadmap" data-aos="fade-up">
        <div className="hp-rm-content">
          <h1>Utility & Roadmap</h1>
          <p>
            Minting a Degenerate Ape acts as your enrolement to the most
            prestegious Academy apes have ever built. While you’re a student,
            you wil have access to all that he academy has to offer currently,
            and in the future.
          </p>
          <p>
            Acess to the academy means more than just bragging rights to those
            uneducated, less sophistocated apes. We have made it our goal to
            make sure utility is always offered to all our students. This
            utility will start modest but will expand over time as we continue
            to build.
          </p>
          <p>
            We are building the academy not just for you, but also with you.
            Listed below is our roadmap for the near and longer term future.
          </p>
          <p>We hope you have your crayons ready.</p>
        </div>
        <Banana />
      </div>
      <RoadmapList />
    </>
  );
}
