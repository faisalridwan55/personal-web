import styled from "styled-components"
import { Box } from "./Grid";

import { Title } from "./Text";

const LoadingContainer = styled(Box)`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 10em;
	height: 10em;
	z-index: 998;
	margin: auto;
	position: fixed;
	overflow: visible;
	text-align: center;
	justify-content: center;
	
	&:before {
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
		background-color: rgba(0,0,0,0.95);
	}
`;

const Loading = ({color}) => {
	return (
	<LoadingContainer>
		<Title 
			style={{zIndex: 999}}
			animate={{ rotate: 360, color: color}}
			transition={{ duration: 1, repeat: Infinity }}
		>
			Welcome!
			-FSL-
		</Title>
	</LoadingContainer>
)}

export default Loading;