// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

const Project = (props) => {
  return (
    <Wrapper>
      <div className="image">
        <img src={props.image} alt="project image" />
      </div>

      <div className="info">
        <p className="title">{props.title}</p>
        <p className="main">{props.main}</p>
      </div>

      <div className="link">
        <a href={props.link} target="_blank" rel="noreferrer">
          <Button variant="contained">
            LAUNCH DAPP <LaunchIcon className="icon" />
          </Button>
        </a>
      </div>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div`
  min-height: max-content;
  height: 475px;
  width: 350px;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .image {
    height: max-content;
    border-radius: 15px 15px 0px 0px;
    height: 225px;
    object-fit: cover;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 15px 15px 0px 0px;
    }
  }

  .info {
    transform: translateY(-15px);

    .title {
      font-size: 1.75rem;
      padding: 10px 0;
      color: #000;
      font-weight: 700;
      text-align: center;
    }

    .main {
      font-size: 1.25rem;
      color: #263238;
      text-align: center;
    }
  }

  .link {
    a {
      text-decoration: none;
    }

    button {
      background-color: #cf0404;
      padding: 0 12.5px;
      height: 50px;
      width: 100%;
      border-radius: 0px 0px 15px 15px;
      font-size: 1.25rem;

      display: flex;
      align-items: center;

      &:hover {
        background-color: rgba(207, 4, 4, 0.9);
      }

      .icon {
        margin-left: 7.5px;
      }
    }
  }
`;
