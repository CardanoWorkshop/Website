// Styled Components
import styled from "styled-components";

// Material UI
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import NoteIcon from "@mui/icons-material/Note";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ExtensionIcon from "@mui/icons-material/Extension";
import PanToolIcon from "@mui/icons-material/PanTool";

// Components
import MissionItem from "./MissionItem/MissionItem";

const Mission = () => {
  return (
    <Wrapper>
      <MissionItem
        text={"Redefining Cardano Governance"}
        icon={<PublicIcon className="icon" />}
      />

      <MissionItem
        text={"Driving adoption of Cardano"}
        icon={<SecurityIcon className="icon" />}
      />
      <MissionItem
        text={"Truly decentralized applications"}
        icon={<NoteIcon className="icon" />}
      />
      <MissionItem
        text={"Growing the global Cardano community"}
        icon={<AllInclusiveIcon className="icon" />}
      />
      <MissionItem
        text={"Open source development process"}
        icon={<ExtensionIcon className="icon" />}
      />
      <MissionItem
        text={"Empowering innovation"}
        icon={<PanToolIcon className="icon" />}
      />
    </Wrapper>
  );
};

export default Mission;

const Wrapper = styled.div`
  height: max-content;
  margin: 0 auto;
  padding: 0 20px;

  //
  width: 1000px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  //

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 50px;

  //
  justify-items: center;
  @media only screen and (max-width: 610px) {
    justify-items: left;
  }
  //

  .header {
    align-self: center;

    height: 100%;

    .text {
      font-size: 30px;
    }

    .icon {
      font-size: 50px;
      fill: #cf0404;
    }

    @media only screen and (max-width: 610px) {
      margin-bottom: 20px;
    }
  }
`;
