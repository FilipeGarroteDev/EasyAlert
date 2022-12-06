import { useState } from "react";
import styled from "styled-components";

export default function Alert() {
  const [isAlerted, setIsAlerted] = useState(true)


	return (
    <Box isAlerted={isAlerted}>
      <h1>Alert!!!</h1>
      <p>Caramba, não dá pra fazer isso, irmão!</p>
    </Box>
  );
}

const Box = styled.section`
	width: 300px;
	height: 100px;
  border-radius: 10px;
  position: absolute;
  right: ${props => props.isAlerted ? "10px" : "-600px"};
  top: 10px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
	background-color: #eeeeff;
  transition: all 0.5s;
`;
