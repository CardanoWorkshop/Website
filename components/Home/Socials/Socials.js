// Styled Components
import styled from "styled-components";

// Material UI
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";

// Components
import SocialsIcon from "./SocialsIcon/SocialsIcon";

const Socials = () => {
  return (
    <Wrapper>
      <p className="header">Join the community</p>

      <div className="items">
        <SocialsIcon
          text={"Discord"}
          icon={"./svg/discord-icon.svg"}
          link={"https://discord.gg/FYNUsDFn6W"}
        />
        <SocialsIcon
          text={"Twitter"}
          icon={<TwitterIcon className="icon" />}
          link={"https://twitter.com/CardanoWorkshop"}
        />
        <SocialsIcon
          text={"Reddit"}
          icon={<RedditIcon className="icon" />}
          link={"https://www.reddit.com/r/CardanoWorkshop/"}
        />
        <SocialsIcon
          text={"Github"}
          icon={<GitHubIcon className="icon" />}
          link={"https://github.com/CardanoWorkshop"}
        />
      </div>
    </Wrapper>
  );
};

export default Socials;

const Wrapper = styled.div`
  width: 100%;
  height: min-content;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    font-size: 2rem;
    padding-bottom: 50px;
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    //
    width: 800px;
    @media only screen and (max-width: 825px) {
      width: 100%;
    }
    //
  }
`;
