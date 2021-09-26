// Styled Components
import styled from "styled-components";

// Components
import Project from "./Project/Project";

const Projects = () => {
  return (
    <Wrapper>
       <Project
        image={
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjessedamiani%2Ffiles%2F2017%2F12%2FScreen-Shot-2017-12-16-at-4.03.02-PM-1200x776.jpg"
        }
        title={"MARKETPLACE APP"}
        main={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi, quos eum nam perferendis hic."
        }
        link={"https://cardano.org/"}
      />
        <Project
        image={
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjessedamiani%2Ffiles%2F2017%2F12%2FScreen-Shot-2017-12-16-at-4.03.02-PM-1200x776.jpg"
        }
        title={"MARKETPLACE APP"}
        main={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi, quos eum nam perferendis hic."
        }
        link={"https://cardano.org/"}
      />
        <Project
        image={
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjessedamiani%2Ffiles%2F2017%2F12%2FScreen-Shot-2017-12-16-at-4.03.02-PM-1200x776.jpg"
        }
        title={"MARKETPLACE APP"}
        main={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi, quos eum nam perferendis hic."
        }
        link={"https://cardano.org/"}
      />
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;
