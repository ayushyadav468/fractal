import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/products' element={<ProductPage />} />

				<Route path='*' element={<div>404 | Not Found</div>} />
			</Route>
		</Routes>
	);
}

export default App;
