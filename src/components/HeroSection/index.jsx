import style from './styles.css';

const HeroSection = () => {
	return (
		<main className='hero_section'>
			<div>
				<p className='hero_section_main_heading'>
					Unlock <span className='hero_section_main_heading_style_1'>your</span>{' '}
				</p>
				<p className='hero_section_main_heading'>online growth</p>
				<p className='hero_section_main_heading'>
					Potential{' '}
					<span className='hero_section_main_heading_style_2'>Yes</span>
				</p>
				<div className='hero_section_action_btn_container'>
					<button className='hero_section_action_btn'>Our Product</button>
					<button className='hero_section_play_btn'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='31'
							height='35'
							viewBox='0 0 31 35'
							fill='none'
						>
							<path
								d='M29.2098 16.0573C30.3385 16.709 30.3385 18.3383 29.2098 18.99L2.54251 34.3863C1.41374 35.038 0.0027771 34.2234 0.0027771 32.92V2.1273C0.0027771 0.823908 1.41374 0.0092876 2.54252 0.660985L29.2098 16.0573Z'
								fill='#2C5F52'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div>
				<div className='hero_section_img'>
					<img
						src='/casual-life-3d-boy-sitting-with-laptop-and-cup.png'
						alt='boy sitting with laptop'
					/>
				</div>
			</div>
		</main>
	);
};

export default HeroSection;
