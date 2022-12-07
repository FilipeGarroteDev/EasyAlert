import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiAlertCircle } from "react-icons/fi";

export default function Alert({ type, text }) {
	const [isAlerted, setIsAlerted] = useState(false);

	useEffect(() => {
		setIsAlerted(true);
		setTimeout(() => {
			setIsAlerted(false);
		}, 5000);
	}, []);

	return (
		<Box type={type} isAlerted={isAlerted}>
			{type !== "alert" ? (
				<>
					<FiAlertCircle />
					<p>{text}</p>
          <footer></footer>
				</>
			) : (
				<>
					<h1>{text}</h1>
					<input></input>
				</>
			)}
		</Box>
	);
}

const Box = styled.section`
  overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 20px;
	width: 300px;
	height: 80px;
	border-radius: 10px;
	position: absolute;
	right: ${(props) => (props.isAlerted ? "10px" : "-600px")};
	top: 10px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	background-color: #eeeeff;
	transition: all 0.5s;

	> p {
		font-size: 18px;
		text-align: center;
		color: #462929;
		font-weight: 700;
	}

	> h1 {
		font-size: 18px;
		text-align: center;
		color: #462929;
		font-weight: 700;
	}

	> svg {
		font-size: 56px;
		text-align: center;
		color: #5c3a3a;
	}

  >footer{
    height: 5px;
    width: ${(props) => (props.isAlerted ? "100%" : "0")};
    background-color: lightcoral;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 5s linear;
  }
`;
