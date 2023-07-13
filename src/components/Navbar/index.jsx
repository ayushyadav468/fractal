import { Link } from 'react-router-dom';
import Logo from '../Logo';

import styles from './styles.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to='/#'>
				<Logo />
			</Link>
			<ul className='navbar_links_container'>
				<li>
					<Link to='/products' className='navbar_link'>
						Products
					</Link>
				</li>
				<li>
					<Link to='/invest'>Invest</Link>
				</li>
				<li>
					<Link to='/community'>Community</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
			<button className='navbar_action_btn'>Early Access</button>
		</nav>
	);
};

export default Navbar;
