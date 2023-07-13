import style from './styles.css';

const SubHeading = () => {
	return (
		<div className='subheading_container'>
			<div className='subheading_icon'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='41'
					height='40'
					viewBox='0 0 41 40'
					fill='none'
				>
					<circle cx='20.582' cy='20' r='20' fill='#2A2B2E' />
					<path
						d='M17.0526 17.9412L16.4763 16.8887L15.6717 17.3292L15.8858 18.2212L17.0526 17.9412ZM30.5574 11.5131C30.7433 10.877 30.3784 10.2106 29.7423 10.0247L19.376 6.99454C18.7399 6.8086 18.0735 7.17354 17.8876 7.80966C17.7016 8.44579 18.0666 9.1122 18.7027 9.29814L27.9171 11.9916L25.2236 21.206C25.0377 21.8421 25.4026 22.5085 26.0388 22.6945C26.6749 22.8804 27.3413 22.5155 27.5273 21.8794L30.5574 11.5131ZM18.8173 25.2941L19.5373 26.2541L20.1683 25.7809L19.9842 25.0141L18.8173 25.2941ZM17.629 18.9937L29.982 12.229L28.8292 10.124L16.4763 16.8887L17.629 18.9937ZM14.8315 29.7835L19.5373 26.2541L18.0973 24.3341L13.3915 27.8635L14.8315 29.7835ZM19.9842 25.0141L18.2195 17.6611L15.8858 18.2212L17.6505 25.5742L19.9842 25.0141Z'
						fill='white'
					/>
				</svg>
			</div>
			<h3 className='subheading_heading'>
				Drive your money to work smarter than others
			</h3>
			<p className='subheading_para'>
				A safe and secure investment needs guided approach with real time
				analytics and risk analysis, we can help you to catch all at once.
			</p>
		</div>
	);
};

export default SubHeading;
