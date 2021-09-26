// Styled Components
import styled from "styled-components";

const MissionItem = (props) => {
  return (
    <Wrapper>
      {props.icon}
      <p className="text">{props.text}</p>
    </Wrapper>
  );
};

export default MissionItem;

const Wrapper = styled.div`
  height: 125px;

  //
  width: 260px;
  @media only screen and (max-width: 610px) {
    width: 305px;
  }
  //

  .icon {
    fill: #cf0404;
    font-size: 50px;
  }

  .text {
    font-size: 24px;
    margin-top: 10px;
    font-weight: 700;
  }
`;
