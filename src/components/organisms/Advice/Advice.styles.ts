import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	max-width: 468px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.5rem;
	padding: 4rem 2rem 5rem 2rem;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.darkGrayishBlue};

	img {
		width: 100%;
	}
`;

export const AdviceNumber = styled.h4`
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: ${({ theme }) => theme.neonGreen};
`;

export const AdviceMessage = styled.p`
	font-size: 2rem;
	font-weight: 400;
	line-height: 1.7;
	text-align: center;
`;

export const DiceWrapper = styled.button`
	position: absolute;
	bottom: 0;
	transform: translateY(50%);
	display: inline-flex;
	border: none;
	padding: 1.5rem;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.neonGreen};
	cursor: pointer;

	&::after {
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 100%;
		box-shadow: 0 0 2rem 0.5rem hsl(150, 100%, 80%);
		opacity: 0;
		transition: opacity 100ms linear;
	}

	&:hover::after {
		opacity: 1;
	}
`;
