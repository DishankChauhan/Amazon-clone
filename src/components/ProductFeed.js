import React from 'react';
import Product from './Product';

function ProductFeed({ products }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {products.map(({ id, title, price, description, category, image, rating, hasPrime }, index) => (
                <div key={id} className={`md:col-span-${index === 4 ? '2' : 'auto'}`}>
                    <Product
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        hasPrime={hasPrime}
                        rating={rating}

                    >
                    </Product>
                </div>
            ))}
            <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt='' />
        </div>
    );
}

export default ProductFeed;
