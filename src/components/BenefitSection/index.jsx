/* eslint-disable react/prop-types */
import styles from './styles.css';

const BenefitCard = ({ number, heading, text }) => {
	return (
		<div className='benefit_section_benefit_card_container'>
			<p className='benefit_section_benefit_card_number'>{number}</p>
			<div className='benefit_section_benefit_card_text_container'>
				<p className='benefit_section_benefit_card_heading'>{heading}</p>
				<p className='benefit_section_benefit_card_content'>{text}</p>
			</div>
		</div>
	);
};

const BenefitSection = () => {
	const benefitCardData = [
		{
			number: '01',
			heading: 'Early Access',
			text: 'You’ll be priorities from the  pool of millions'
		},
		{
			number: '02',
			heading: 'Zero Brokerage',
			text: 'You’ll be priorities from the  pool of millions'
		},
		{
			number: '03',
			heading: 'Zero Processing charges',
			text: 'You’ll be priorities from the  pool of millions'
		}
	];

	return (
		<section className='benefit_section_main'>
			<div className='benefit_section_container'>
				<h3 className='benefit_section_heading'>Signup Now & Get</h3>
				<div className='benefit_section_benefit_container'>
					{benefitCardData.map((data) => {
						return (
							<BenefitCard
								number={data.number}
								heading={data.heading}
								text={data.text}
								key={data.number}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default BenefitSection;
