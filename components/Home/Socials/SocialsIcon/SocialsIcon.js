// Styled Components
import styled from "styled-components";

const SocialsIcon = (props) => {
  return (
    <Wrapper>
      <a href={props.link} target="_blank" rel="noreferrer">
        {typeof props.icon === "string" ? (
          <img src={props.icon} className="icon" />
        ) : (
          props.icon
        )}
        <p className="text">{props.text}</p>
      </a>
    </Wrapper>
  );
};

export default SocialsIcon;

const Wrapper = styled.div`
  height: min-content;
  cursor: pointer;
  height: 100px;

  .icon {
    fill: #cf0404;
    font-size: 50px;
    width: 50px;
  }

  .text {
    font-size: 1rem;
    text-align: center;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: #fff;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
