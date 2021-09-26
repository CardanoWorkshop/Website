// Styled Components
import styled from "styled-components";

// Material UI
import TwitterIcon from "@mui/icons-material/Twitter";

// Components
import SocialsIcon from "./SocialsIcon/SocialsIcon";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          text={"Youtube"}
          icon={<YouTubeIcon className="icon" />}
          link={"https://www.youtube.com/channel/UCSiO9JrFJfUtlmwu6rq7rIA"}
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
    width: 1000px;
    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
    //
  }
`;
