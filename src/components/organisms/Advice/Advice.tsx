import { ReactComponent as Icon } from 'lib/images/icon-dice.svg';
import dividerDesktop from 'lib/images/pattern-divider-desktop.svg';
import dividerMobile from 'lib/images/pattern-divider-mobile.svg';
import { adviceType } from 'lib/types/advice';
import { useState } from 'react';
import { AdviceMessage, AdviceNumber, DiceWrapper, Wrapper } from './Advice.styles';

const initialAdvice = {
	id: 117,
	advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
};

const Adivice = () => {
	const [advice, setAdvice] = useState<adviceType>(initialAdvice);
	const [isError, setIsError] = useState(false);

	const fetchAdvice = async () => {
		const response = await fetch('https://api.adviceslip.com/advice');
		const data = await response.json();

		if (response.ok) {
			setIsError(false);
			setAdvice(data.slip);
		} else {
			setIsError(true);
		}
	};

	const handleGetAdvice = () => {
		fetchAdvice();
	};

	return (
		<Wrapper>
			{!isError ? (
				<>
					{' '}
					<AdviceNumber>Advice #{advice.id}</AdviceNumber>
					<AdviceMessage>{advice.advice}</AdviceMessage>
				</>
			) : (
				<p>Sorry, advice not found. Try later!</p>
			)}
			<img src={dividerMobile} srcSet={`${dividerMobile} 1024w, ${dividerDesktop} 1920w`} alt='divider' />
			<DiceWrapper onClick={handleGetAdvice}>
				<Icon />
			</DiceWrapper>
		</Wrapper>
	);
};

export default Adivice;
