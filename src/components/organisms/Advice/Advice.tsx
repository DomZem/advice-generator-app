import { ReactComponent as Icon } from 'lib/images/icon-dice.svg';
import dividerDesktop from 'lib/images/pattern-divider-desktop.svg';
import dividerMobile from 'lib/images/pattern-divider-mobile.svg';
import { AdviceMessage, AdviceNumber, DiceWrapper, Wrapper } from './Advice.styles';

const Adivice = () => {
	return (
		<Wrapper>
			<AdviceNumber>Advice #117</AdviceNumber>
			<AdviceMessage>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</AdviceMessage>
			<img src={dividerMobile} srcSet={`${dividerMobile} 1024w, ${dividerDesktop} 1920w`} alt='divider' />
			<DiceWrapper>
				<Icon />
			</DiceWrapper>
		</Wrapper>
	);
};

export default Adivice;
