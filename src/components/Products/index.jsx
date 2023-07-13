/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './styles.css';

const ProductCard = ({ product }) => {
	return (
		<div className='product_card'>
			<img
				className='product_img'
				src={product.images[0]}
				alt={product.title}
			/>
			<div className='product_description_container'>
				<h3 className='product_heading'>{product.title}</h3>
				<p className='product_description'>{product.description}</p>

				<div className='product_price_container'>
					<p className='product_price'>${product.price}</p>
					<p className='product_discounted_price'>
						${product.discountPercentage}
					</p>
				</div>
			</div>
		</div>
	);
};

const Products = () => {
	const [productData, setProductData] = useState([]);

	const fetchProductData = async () => {
		await fetch('https://dummyjson.com/products?limit=100')
			.then((res) => res.json())
			.then((res) => setProductData(res.products))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchProductData();
	}, []);

	return (
		<div className='products_main'>
			<h1 className='products_heading'>Products</h1>
			<div className='products_container'>
				{productData.length > 0
					? productData.map((product) => {
							return <ProductCard product={product} key={product.id} />;
					  })
					: null}
			</div>
		</div>
	);
};

export default Products;
